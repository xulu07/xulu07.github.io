Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\Projects\xulu07.github.io\assets\img\wawaji.png')
$width = $img.Width
$height = $img.Height
$bmp = New-Object System.Drawing.Bitmap($img)
$top = -1
$bottom = -1
for ($y=0; $y -lt $height; $y++) {
    $white = 0
    for ($x=0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -gt 240 -and $p.G -gt 240 -and $p.B -gt 240) {
            $white++
        }
    }
    if ($white -gt ($width * 0.5)) {
        if ($top -eq -1) { $top = $y }
        $bottom = $y
    }
}
$midY = [Math]::Floor(($top + $bottom) / 2)
$left = -1
$right = -1
for ($x=0; $x -lt $width; $x++) {
    $p = $bmp.GetPixel($x, $midY)
    if ($p.R -gt 240 -and $p.G -gt 240 -and $p.B -gt 240) {
        $left = $x
        break
    }
}
for ($x=$width-1; $x -ge 0; $x--) {
    $p = $bmp.GetPixel($x, $midY)
    if ($p.R -gt 240 -and $p.G -gt 240 -and $p.B -gt 240) {
        $right = $x
        break
    }
}
Write-Host "W:$width H:$height T:$top B:$bottom L:$left R:$right"
$bmp.Dispose()
$img.Dispose()
