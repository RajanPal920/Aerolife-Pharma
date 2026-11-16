import subprocess
import os

CHROME = r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
USER_DATA = r"C:\Users\Rajan-PC\.gemini\antigravity\brain\a46e9f62-4e1d-4bca-9739-765cbdd9f526\temp_chrome_qa"

os.makedirs(USER_DATA, exist_ok=True)

tests = [
    ("http://127.0.0.1:3000/?slide=0", "E:\\aerolifePharma\\navbar_reduced_desktop.png", 1440, 900),
    ("http://127.0.0.1:3000/?dropdown=products", "E:\\aerolifePharma\\navbar_reduced_dropdown.png", 1440, 900),
    ("http://127.0.0.1:3000/", "E:\\aerolifePharma\\navbar_reduced_tablet.png", 768, 1024),
    ("http://127.0.0.1:3000/", "E:\\aerolifePharma\\navbar_reduced_mobile.png", 390, 844),
    ("http://127.0.0.1:3000/?menu=open&mobile_dropdown=products", "E:\\aerolifePharma\\navbar_reduced_mobile_drawer.png", 390, 844),
]

for url, path, w, h in tests:
    print(f"Capturing {path}...")
    subprocess.run([
        CHROME,
        "--headless=new",
        f"--user-data-dir={USER_DATA}",
        f"--screenshot={path}",
        f"--window-size={w},{h}",
        "--hide-scrollbars",
        url
    ], check=True)
    print(f"Captured {path}")

print("All screenshots captured!")
