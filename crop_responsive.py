from PIL import Image

im_tab = Image.open('redesign_tablet.png')
tab_nav = im_tab.crop((0, 0, im_tab.width, 140))
tab_nav.save('redesign_tablet_crop.png')

im_mob = Image.open('redesign_mobile.png')
mob_nav = im_mob.crop((0, 0, im_mob.width, 120))
mob_nav.save('redesign_mobile_crop.png')

print("Saved tablet and mobile crops!")

