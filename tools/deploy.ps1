$dist = $(Join-Path -Path $env:GITHUB_WORKSPACE -ChildPath 'master/docs/.vuepress/dist')

$deployArgs = @{
    Source       = $dist;
    Destination  = $(Join-Path -Path $env:GITHUB_WORKSPACE -ChildPath 'deploy');
    Sha          = $env:GITHUB_SHA;
    BuildTimeUtc = (Get-ChildItem "$dist/index.html").CreationTimeUtc;
}

& "$PSScriptRoot/Deploy-Website.ps1" @deployArgs -Verbose:('1' -eq $env:RUNNER_DEBUG)
