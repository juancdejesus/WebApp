param (
     [string]$ProjectName = "ReactApp",
     [string]$WorkingFolder = $(Split-Path -Path $MyInvocation.MyCommand.Path -Parent),
     [string]$ClientProject = "$WorkingFolder\ClientApp",
     [string]$ServerProject = "$WorkingFolder\WebApi",
     [string]$IISPath = "E:\IIS"
)



$ServerFiles = "$ServerProject\bin\Release\net8.0\publish\"
$ClientFiles = "$ClientProject\dist"

$TargetBase = "$($IISPath)\$($ProjectName)"
$Client = "$TargetBase\Client";
$Server = "$TargetBase\Server";

if (-Not $(Test-Path $TargetBase))  {
    New-Item -ItemType Directory -Path $TargetBase
    New-Item -ItemType Directory -Path $Client
    New-Item -ItemType Directory -Path $Server
} else {
    Remove-Item $Client\*.* -Recurse -Force
    Remove-Item $Server\*.* -Recurse -Force
}

#Build client project
Set-Location $ClientProject
npm run build 

#Build Server project
Set-Location $ServerProject
dotnet build
dotnet publish

#Copy files
Copy-Item $ClientFiles\* $Client -Recurse -Force
Copy-Item $ServerFiles\* $Server -Recurse -Force

Set-Location $WorkingFolder
