<#!
 # Copyright (c) Lemming <https://github.com/Lemmingh>
 # Licensed under the ISC License.
 #>

#Requires -Version 7

<# Prepare. #>

[string]$WorkingDirectoryPath = Split-Path -Path $PSScriptRoot -Parent
[string]$PackageManifestUrl = 'https://raw.githubusercontent.com/yzhang-gh/vscode-markdown/master/package.json'
[string]$PackageNlsUrl = 'https://raw.githubusercontent.com/yzhang-gh/vscode-markdown/master/package.nls.json'

Set-Location -Path $WorkingDirectoryPath

# https://devblogs.microsoft.com/nuget/deprecating-tls-1-0-and-1-1-on-nuget-org/
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12 -bor [System.Net.SecurityProtocolType]::Tls13

<# Main. #>

npm run docs:build
