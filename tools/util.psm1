<#!
 # Copyright (c) Lemming <https://github.com/Lemmingh>
 # Licensed under the ISC License.
 #>

#Requires -Version 7

# Indicates whether step debug is enabled.
# <https://github.com/actions/runner/releases/tag/v2.165.2>
# <https://github.com/actions/toolkit/blob/1cc56db0ff126f4d65aeb83798852e02a2c180c3/packages/core/src/core.ts#L118-L123>
$IsGithubStepDebug = '1' -eq $env:RUNNER_DEBUG

<#
.Synopsis
    Executes the script block, and writes the output to an expandable group in the log.

.Link
    https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#grouping-log-lines
#>
function Invoke-TaskCommand
{
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $Title,

        [Parameter(Mandatory = $true)]
        [scriptblock]
        $Command
    )

    Write-Output "::group::$Title"
    . $Command # I don't want to create too deeply nested scopes.
    Write-Output '::endgroup::'
}

<#
.Synopsis
    Executes the script block, and writes the output to an expandable group in the log.
    This is designed to run debug-purpose commands, which are executed only when step debug is enabled.

.Link
    https://docs.github.com/en/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging
#>
function Invoke-DebugCommand
{
    param (
        [Parameter(Mandatory = $true)]
        [string]
        $Title,

        [Parameter(Mandatory = $true)]
        [scriptblock]
        $Command
    )

    if ($IsGithubStepDebug)
    {
        Write-Output "::group::(debug) $Title"
        . $Command
        Write-Output '::endgroup::'
    }
}

Export-ModuleMember -Function *
