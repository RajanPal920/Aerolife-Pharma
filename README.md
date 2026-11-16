# Aero Life Pharma – Corporate Website (Phase 1)

Modern, professional pharmaceutical company homepage opening screen built with **React + Vite + Tailwind CSS**.

## Project Scope (Phase 1)

This phase strictly implements the introductory brand presence:
1. **Corporate Navbar / Header**:
   - Original Aero Life Pharma vector logo extracted directly from Page 1 of `CATLOP.pdf`.
   - Desktop horizontal navigation with active indicator (`Home`, `About Us`, `Products`, `Quality`, `Contact Us`).
   - Neat interactive dropdown for **Products** showcasing all 7 catalogue categories:
     - Tablets
     - Capsules
     - Syrups & Suspensions
     - Creams & Ointments
     - Powders
     - Nutraceuticals
     - Personal Care
   - Prominent brand-colored **"Enquire Now"** action button.
   - Fully responsive mobile navigation drawer with hamburger menu and collapsible accordion.
   - Clean placeholder navigation handling without 404 errors.

2. **Hero Section & Multi-Slide Showcase**:
   - Asymmetrical two-column composition with authentic pharmaceutical corporate layout.
   - Genuine high-resolution product packagings extracted from `CATLOP.pdf` (no artificial/AI generated medicines).
   - Three unique portfolio slides:
     - **Slide 1 – Pharmaceutical Formulations**: "Quality Products. A Healthier Tomorrow." (*AEROMOX-500 Capsules & AEROMARK-P Tablets*)
     - **Slide 2 – Syrups & Suspensions**: "Thoughtfully Presented Healthcare Solutions." (*IBUTRAP & OSOAERO Oral Suspensions*)
     - **Slide 3 – Nutraceuticals & Wellness**: "Supporting Everyday Health & Wellness." (*EVAERO-400 Softgels & Aerovita-Z Supplement*)
   - Interactive slider controls: Previous & Next arrows, slide counter indicator (`01 / 03`), pagination dots, 6-second auto-advance timer, auto-pause on hover/focus, and `prefers-reduced-motion` compliance.
   - Deep-linking URL parameter support (`?slide=0`, `?slide=1`, `?slide=2`, `?dropdown=products`, `?menu=open`).

---

## Brand Identity & Design System

- **Single Source of Truth**: The original product catalogue `CATLOP.pdf` and trademark registration documents.
- **Logo Preservation**:
  - Extracted as pure lossless vector paths (`aerolife-logo.svg`) and high-resolution 600 DPI transparent raster (`aerolife-logo.png`).
  - Preserved original red 'A' symbol, cyan orbital arrow, and official "AERO LIFE PHARMA" typography.
  - Colors: Primary Cyan (`#00AEEF`), Secondary Red (`#ED1C24`), Charcoal Headings (`#0C1B2A`), Slate Body (`#475569`).

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## File Structure

```
├── public/
│   └── assets/
│       ├── aerolife-logo.svg               # Original vector logo
│       ├── aerolife-logo.png               # High-res transparent logo
│       ├── slide1-aeromark-tablets.png     # AEROMARK-P packaging
│       ├── slide1-aeromox-capsules.png     # AEROMOX-500 packaging
│       ├── slide2-ibutrap-suspension.png   # IBUTRAP suspension pack
│       ├── slide2-osoaero-suspension.png   # OSOAERO suspension pack
│       ├── slide3-evaero-softgels.png      # EVAERO-400 softgels pack
│       └── slide3-aerovita-z.png           # Aerovita-Z wellness pack
├── src/
│   ├── assets/                             # Bundled assets
│   ├── components/
│   │   ├── Navbar.jsx                      # Responsive header with Products dropdown
│   │   └── HeroSlider.jsx                  # Asymmetrical 3-slide hero slider
│   ├── App.jsx                             # Main layout & notification toasts
│   ├── index.css                           # Tailwind CSS directives & typography
│   └── main.jsx                            # React 18 DOM root
├── index.html                              # HTML shell with Google Fonts
├── tailwind.config.js                      # Custom brand colors & shadows
├── vite.config.js                          # Vite build configuration
├── CATLOP.pdf                              # Original catalogue source
└── README.md                               # Project documentation
```

