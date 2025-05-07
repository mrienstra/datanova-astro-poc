# Resolve the path to the Git root of the project
$scriptPath = $PSScriptRoot
try {
    $gitRoot = git -C $scriptPath rev-parse --show-toplevel
} catch {
    Write-Error "Not inside a Git repository. Exiting."
    exit 1
}

# Open the folder in VS Code
& code $gitRoot
Start-Sleep -Seconds 3

# Activate VS Code window and run default build task (Ctrl+Shift+B)
$wshell = New-Object -ComObject wscript.shell
$wshell.AppActivate("Visual Studio Code") | Out-Null
Start-Sleep -Milliseconds 500
$wshell.SendKeys("^+B")

# Open the local development server in the default browser
Start-Sleep -Seconds 1
Start-Process "http://localhost:4321"
