from PIL import Image

im = Image.open('redesign_desktop_1440.png')
# Crop top 160px
nav = im.crop((0, 0, im.width, 160))
nav.save('redesign_nav_crop.png')

im_drop = Image.open('redesign_dropdown.png')
drop_crop = im_drop.crop((0, 0, im_drop.width, 500))
drop_crop.save('redesign_dropdown_crop.png')

print("Saved crops!")

