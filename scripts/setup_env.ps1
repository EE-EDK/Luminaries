param([switch]$Force)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
$ProjectRoot = Split-Path $ScriptDir -Parent

Write-Host "--- Initializing Environment for $(Split-Path $ProjectRoot -Leaf) ---" -ForegroundColor Cyan

# 1. Node.js Check
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js not found. Please install Node.js LTS and add it to your PATH."
}

# 2. Dependency Installation
$PkgPath = Join-Path $ProjectRoot "package.json"
if (Test-Path $PkgPath) {
    Write-Host "Installing dependencies via npm..." -ForegroundColor Yellow
    if (Test-Path (Join-Path $ProjectRoot "node_modules")) {
        if ($Force) {
            Write-Host "Force flag detected. Re-installing..." -ForegroundColor Yellow
            & npm install
        } else {
            Write-Host "node_modules already exists. Skipping npm install." -ForegroundColor Gray
        }
    } else {
        & npm install
    }
} else {
    Write-Host "No package.json found. Skipping dependency install." -ForegroundColor Gray
}

# 3. Toolchain Verification
Write-Host "Verifying toolchain..." -ForegroundColor Cyan
$tools = @("npm", "git")
foreach ($tool in $tools) {
    if (Get-Command $tool -ErrorAction SilentlyContinue) {
        Write-Host "[OK] $tool" -ForegroundColor Green
    } else {
        Write-Warning "[MISSING] $tool"
    }
}

Write-Host "--- Setup Complete ---" -ForegroundColor Green
