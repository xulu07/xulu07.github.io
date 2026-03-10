from PIL import Image

img = Image.open('d:/Projects/xulu07.github.io/assets/img/wawaji.png')
width, height = img.size
pixels = img.load()

# Find the white glass area
# It's a large white-ish rectangle.
# Let's scan for the first row that has a lot of white pixels in the middle.

white_threshold = 240
white_region = []

for y in range(height):
    white_count = 0
    for x in range(width):
        r, g, b = pixels[x, y][:3]
        if r > white_threshold and g > white_threshold and b > white_threshold:
            white_count += 1
    if white_count > width * 0.5:
        white_region.append(y)

if white_region:
    top = min(white_region)
    bottom = max(white_region)
    
    # Now find left/right at the middle row
    mid_y = (top + bottom) // 2
    left = 0
    right = width
    for x in range(width):
        r, g, b = pixels[x, mid_y][:3]
        if r > white_threshold and g > white_threshold and b > white_threshold:
            left = x
            break
    for x in range(width - 1, -1, -1):
        r, g, b = pixels[x, mid_y][:3]
        if r > white_threshold and g > white_threshold and b > white_threshold:
            right = x
            break
            
    print(f"Image Size: {width}x{height}")
    print(f"White Box (Glass) Boundaries:")
    print(f"Top: {top} ({top/height*100:.2f}%)")
    print(f"Bottom: {bottom} ({bottom/height*100:.2f}%)")
    print(f"Left: {left} ({left/width*100:.2f}%)")
    print(f"Right: {right} ({right/width*100:.2f}%)")
    print(f"Width: {right-left} ({(right-left)/width*100:.2f}%)")
    print(f"Height: {bottom-top} ({(bottom-top)/height*100:.2f}%)")
else:
    print("Could not find white region")
