Set-Location "$PSScriptRoot"
Remove-Item .\deploy-minimal -Recurse -Force -ErrorAction SilentlyContinue
New-Item .\deploy-minimal -ItemType Directory | Out-Null
function CopyTree($src, $dst) {
  $files = Get-ChildItem -Path $src -Recurse -File | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\.git\\' -and
    $_.FullName -notmatch '\\.vercel\\'
  }
  foreach ($file in $files) {
    $rel = $file.FullName.Substring($src.Length + 1)
    $target = Join-Path $dst $rel
    $dir = Split-Path $target
    if (-not (Test-Path $dir)) {
      New-Item -ItemType Directory -Path $dir | Out-Null
    }
    Copy-Item $file.FullName $target
  }
}
CopyTree .\api .\deploy-minimal\api
CopyTree .\artifacts\api-server .\deploy-minimal\artifacts\api-server
CopyTree .\artifacts\chef-kingston .\deploy-minimal\artifacts\chef-kingston
CopyTree .\lib\api-client-react .\deploy-minimal\lib\api-client-react
CopyTree .\lib\api-zod .\deploy-minimal\lib\api-zod
CopyTree .\lib\db .\deploy-minimal\lib\db
CopyTree .\lib\integrations\gemini-ai .\deploy-minimal\lib\integrations-gemini-ai
CopyTree .\attached_assets .\deploy-minimal\attached_assets
Copy-Item .\package.json, .\pnpm-lock.yaml, .\pnpm-workspace.yaml, .\vercel.json, .\.npmrc -Destination .\deploy-minimal
Write-Output 'deploy-minimal copy completed'