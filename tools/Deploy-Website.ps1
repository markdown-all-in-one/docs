<#!
 # Copyright (c) Lemming <https://github.com/Lemmingh>
 # Licensed under the ISC License.
 #>

#Requires -Version 7

[CmdletBinding()]
param (
    [string]
    [Parameter(Mandatory = $true)]
    [ValidateScript( { Test-Path -Path $_ -PathType Container })]
    $Source,

    [string]
    [Parameter(Mandatory = $true)]
    [ValidateScript( { Test-Path -Path "$_/.git" -PathType Container })]
    $Destination,

    [string]
    [ValidatePattern('^[a-z0-9]{40}$')]
    $Sha = $env:GITHUB_SHA,

    [datetime]
    [ValidateScript( { $_.Kind -eq [System.DateTimeKind]::Utc })]
    $BuildTimeUtc = [datetime]::UtcNow
)

<# Check environment. #>

if ($env:GITHUB_ACTIONS -ne 'true')
{
    Write-Warning 'This script is designed to run on GitHub Actions.'
}

if (-not $IsLinux)
{
    Write-Warning 'This script is designed to run on Linux.'
}

<# Prepare. #>

[string]$Timestamp = $BuildTimeUtc.ToString('o')

$InvokeTaskGroup = {
    param (
        [string]$Title,
        [scriptblock]$Command
    )

    Write-Output "::group::$Title"
    . $Command # I don't want to create too deeply nested scopes.
    Write-Output '::endgroup::'
}

Set-Variable -Name @('Timestamp', 'InvokeTaskGroup') -Option ReadOnly

$Global:isGithubDebug = [bool]$env:RUNNER_DEBUG

function Invoke-DebugCommand ([string]$Title, [scriptblock]$Command)
{
    if ($Global:isGithubDebug -or [bool]$env:RUNNER_DEBUG)
    {
        Write-Output "::group::[debug]$Title"
        & $Command
        Write-Output '::endgroup::'
    }
}

# Note:
# `$InvokeTaskGroup` is designed to run commands in the same scope as caller. Please dot sourcing it.
# Function `Invoke-DebugCommand` is designed to run debug-purpose commands in a child scope to minimize effects on caller.

<# Main. #>

. $InvokeTaskGroup -Title 'Arguments' -Command {
    Get-Variable -Name @('Source', 'Destination', 'Sha', 'Timestamp') | Format-Table -AutoSize -Wrap # `Timestamp` is clearer than `$BuildTimeUtc.ToString()`.
}

Set-Location -Path $Destination

Invoke-DebugCommand -Title 'Pre-Run: Empty the destination' -Command {
    Write-Output '::debug::Destination directory contents:'
    ls -l -A
    Write-Output '::debug::Remove-Item -WhatIf:'
    Remove-Item -Path "$Destination/*" -Exclude @('.git*', '.nojekyll') -Recurse -WhatIf
}

. $InvokeTaskGroup -Title 'Empty the destination' -Command {
    Remove-Item -Path "$Destination/*" -Exclude @('.git*', '.nojekyll') -Recurse -ErrorAction:Continue
}

Invoke-DebugCommand -Title 'Remaining entries' -Command {
    Write-Output '::debug::Remaining entries:'
    ls -l -A
}

. $InvokeTaskGroup -Title 'Copy files to the destination' -Command {
    Copy-Item -Path "$Source/*" -Destination $Destination -Recurse -PassThru | Where-Object { $_ -is [System.IO.FileInfo] }
}
# If `FileInfo` and `DirectoryInfo` were mixed together, `Format-List` seemed to be called. I don't know why.
# ? Should we install `tree` to list contents?

# ! Security concern: Mask everything potential in workflow file before debugging!
Invoke-DebugCommand -Title 'Git configuration' -Command {
    Write-Output '::debug::Git configuration:'
    git config --list --show-scope
    Write-Output '::debug::Git remotes:'
    git remote -v
}

. $InvokeTaskGroup -Title 'Push to remote repository' -Command {
    # Use the default config of the repository.
    # This script should work with <https://github.com/marketplace/actions/checkout>.

    Write-Output 'Set Git identity.'
    git config user.email 'noreply@github.com'
    git config user.name 'GitHub'

    Write-Output 'Commit changes.'
    git add -A
    git commit -m "Build $Sha at $Timestamp"

    Write-Output 'Push.'
    git push
}
