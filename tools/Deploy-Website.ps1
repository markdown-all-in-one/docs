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
    [ValidateScript( { [System.DateTimeKind]::Utc -eq $_.Kind })]
    $BuildTimeUtc = [datetime]::UtcNow
)

<# Check environment. #>

if ('true' -ne $env:GITHUB_ACTIONS)
{
    Write-Warning 'This script is designed to run on GitHub Actions.'
}

if (-not $IsLinux)
{
    Write-Warning 'This script is designed to run on Linux.'
}

<# Prepare. #>

[string]$Timestamp = $BuildTimeUtc.ToString('o')

Set-Variable -Name @('Timestamp') -Option ReadOnly

Import-Module -Name "$PSScriptRoot/util.psm1"

<# Main. #>

Invoke-TaskCommand -Title 'Arguments' -Command {
    Get-Variable -Name @('Source', 'Destination', 'Sha', 'Timestamp') | Format-Table -AutoSize -Wrap # `Timestamp` is clearer than `$BuildTimeUtc.ToString()`.
}

Set-Location -Path $Destination

Invoke-DebugCommand -Title 'Pre-Run: Empty the destination' -Command {
    Write-Output '::debug::Destination directory contents:'
    ls -l -A
    Write-Output '::debug::Remove-Item -WhatIf:'
    Remove-Item -Path "$Destination/*" -Exclude @('.git*', '.nojekyll') -Recurse -WhatIf
}

Invoke-TaskCommand -Title 'Empty the destination' -Command {
    Remove-Item -Path "$Destination/*" -Exclude @('.git*', '.nojekyll') -Recurse -ErrorAction:Continue
}

Invoke-DebugCommand -Title 'Remaining entries' -Command {
    Write-Output '::debug::Remaining entries:'
    ls -l -A
}

# I only care about which files have been copied. Thus, printing their full paths is enough.
#
# However, if you are going to log more info,
# remember to explicitly call `Format-Table`, or whatever output formatting method you need at the end of the pipeline.
# Otherwise, unexpected formatter may be called. (See "about_Format.ps1xml" on Microsoft Docs)
# And the output of this and the following Git operations may mix together.
# I also observed these weird behaviors in other scenarios on GitHub Actions.
# My conjecture about output mixing is:
# Cmdlets queue up to send output to the pipeline.
# PowerShell on CI doesn't wait to complete the formatting, but executes the next command.
# However, external programs have no knowledge of pipeline, and directly write to the output stream immediately.
# Thus, they race, resulting in chaos.
# Thus, we have to force PowerShell to wait by calling a formatter.
Invoke-TaskCommand -Title 'Copy files to the destination' -Command {
    Copy-Item -Path "$Source/*" -Destination $Destination -Recurse -PassThru | Where-Object { $_ -is [System.IO.FileInfo] } | ForEach-Object { $_.FullName }
}

# ! Security concern: Mask everything potential in workflow file before debugging!
Invoke-DebugCommand -Title 'Git configuration' -Command {
    Write-Output '::debug::Git configuration:'
    git config --list --show-scope
    Write-Output '::debug::Git remotes:'
    git remote -v
}

Invoke-TaskCommand -Title 'Push to remote repository' -Command {
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
