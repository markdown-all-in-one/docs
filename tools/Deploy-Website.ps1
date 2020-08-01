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

[string]$Timestamp = $BuildTimeUtc.ToString('o')

Set-Location -Path $Destination

Write-Verbose 'Empty the destination.'
Remove-Item -Path $Destination -Exclude @('.git*', '.nojekyll') -Recurse

Write-Output "::debug::Remaining entries:`n$($(ls -l -A) -join "`n")"

Write-Output '::group::Copy files to the destination.'
Copy-Item -Path "$Source/*" -Destination $Destination -Recurse -PassThru
Write-Output '::endgroup::'

# ! Security concern: Mask everything potential in workflow file before debugging!
Write-Output "::debug::Git configuration:`n$($(git config --list --show-scope) -join "`n")"

Write-Output '::group::Push to remote repository.'
# Use the default config of the repository.
# This script should work with <https://github.com/marketplace/actions/checkout>.
git add -A
git commit -m "Build $Sha at $Timestamp"
git push
Write-Output '::endgroup::'
