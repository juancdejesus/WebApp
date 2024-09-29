param (
     [string]$DatabaseName = "Main",
     [string]$ServerName = "."
)
Clear-Host

$ContextName = "$($DatabaseName)Context"
$ConnectionString = "Data Source=$($ServerName);Initial Catalog=$($DatabaseName);TrustServerCertificate=True;Trusted_Connection=True"


dotnet ef dbcontext scaffold "$($ConnectionString)" `
    Microsoft.EntityFrameworkCore.SqlServer --data-annotations --force `
    --context-dir Data --output-dir "Models\$($DatabaseName)" `
    --context "$($DatabaseName)Context"  --no-onconfiguring --schema "dbo"

        if( -Not $? )
        {
            Write-Host "Encountered error during EF database file generation."
            Exit
        }

#Create partial class to add connection string
$ContextFile = Get-ChildItem Data\${$DatabaseName}*Context.cs


$ContexContent = Get-Content -Path $ContextFile

$ClassName = $ContexContent | Select-String "public partial"
$Namespace = $ContexContent | Select-String "namespace"


$OnCofiguring = @"
using Microsoft.EntityFrameworkCore;

$Namespace

    $ClassName
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = WebApplication.CreateBuilder();
            var contextName = this.GetType().Name;
            var connectionString = builder.Configuration.GetConnectionString(contextName);
            optionsBuilder.UseSqlServer(connectionString);
        }

    }



"@

$FileName = "Data\$($ContextFile.BaseName).OnConfiguring.cs"

$OnCofiguring | Out-File "$FileName"


# Add/Update connection string

$appsettings = Get-ChildItem appsettings.json 
$appsettingsContent = $appsettings | Get-Content | ConvertFrom-Json

if ( $null -ne $appsettingsContent.ConnectionStrings ) {
    if ( $null -eq $appsettingsContent.ConnectionStrings."$ContextName" ) {
        $appsettingsContent.ConnectionStrings | add-member -Name $ContextName -value $ConnectionString -MemberType NoteProperty
    } else {
        $appsettingsContent.ConnectionStrings.$ContextName = $ConnectionString
    }   
} else {
    $ConnectionString =@"
     {
        "$($ContextName)": "Data Source=.;Initial Catalog=Main;TrustServerCertificate=True;Trusted_Connection=True"
     }
"@
    $appsettingsContent | add-member -Name "ConnectionStrings" -value $(Convertfrom-Json $ConnectionString) -MemberType NoteProperty

}


$appsettingsContent | ConvertTo-Json -depth 32| set-content 'appsettings.json'
