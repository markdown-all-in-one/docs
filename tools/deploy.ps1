$dist = $(Join-Path -Path $env:GITHUB_WORKSPACE -ChildPath 'master/docs/.vuepress/dist')

$deployArgs = @{
    Source       = $dist;
    Destination  = $(Join-Path -Path $env:GITHUB_WORKSPACE -ChildPath 'deploy');
    Sha          = $env:GITHUB_SHA;
    BuildTimeUtc = (Get-ChildItem "$dist/index.html").CreationTimeUtc;
}

& "$PSScriptRoot/Deploy-Website.ps1" @deployArgs -Verbose:([bool]$env:RUNNER_DEBUG)
# When `RUNNER_DEBUG` is a non-empty string, `Verbose` is set to `$true`.
# See
# <https://github.com/actions/runner/releases/tag/v2.165.2>
# <https://github.com/actions/toolkit/blob/1cc56db0ff126f4d65aeb83798852e02a2c180c3/packages/core/src/core.ts#L118-L123>
