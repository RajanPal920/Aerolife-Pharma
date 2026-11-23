/**
 * Aerolife Pharma - Comprehensive Verified Product Catalogue Data
 * Source of Truth: CATLOP.pdf (43 Pages, 84 Verified Monograph Products)
 * Strictly zero invented medications or fake claims.
 */

export const CATEGORIES = [
  {
    "id": "tablets",
    "slug": "tablets-capsules",
    "aliases": [
      "tablets",
      "tablets-caplets",
      "tablets-capsules"
    ],
    "title": "Tablets & Caplets",
    "shortDesc": "Analgesics, broad-spectrum antibiotics, NSAIDs, antipyretics & calcium formulations",
    "description": "Comprehensive range of solid oral dosage forms from our official product catalog, including dispersible, film-coated, and uncoated tablets.",
    "flagshipImage": "/assets/products/aeromark-sp.jpg",
    "icon": "Pill",
    "products": [
      {
        "id": "aeromark-sp-tablets",
        "slug": "aeromark-sp-tablets",
        "name": "AEROMARK-SP TABLETS",
        "category": "tablets",
        "composition": "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
        "dosageForm": "Tablet",
        "strength": "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
        "pack": "10 x 10 TABLETS",
        "page": 2,
        "image": "/assets/products/aeromark-sp.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "AEROMARK-SP TABLETS features Aceclofenac, Paracetamol & Serratiopeptidase Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Analgesic, Anti-Inflammatory & Anti-Edematous"
      },
      {
        "id": "aeromark-p-tablets",
        "slug": "aeromark-p-tablets",
        "name": "AEROMARK-P TABLETS",
        "category": "tablets",
        "composition": "Aceclofenac & Paracetamol Tablets IP",
        "dosageForm": "Tablet",
        "strength": "Aceclofenac 100 mg + Paracetamol 325 mg",
        "pack": "20 x 10 TABLETS",
        "page": 2,
        "image": "/assets/products/aeromark-p.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "AEROMARK-P TABLETS features Aceclofenac & Paracetamol Tablets IP. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "NSAID & Antipyretic Analgesic"
      },
      {
        "id": "clavaero-cv-625-tablets-10-x-6",
        "slug": "clavaero-cv-625-tablets-10-x-6",
        "name": "CLAVAERO-CV 625 TABLETS (10 x 6)",
        "category": "tablets",
        "composition": "Amoxycillin & Potassium Clavulanate Tablets I.P.",
        "dosageForm": "Tablet",
        "strength": "Amoxycillin 500 mg + Potassium Clavulanate 125 mg (625 mg)",
        "pack": "10 x 6 TABLETS",
        "page": 3,
        "image": "/assets/products/clavaero-cv-625.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "CLAVAERO-CV 625 TABLETS (10 x 6) features Amoxycillin & Potassium Clavulanate Tablets I.P.. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Penicillin Antibiotic"
      },
      {
        "id": "clavaero-cv-625-tablets-1-x-10",
        "slug": "clavaero-cv-625-tablets-1-x-10",
        "name": "CLAVAERO-CV 625 TABLETS (1 x 10)",
        "category": "tablets",
        "composition": "Amoxycillin & Potassium Clavulanate Tablets I.P.",
        "dosageForm": "Tablet",
        "strength": "Amoxycillin 500 mg + Potassium Clavulanate 125 mg (625 mg)",
        "pack": "1 x 10 TABLETS",
        "page": 3,
        "image": "/assets/products/clavaero-cv-625-tablets-1-x-10.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "CLAVAERO-CV 625 TABLETS (1 x 10) features Amoxycillin & Potassium Clavulanate Tablets I.P.. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Penicillin Antibiotic"
      },
      {
        "id": "aeronim-p-tablets",
        "slug": "aeronim-p-tablets",
        "name": "Aeronim - P Tablets",
        "category": "tablets",
        "composition": "Nimesulide & Paracetamol Tablets",
        "dosageForm": "Tablet",
        "strength": "Nimesulide 100 mg + Paracetamol 325 mg",
        "pack": "20 x 10 TABLETS",
        "page": 4,
        "image": "/assets/products/aeronim-p-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aeronim - P Tablets features Nimesulide & Paracetamol Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Analgesic & Anti-Inflammatory"
      },
      {
        "id": "aerocof-dx-tablets",
        "slug": "aerocof-dx-tablets",
        "name": "Aerocof - DX TABLETS",
        "category": "tablets",
        "composition": "Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Tablets",
        "dosageForm": "Tablet",
        "strength": "Dextromethorphan HBr 15 mg + Phenylephrine HCl 10 mg + Chlorpheniramine Maleate 2 mg",
        "pack": "10 x 10 TABLETS",
        "page": 4,
        "image": "/assets/products/aerocof-dx-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof - DX TABLETS features Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antitussive, Decongestant & Antihistaminic"
      },
      {
        "id": "aerocal-k2-7-tablets",
        "slug": "aerocal-k2-7-tablets",
        "name": "Aerocal - K2 7 Tablets",
        "category": "tablets",
        "composition": "Calcium Citrate Malate, Magnesium Sulphate, Zinc Sulphate, Vitamin K2 7 & Vitamin D3 Tablets",
        "dosageForm": "Tablet",
        "strength": "Calcium Citrate Malate 1250 mg + Vit K2-7 45 mcg + Vit D3 400 IU + Minerals",
        "pack": "1 x 10 TABLETS",
        "page": 5,
        "image": "/assets/products/aerocal-k2-7-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocal - K2 7 Tablets features Calcium Citrate Malate, Magnesium Sulphate, Zinc Sulphate, Vitamin K2 7 & Vitamin D3 Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Bone Mineral Health & Calcium Supplement"
      },
      {
        "id": "coldaero-tablets",
        "slug": "coldaero-tablets",
        "name": "Coldaero Tablets",
        "category": "tablets",
        "composition": "Aceclofenac, Paracetamol, Caffeine, Phenylephrine HCL & Cetirizine Dihydrochloride Tablets",
        "dosageForm": "Tablet",
        "strength": "Aceclofenac 100 mg + Paracetamol 325 mg + Phenylephrine 10 mg + Cetirizine 5 mg + Caffeine 30 mg",
        "pack": "10 x 10 TABLETS",
        "page": 5,
        "image": "/assets/products/coldaero-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Coldaero Tablets features Aceclofenac, Paracetamol, Caffeine, Phenylephrine HCL & Cetirizine Dihydrochloride Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Comprehensive Cold & Sinus Relief"
      },
      {
        "id": "gravogesic-mr-tablets",
        "slug": "gravogesic-mr-tablets",
        "name": "Gravogesic - MR Tablets",
        "category": "tablets",
        "composition": "Diclofenac Potassium, Paracetamol & Chlorzoxazone Tablets",
        "dosageForm": "Tablet",
        "strength": "Diclofenac Potassium 50 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
        "pack": "20 x 10 TABLETS",
        "page": 6,
        "image": "/assets/products/gravogesic-mr-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Gravogesic - MR Tablets features Diclofenac Potassium, Paracetamol & Chlorzoxazone Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "NSAID Analgesic & Skeletal Muscle Relaxant"
      },
      {
        "id": "sefaero-200-tablets",
        "slug": "sefaero-200-tablets",
        "name": "SEFAERO-200 TABLETS",
        "category": "tablets",
        "composition": "Cefixime Tablets I.P. 200 mg",
        "dosageForm": "Tablet",
        "strength": "Cefixime 200 mg (Dispersible)",
        "pack": "10 x 10 TABLETS",
        "page": 6,
        "image": "/assets/products/sefaero-200-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "SEFAERO-200 TABLETS features Cefixime Tablets I.P. 200 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "3rd Generation Cephalosporin Antibiotic"
      },
      {
        "id": "levoflek-l-tablets",
        "slug": "levoflek-l-tablets",
        "name": "Levoflek - L Tablets",
        "category": "tablets",
        "composition": "Levocetirizine Hydrochloride Tablets IP",
        "dosageForm": "Tablet",
        "strength": "Levocetirizine Hydrochloride 5 mg",
        "pack": "50 x 10 TABLETS",
        "page": 7,
        "image": "/assets/products/levoflek-l-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Levoflek - L Tablets features Levocetirizine Hydrochloride Tablets IP. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Non-Sedating Antihistamine / Anti-Allergic"
      },
      {
        "id": "levoflak-m-tablets",
        "slug": "levoflak-m-tablets",
        "name": "Levoflak - M Tablets",
        "category": "tablets",
        "composition": "Levocetirizine Hydrochloride And Montelukast Sodium Tablets IP",
        "dosageForm": "Tablet",
        "strength": "Levocetirizine HCl 5 mg + Montelukast Sodium 10 mg",
        "pack": "10 x 10 TABLETS",
        "page": 7,
        "image": "/assets/products/levoflak-m-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Levoflak - M Tablets features Levocetirizine Hydrochloride And Montelukast Sodium Tablets IP. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Anti-Allergic & Bronchial Anti-Asthmatic"
      },
      {
        "id": "zincaero-tablets",
        "slug": "zincaero-tablets",
        "name": "Zincaero Tablets",
        "category": "tablets",
        "composition": "Multivitamin, Multiminerals & Antioxidant Tablets",
        "dosageForm": "Tablet",
        "strength": "Multivitamin, Multimineral + Zinc & Antioxidants",
        "pack": "2 x 15 TABLETS",
        "page": 8,
        "image": "/assets/products/zincaero-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Zincaero Tablets features Multivitamin, Multiminerals & Antioxidant Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Nutritional Supplement & Immunity Booster"
      },
      {
        "id": "cycloaero-tablets",
        "slug": "cycloaero-tablets",
        "name": "CYCLOAERO Tablets",
        "category": "tablets",
        "composition": "Paracetamol & Dicyclomine Hydrochloride Tablets",
        "dosageForm": "Tablet",
        "strength": "Paracetamol 325 mg + Dicyclomine HCl 20 mg",
        "pack": "20 x 10 Tablets",
        "page": 8,
        "image": "/assets/products/cycloaero-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "CYCLOAERO Tablets features Paracetamol & Dicyclomine Hydrochloride Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antispasmodic & Gastrointestinal Analgesic"
      },
      {
        "id": "aerocal-d3-tablet",
        "slug": "aerocal-d3-tablet",
        "name": "Aerocal-D3 Tablet",
        "category": "tablets",
        "composition": "Calcium Citrate Malate with Vitamin D3 Tablets",
        "dosageForm": "Tablet",
        "strength": "Calcium Citrate Malate 1250 mg + Vitamin D3 400 IU",
        "pack": "10 x 1 x 15 TABLETS",
        "page": 9,
        "image": "/assets/products/aerocal-d3.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocal-D3 Tablet features Calcium Citrate Malate with Vitamin D3 Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Calcium & Bone Health Therapy"
      },
      {
        "id": "faero-xt-tablet",
        "slug": "faero-xt-tablet",
        "name": "Faero-XT Tablet",
        "category": "tablets",
        "composition": "Ferrous Ascorbate, Folic Acid and Zinc Sulphate Tablets",
        "dosageForm": "Tablet",
        "strength": "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc 22.5 mg",
        "pack": "1 x 10 TABLETS",
        "page": 10,
        "image": "/assets/products/aerolife-xt-tablet.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Faero-XT Tablet features Ferrous Ascorbate, Folic Acid and Zinc Sulphate Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Hematinic & Iron Deficiency Therapy"
      },
      {
        "id": "aerolife-hair-tablet",
        "slug": "aerolife-hair-tablet",
        "name": "Aerolife Hair Tablet",
        "category": "tablets",
        "composition": "Biotin, Calcium D-Pantothenate, Histidine, Cysteine, Copper Iron, Selenium, Niacinamide with Amino Acid Tablet",
        "dosageForm": "Tablet",
        "strength": "Biotin 10 mg + Amino Acids, L-Cysteine, Minerals & Vitamins",
        "pack": "1 x 10 TABLETS",
        "page": 10,
        "image": "/assets/products/aerolife-hair-tablet.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerolife Hair Tablet features Biotin, Calcium D-Pantothenate, Histidine, Cysteine, Copper Iron, Selenium, Niacinamide with Amino Acid Tablet. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Hair, Skin & Nail Nutritional Therapy"
      },
      {
        "id": "aerovit-9g-tablets",
        "slug": "aerovit-9g-tablets",
        "name": "Aerovit 9G Tablets",
        "category": "tablets",
        "composition": "Ginseng, Green Tea Extract, Grape Seed Extract, Ginkgo Biloba, Garlic Powder, Guggul, Ginger Root Extract, Green Coffee Bean Extract, Glycyrrhiza Glabra Extract, Lycopene, Omega-3 Fatty Acids, Essential Amino Acids, Multivitamin, Multimineral, L-Carnitine L-Tartrate & Trace Elements Tablets",
        "dosageForm": "Tablet",
        "strength": "9G Botanical Extracts + Lycopene, Omega-3, Multivitamins & Minerals",
        "pack": "10 x 10 TABLETS",
        "page": 11,
        "image": "/assets/products/aerovit-9g-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerovit 9G Tablets features Ginseng, Green Tea Extract, Grape Seed Extract, Ginkgo Biloba, Garlic Powder, Guggul, Ginger Root Extract, Green Coffee Bean Extract, Glycyrrhiza Glabra Extract, Lycopene, Omega-3 Fatty Acids, Essential Amino Acids, Multivitamin, Multimineral, L-Carnitine L-Tartrate & Trace Elements Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Advanced Multivitamin, Antioxidant & Vitality"
      },
      {
        "id": "frutmax-tablets",
        "slug": "frutmax-tablets",
        "name": "FrutMax Tablets",
        "category": "tablets",
        "composition": "Multivitamin, Multimineral and Antioxidant Tablets",
        "dosageForm": "Tablet",
        "strength": "Fruit Extracts, Multivitamins, Multiminerals & Antioxidants",
        "pack": "10 x 10 TABLETS",
        "page": 11,
        "image": "/assets/products/frutmax-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "FrutMax Tablets features Multivitamin, Multimineral and Antioxidant Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Daily Nutritional Health Supplement"
      },
      {
        "id": "lyaeroboost-tablets",
        "slug": "lyaeroboost-tablets",
        "name": "Lyaeroboost Tablets",
        "category": "tablets",
        "composition": "Lycopene, Vitamins, Minerals & Grape Seed Extract Tablets",
        "dosageForm": "Tablet",
        "strength": "Lycopene 10% 5000 mcg + Multivitamins & Grape Seed Extract",
        "pack": "1 x 10 Tablets",
        "page": 12,
        "image": "/assets/products/lyaeroboost-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Lyaeroboost Tablets features Lycopene, Vitamins, Minerals & Grape Seed Extract Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Potent Antioxidant & Cardiovascular Vitality"
      },
      {
        "id": "aero-nor-tz-tablets",
        "slug": "aero-nor-tz-tablets",
        "name": "AERO Nor-TZ Tablets",
        "category": "tablets",
        "composition": "Norfloxacin & Tinidazole Tablets",
        "dosageForm": "Tablet",
        "strength": "Norfloxacin 400 mg + Tinidazole 600 mg",
        "pack": "6 x 5 x 6 Tablets",
        "page": 12,
        "image": "/assets/products/aero-nor-tz-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AERO Nor-TZ Tablets features Norfloxacin & Tinidazole Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Gastrointestinal Antibiotic & Antiprotozoal"
      },
      {
        "id": "doloaero-650-tablets",
        "slug": "doloaero-650-tablets",
        "name": "Doloaero-650 Tablets",
        "category": "tablets",
        "composition": "Paracetamol Tablets IP 650 mg",
        "dosageForm": "Tablet",
        "strength": "Paracetamol 650 mg",
        "pack": "15 x 10 Tablets",
        "page": 13,
        "image": "/assets/products/doloaero-650-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Doloaero-650 Tablets features Paracetamol Tablets IP 650 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antipyretic & Analgesic (Fever & Pain)"
      },
      {
        "id": "dicloaero-sp-tablets",
        "slug": "dicloaero-sp-tablets",
        "name": "Dicloaero - SP Tablets",
        "category": "tablets",
        "composition": "Diclofenac Potassium, Paracetamol & Serratiopeptidase Tablets",
        "dosageForm": "Tablet",
        "strength": "Diclofenac Potassium 50 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg",
        "pack": "20 x 10 TABLETS",
        "page": 13,
        "image": "/assets/products/dicloaero-sp-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Dicloaero - SP Tablets features Diclofenac Potassium, Paracetamol & Serratiopeptidase Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "NSAID Analgesic, Anti-Inflammatory & Anti-Edema"
      },
      {
        "id": "aziaero-250-tablets",
        "slug": "aziaero-250-tablets",
        "name": "AZIAERO 250 Tablets",
        "category": "tablets",
        "composition": "Azithromycin Tablets IP 250 mg",
        "dosageForm": "Tablet",
        "strength": "Azithromycin 250 mg",
        "pack": "10 x 6 Tablets",
        "page": 14,
        "image": "/assets/products/aziaero-250-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AZIAERO 250 Tablets features Azithromycin Tablets IP 250 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Macrolide Antibiotic (Respiratory & Soft Tissue)"
      },
      {
        "id": "aziaero-500-tablets",
        "slug": "aziaero-500-tablets",
        "name": "AZIAERO 500 Tablets",
        "category": "tablets",
        "composition": "Azithromycin Tablets IP 500mg",
        "dosageForm": "Tablet",
        "strength": "Azithromycin 500 mg",
        "pack": "10 x 3 Tablets",
        "page": 14,
        "image": "/assets/products/aziaero-500-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AZIAERO 500 Tablets features Azithromycin Tablets IP 500mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Macrolide Antibiotic (Broad-Spectrum)"
      },
      {
        "id": "mefnaaero-spas-tablets",
        "slug": "mefnaaero-spas-tablets",
        "name": "MEFNAAERO SPAS Tablets",
        "category": "tablets",
        "composition": "Mefenamic Acid & Dicyclomine Tablets (250/20)",
        "dosageForm": "Tablet",
        "strength": "Mefenamic Acid 250 mg + Dicyclomine HCl 20 mg",
        "pack": "30 x 10 Tablets",
        "page": 15,
        "image": "/assets/products/mefnaaero-spas-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "MEFNAAERO SPAS Tablets features Mefenamic Acid & Dicyclomine Tablets (250/20). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antispasmodic & Primary Dysmenorrhea Analgesic"
      },
      {
        "id": "ketoaerol-dt-dispersible-tablets",
        "slug": "ketoaerol-dt-dispersible-tablets",
        "name": "Ketoaerol-DT Dispersible Tablets",
        "category": "tablets",
        "composition": "Ketorolac Tromethamine Dispersible Tablets",
        "dosageForm": "Dispersible Tablet",
        "strength": "Ketorolac Tromethamine 10 mg (Dispersible)",
        "pack": "10 x 15 Tablets",
        "page": 15,
        "image": "/assets/products/ketoaerol-dt-dispersible-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Ketoaerol-DT Dispersible Tablets is an official pharmaceutical product featuring Ketorolac Tromethamine Dispersible Tablets IP 10mg. Available in 10 x 15 commercial packaging.",
        "therapeuticCategory": "Potent NSAID Analgesic (Post-Operative & Dental)"
      },
      {
        "id": "ketoaerol-dt-tablets",
        "slug": "ketoaerol-dt-tablets",
        "name": "KETOAEROL-DT TABLETS",
        "category": "tablets",
        "composition": "Ketorolac Tromethamine Tablets IP 10mg",
        "dosageForm": "Tablet",
        "strength": "Ketorolac Tromethamine 10 mg",
        "pack": "10 x 15 TABLETS",
        "page": 41,
        "image": "/assets/products/ketoaerol-dt-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "KETOAEROL-DT TABLETS features Ketorolac Tromethamine Tablets IP 10mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Potent Non-Opioid Analgesic"
      },
      {
        "id": "aerovita-c-tablets",
        "slug": "aerovita-c-tablets",
        "name": "AEROVITA C TABLETS",
        "category": "tablets",
        "composition": "Vitamin C (Ascorbic Acid), Sodium Ascorbate & Zinc Chewable Tablets",
        "dosageForm": "Tablet",
        "strength": "Vitamin C (Ascorbic Acid) 500 mg + Sodium Ascorbate + Zinc 5 mg (Chewable)",
        "pack": "10 x 15 TABLETS",
        "page": 41,
        "image": "/assets/products/aerovita-c-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROVITA C TABLETS features Vitamin C (Ascorbic Acid), Sodium Ascorbate & Zinc Chewable Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Immunity Enhancer & Antioxidant Therapy"
      },
      {
        "id": "aeromark-mr-tablets",
        "slug": "aeromark-mr-tablets",
        "name": "AEROMARK-MR TABLETS",
        "category": "tablets",
        "composition": "Aceclofenac, Paracetamol & Chlorzoxazone Tablets",
        "dosageForm": "Tablet",
        "strength": "Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
        "pack": "10 x 10 TABLETS",
        "page": 42,
        "image": "/assets/products/aeromark-mr-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROMARK-MR TABLETS features Aceclofenac, Paracetamol & Chlorzoxazone Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "NSAID Analgesic & Skeletal Muscle Relaxant"
      },
      {
        "id": "aero-atoz-tablets",
        "slug": "aero-atoz-tablets",
        "name": "AERO AtoZ TABLETS",
        "category": "tablets",
        "composition": "Antioxidant, Multivitamin, Multimineral and Vitamin B12 Tablets",
        "dosageForm": "Tablet",
        "strength": "Multivitamin, Multimineral, Antioxidants + Vitamin B12",
        "pack": "10 x 15 TABLETS",
        "page": 42,
        "image": "/assets/products/aero-az-tablets.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AERO AtoZ TABLETS features Antioxidant, Multivitamin, Multimineral and Vitamin B12 Tablets. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Therapeutic Micronutrient Formulation"
      }
    ],
    "count": 31
  },
  {
    "id": "capsules",
    "slug": "capsules-softgels",
    "aliases": [
      "capsules",
      "capsules-softgels"
    ],
    "title": "Capsules & Softgels",
    "shortDesc": "Hard gelatin, softgels, enteric-coated pellets & sustained-release capsules",
    "description": "Advanced encapsulation technology delivering optimal bioavailability, gastric protection, and controlled release for gastro-resistant and lipid-soluble therapies.",
    "flagshipImage": "/assets/products/aeromox-500.jpg",
    "icon": "Layers",
    "products": [
      {
        "id": "itraaero-100-capsules",
        "slug": "itraaero-100-capsules",
        "name": "ITRAAERO 100 Capsules",
        "category": "capsules",
        "composition": "Itraconazole Capsules 100 mg",
        "dosageForm": "Capsule",
        "strength": "Itraconazole 100 mg (Pellet Technology)",
        "pack": "10 x 10 Capsules",
        "page": 17,
        "image": "/assets/products/itraaero-100-capsules.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "ITRAAERO 100 Capsules features Itraconazole Capsules 100 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Triazole Antifungal"
      },
      {
        "id": "itraero-200-capsules",
        "slug": "itraero-200-capsules",
        "name": "ITRAERO 200 Capsules",
        "category": "capsules",
        "composition": "Itraconazole Capsules 200 mg",
        "dosageForm": "Capsule",
        "strength": "Itraconazole 200 mg (Pellet Technology)",
        "pack": "10 x 10 Capsules",
        "page": 17,
        "image": "/assets/products/itraero-200.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "ITRAERO 200 Capsules features Itraconazole Capsules 200 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Triazole Antifungal"
      },
      {
        "id": "omefist-20-capsules",
        "slug": "omefist-20-capsules",
        "name": "OMEFIST 20 Capsules",
        "category": "capsules",
        "composition": "Omeprazole Capsules IP 20 mg",
        "dosageForm": "Capsule",
        "strength": "Omeprazole 20 mg (Enteric-Coated Pellets)",
        "pack": "20 x 15 Capsules",
        "page": 18,
        "image": "/assets/products/omefist-20-capsules.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "OMEFIST 20 Capsules features Omeprazole Capsules IP 20 mg. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Proton Pump Inhibitor (Acid Reducer)"
      },
      {
        "id": "omefist-d-capsules",
        "slug": "omefist-d-capsules",
        "name": "OMEFIST D Capsules",
        "category": "capsules",
        "composition": "Omeprazole Domperidone Capsules IP",
        "dosageForm": "Capsule",
        "strength": "Omeprazole 20 mg + Domperidone 10 mg",
        "pack": "20 x 15 Capsules",
        "page": 18,
        "image": "/assets/products/omefist-d.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "OMEFIST D Capsules features Omeprazole Domperidone Capsules IP. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antacid & Prokinetic (GERD & Dyspepsia)"
      },
      {
        "id": "raika-dsr-capsules",
        "slug": "raika-dsr-capsules",
        "name": "RAIKA - DSR Capsules",
        "category": "capsules",
        "composition": "Pantoprazole Gastro-resistant And Domperidone Prolonged-release Capsules IP",
        "dosageForm": "Capsule",
        "strength": "Pantoprazole 40 mg + Domperidone 30 mg SR",
        "pack": "10 x 10 Capsules",
        "page": 19,
        "image": "/assets/products/raika-dsr-capsules.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "RAIKA - DSR Capsules features Pantoprazole Gastro-resistant And Domperidone Prolonged-release Capsules IP. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Sustained-Release PPI & Antiemetic"
      },
      {
        "id": "aeromox-500-capsules",
        "slug": "aeromox-500-capsules",
        "name": "AEROMOX - 500 CAPSULES",
        "category": "capsules",
        "composition": "Amoxycillin Capsules I.P.",
        "dosageForm": "Capsule",
        "strength": "Amoxycillin Trihydrate 500 mg",
        "pack": "20 x 10 CAPSULES",
        "page": 19,
        "image": "/assets/products/aeromox-500.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "AEROMOX - 500 CAPSULES features Amoxycillin Capsules I.P.. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Beta-Lactam Antibiotic"
      },
      {
        "id": "evaero-400-capsules",
        "slug": "evaero-400-capsules",
        "name": "EVAERO - 400 Capsules",
        "category": "capsules",
        "composition": "Vitamin E Softgel Capsules (Health Supplement)",
        "dosageForm": "Capsule",
        "strength": "Vitamin E (d-alpha Tocopherol) 400 mg",
        "pack": "20 x 10 Capsules",
        "page": 20,
        "image": "/assets/products/evaero-400-capsules.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "EVAERO - 400 Capsules features Vitamin E Softgel Capsules (Health Supplement). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Antioxidant & Skin / Cellular Protection"
      },
      {
        "id": "aerogut-pro-capsule",
        "slug": "aerogut-pro-capsule",
        "name": "Aerogut-Pro Capsule",
        "category": "capsules",
        "composition": "Pre and Probiotic Capsule",
        "dosageForm": "Capsule",
        "strength": "Prebiotic & Probiotic Complex (Multi-Strain 2.5 Billion CFU)",
        "pack": "1 x 10 Capsules",
        "page": 20,
        "image": "/assets/products/aerogut-pro-capsule.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerogut-Pro Capsule features Pre and Probiotic Capsule. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Gastrointestinal Microflora & Digestive Health"
      },
      {
        "id": "arshon-capsule",
        "slug": "arshon-capsule",
        "name": "Arshon Capsule",
        "category": "capsules",
        "composition": "Ayurvedic Prop. Medicine for Piles",
        "dosageForm": "Capsule",
        "strength": "Standardized Ayurvedic Herbal Hemorrhoidal Formula",
        "pack": "1 x 30 Capsules",
        "page": 21,
        "image": "/assets/products/arshon-capsule.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Arshon Capsule features Ayurvedic Prop. Medicine for Piles. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Anorectal Care & Piles Therapy"
      },
      {
        "id": "aeroflex-c-capsules",
        "slug": "aeroflex-c-capsules",
        "name": "AEROFLEX-C CAPSULES",
        "category": "capsules",
        "composition": "Rosehip Extract, Boswellia Serrata & Vitamin C Capsules",
        "dosageForm": "Capsule",
        "strength": "Rosehip Extract 250 mg + Boswellia Serrata 300 mg + Vitamin C 40 mg",
        "pack": "30 CAPSULES",
        "page": 43,
        "image": "/assets/products/aeroflex-c-capsules.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROFLEX-C CAPSULES features Rosehip Extract, Boswellia Serrata & Vitamin C Capsules. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Joint Mobility & Cartilage Support"
      }
    ],
    "count": 10
  },
  {
    "id": "syrups",
    "slug": "oral-liquids-syrups",
    "aliases": [
      "syrups",
      "oral-liquids-syrups",
      "oral-liquids"
    ],
    "title": "Oral Liquids & Syrups",
    "shortDesc": "Palatable cough syrups, digestive tonics, hepatic stimulants & multivitamin elixirs",
    "description": "High-stability oral solutions and suspensions formulated with micro-homogenized active ingredients for rapid absorption and patient compliance across all ages.",
    "flagshipImage": "/assets/products/aeroliv-syrup.jpg",
    "icon": "FlaskConical",
    "products": [
      {
        "id": "aerocof-supar-syrup-sugar-free",
        "slug": "aerocof-supar-syrup-sugar-free",
        "name": "Aerocof Supar Syrup (Sugar Free)",
        "category": "syrups",
        "composition": "Dextromethorphan Hydrobromide, Ambroxol Hydrochloride, Chlorpheniramine Maleate, Phenylephrine Hydrochloride & Menthol Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Dextromethorphan 10mg + Ambroxol 15mg + CPM 2mg + Phenylephrine 5mg + Menthol / 5ml",
        "pack": "100ML",
        "page": 16,
        "image": "/assets/products/aerocof-supar-syrup-sugar-free.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof Supar Syrup (Sugar Free) features Dextromethorphan Hydrobromide, Ambroxol Hydrochloride, Chlorpheniramine Maleate, Phenylephrine Hydrochloride & Menthol Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Sugar-Free Comprehensive Expectorant & Cough Syrup"
      },
      {
        "id": "mefnaaero-ds-suspension",
        "slug": "mefnaaero-ds-suspension",
        "name": "Mefnaaero - DS Suspension",
        "category": "syrups",
        "composition": "Mefenamic Acid & Paracetamol Suspension",
        "dosageForm": "Liquid Oral",
        "strength": "Mefenamic Acid 100 mg + Paracetamol 250 mg / 5ml",
        "pack": "60ml",
        "page": 26,
        "image": "/assets/products/mefnaaero-ds-suspension.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Mefnaaero - DS Suspension features Mefenamic Acid & Paracetamol Suspension. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Analgesic, Antipyretic & Anti-Inflammatory"
      },
      {
        "id": "ofloaero-oz-suspension",
        "slug": "ofloaero-oz-suspension",
        "name": "OFLOAERO-OZ Suspension",
        "category": "syrups",
        "composition": "Ofloxacin with Metronidazole Suspension",
        "dosageForm": "Liquid Oral",
        "strength": "Ofloxacin 50 mg + Metronidazole 100 mg / 5ml",
        "pack": "60ml",
        "page": 26,
        "image": "/assets/products/ofloaero-oz-suspension.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "OFLOAERO-OZ Suspension features Ofloxacin with Metronidazole Suspension. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Gastrointestinal Antimicrobial & Antiprotozoal"
      },
      {
        "id": "aerocof-dx-pd-suspension",
        "slug": "aerocof-dx-pd-suspension",
        "name": "Aerocof - DX PD Suspension",
        "category": "syrups",
        "composition": "Dextromethorphan Hydrobromide, Bromhexine Hydrochloride, Phenylephrine Hydrochloride & Menthol",
        "dosageForm": "Liquid Oral",
        "strength": "Dextromethorphan 5mg + Bromhexine 4mg + Phenylephrine 2.5mg + Menthol / 5ml",
        "pack": "60 ml",
        "page": 27,
        "image": "/assets/products/aerocof-dx-pd-suspension.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof - DX PD Suspension features Dextromethorphan Hydrobromide, Bromhexine Hydrochloride, Phenylephrine Hydrochloride & Menthol. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Cough & Mucolytic Suspension"
      },
      {
        "id": "aerocof-ls-junior",
        "slug": "aerocof-ls-junior",
        "name": "Aerocof - LS JUNIOR",
        "category": "syrups",
        "composition": "Levosalbutamol Sulphate, Ambroxol Hydrochloride, Guaiphenesin, Expectorant",
        "dosageForm": "Liquid Oral",
        "strength": "Levosalbutamol 0.5 mg + Ambroxol 15 mg + Guaiphenesin 50 mg / 5ml",
        "pack": "60 ml",
        "page": 27,
        "image": "/assets/products/aerocof-ls-junior.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof - LS JUNIOR features Levosalbutamol Sulphate, Ambroxol Hydrochloride, Guaiphenesin, Expectorant. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Bronchodilator & Mucokinetic Expectorant"
      },
      {
        "id": "levoflak-m-syrup",
        "slug": "levoflak-m-syrup",
        "name": "Levoflak-M Syrup",
        "category": "syrups",
        "composition": "Levocetirizine DiHCL & Montelukast Sodium Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Levocetirizine DiHCl 2.5 mg + Montelukast Sodium 4 mg / 5ml",
        "pack": "60 ml",
        "page": 28,
        "image": "/assets/products/levoflak-m-syrup.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Levoflak-M Syrup features Levocetirizine DiHCL & Montelukast Sodium Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Anti-Allergic & Asthma Prophylaxis"
      },
      {
        "id": "ibutrap-suspension",
        "slug": "ibutrap-suspension",
        "name": "IBUTRAP Suspension",
        "category": "syrups",
        "composition": "Ibuprofen & Paracetamol Suspension",
        "dosageForm": "Liquid Oral",
        "strength": "Ibuprofen 100 mg + Paracetamol 162.5 mg / 5ml",
        "pack": "60 ml",
        "page": 29,
        "image": "/assets/products/ibutrap-suspension.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "IBUTRAP Suspension features Ibuprofen & Paracetamol Suspension. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Analgesic & Antipyretic Suspension"
      },
      {
        "id": "osoaero-solution",
        "slug": "osoaero-solution",
        "name": "OSOAERO Solution",
        "category": "syrups",
        "composition": "Solution of Lactulose & Licorice",
        "dosageForm": "Liquid Oral",
        "strength": "Lactulose Solution 10 g + Licorice Extract / 15ml",
        "pack": "100 ml",
        "page": 29,
        "image": "/assets/products/osoaero-solution.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "OSOAERO Solution features Solution of Lactulose & Licorice. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Osmotic Laxative & Hepatic Support Solution"
      },
      {
        "id": "aerocof-dx-plus-cough-syrup",
        "slug": "aerocof-dx-plus-cough-syrup",
        "name": "Aerocof - DX PLUS Cough Syrup",
        "category": "syrups",
        "composition": "Guaiphenesin, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate",
        "dosageForm": "Liquid Oral",
        "strength": "Dextromethorphan 10mg + Guaiphenesin 100mg + Phenylephrine 5mg + CPM 2mg / 5ml",
        "pack": "100 ml",
        "page": 30,
        "image": "/assets/products/aerocof-dx-plus-cough-syrup.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof - DX PLUS Cough Syrup features Guaiphenesin, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Advanced Formula Expectorant & Cough Syrup"
      },
      {
        "id": "aerocof-a-syrup-expectorant",
        "slug": "aerocof-a-syrup-expectorant",
        "name": "Aerocof - A Syrup EXPECTORANT",
        "category": "syrups",
        "composition": "Ambroxol Hydrochloride, Guaiphenesin, Terbutaline Sulphate and Menthol Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Ambroxol 15mg + Guaiphenesin 50mg + Terbutaline 1.25mg + Menthol / 5ml",
        "pack": "100 ml",
        "page": 30,
        "image": "/assets/products/aerocof-a-syrup-expectorant.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof - A Syrup EXPECTORANT features Ambroxol Hydrochloride, Guaiphenesin, Terbutaline Sulphate and Menthol Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Bronchodilator & Mucolytic Expectorant Syrup"
      },
      {
        "id": "aerocof-ls-cough-syrup",
        "slug": "aerocof-ls-cough-syrup",
        "name": "Aerocof-LS Cough Syrup",
        "category": "syrups",
        "composition": "Levosalbutamol Sulphate, Ambroxol Hydrochloride, & Guaiphenesin Expectorant",
        "dosageForm": "Liquid Oral",
        "strength": "Levosalbutamol 1 mg + Ambroxol 30 mg + Guaiphenesin 50 mg / 5ml",
        "pack": "100ml",
        "page": 31,
        "image": "/assets/products/aerocof-ls-cough-syrup.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof-LS Cough Syrup features Levosalbutamol Sulphate, Ambroxol Hydrochloride, & Guaiphenesin Expectorant. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Triple-Action Mucolytic & Bronchodilator Syrup"
      },
      {
        "id": "aerocof-bd-couch-syrup-sugar-free",
        "slug": "aerocof-bd-couch-syrup-sugar-free",
        "name": "Aerocof-BD Couch Syrup SUGAR FREE",
        "category": "syrups",
        "composition": "Dextromethorphan Hydrobromide, Bromhexine Hydrochloride, Phenylephrine Hydrochloride & Menthol",
        "dosageForm": "Liquid Oral",
        "strength": "Bromhexine 4mg + Dextromethorphan 10mg + Phenylephrine 5mg + Menthol / 5ml",
        "pack": "100 ml",
        "page": 31,
        "image": "/assets/products/aerocof-bd-couch-syrup-sugar-free.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof-BD Couch Syrup SUGAR FREE features Dextromethorphan Hydrobromide, Bromhexine Hydrochloride, Phenylephrine Hydrochloride & Menthol. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Sugar-Free Mucolytic & Decongestant Syrup"
      },
      {
        "id": "aerocof-dx-dry-cough-syrup",
        "slug": "aerocof-dx-dry-cough-syrup",
        "name": "Aerocof-DX Dry Cough Syrup",
        "category": "syrups",
        "composition": "Dextromethorphan Hydrobromide, Phenylephrine hydrochloride & Chlorpheniramine Maleate",
        "dosageForm": "Liquid Oral",
        "strength": "Dextromethorphan HBr 15 mg + Phenylephrine HCl 10 mg + Chlorpheniramine Maleate 2 mg / 5ml",
        "pack": "100 ml",
        "page": 32,
        "image": "/assets/products/aerocof-dx-dry-cough-syrup.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerocof-DX Dry Cough Syrup features Dextromethorphan Hydrobromide, Phenylephrine hydrochloride & Chlorpheniramine Maleate. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Dry Cough Suppressant & Antihistaminic Syrup"
      },
      {
        "id": "aerocain-o-gel-anesthetic-antacid",
        "slug": "aerocain-o-gel-anesthetic-antacid",
        "name": "AEROCAIN-O GEL (Anesthetic Antacid)",
        "category": "syrups",
        "composition": "Oxetacaine, Dried Aluminium Hydroxide Gel, Magnesium Hydroxide, Simethicone, Deglycyrrhizinated Liquorice",
        "dosageForm": "Liquid Oral",
        "strength": "Oxetacaine 10mg + Aluminium Hydroxide 0.291g + Magnesium Hydroxide 98mg + Simethicone 25mg / 5ml",
        "pack": "170ML",
        "page": 32,
        "image": "/assets/products/aerocain-o-gel-anesthetic-antacid.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROCAIN-O GEL (Anesthetic Antacid) features Oxetacaine, Dried Aluminium Hydroxide Gel, Magnesium Hydroxide, Simethicone, Deglycyrrhizinated Liquorice. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Local Anesthetic & High-Potency Antacid Gel"
      },
      {
        "id": "aerovit-gold-syrup",
        "slug": "aerovit-gold-syrup",
        "name": "Aerovit Gold Syrup",
        "category": "syrups",
        "composition": "Multivitamin, Multimineral with Astaxanthin Syrup (Nutraceutical)",
        "dosageForm": "Liquid Oral",
        "strength": "Astaxanthin 5% + Lycopene + Multivitamins (B-Complex, A, C, E) & Minerals / 5ml",
        "pack": "200 ml",
        "page": 33,
        "image": "/assets/products/aerovit-gold-syrup.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aerovit Gold Syrup features Multivitamin, Multimineral with Astaxanthin Syrup (Nutraceutical). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Premium Antioxidant, Multivitamin & Energy Tonic"
      },
      {
        "id": "aerogro-syrup",
        "slug": "aerogro-syrup",
        "name": "AEROGRO Syrup",
        "category": "syrups",
        "composition": "Cyproheptadine Hydrochloride And Tricholine Citrate Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Cyproheptadine HCl 2 mg + Tricholine Citrate 275 mg / 5ml",
        "pack": "200 ml",
        "page": 33,
        "image": "/assets/products/aerogro-syrup.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROGRO Syrup features Cyproheptadine Hydrochloride And Tricholine Citrate Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Appetite Stimulant & Hepatic Metabolic Tonic"
      },
      {
        "id": "aeroliv-syrup",
        "slug": "aeroliv-syrup",
        "name": "Aeroliv Syrup",
        "category": "syrups",
        "composition": "Silymarine, B - Complex with Enzyme (Nutritional Food Supplement)",
        "dosageForm": "Liquid Oral",
        "strength": "Silymarin 35mg + Vitamin B-Complex with Digestive Enzymes / 5ml",
        "pack": "200 ml",
        "page": 34,
        "image": "/assets/products/aeroliv-syrup.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Aeroliv Syrup features Silymarine, B - Complex with Enzyme (Nutritional Food Supplement). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Hepato-Protective & Liver Regenerative Tonic"
      },
      {
        "id": "aerozinc-syrup",
        "slug": "aerozinc-syrup",
        "name": "Aerozinc+ Syrup",
        "category": "syrups",
        "composition": "Multivitamin & Multiminerals Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Multivitamins + Essential Trace Minerals & Zinc 10 mg / 5ml",
        "pack": "200 ml",
        "page": 34,
        "image": "/assets/products/aerozinc-syrup.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Aerozinc+ Syrup features Multivitamin & Multiminerals Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric & Adult Zinc Micronutrient Supplement"
      },
      {
        "id": "multi-vitamin-syrup-immune-booster",
        "slug": "multi-vitamin-syrup-immune-booster",
        "name": "MULTI VITAMIN Syrup (Immune Booster)",
        "category": "syrups",
        "composition": "Multivitamin, Multimineral with Lycopene, L-Lysine, Vitamin B12 & Antioxidant Syrup",
        "dosageForm": "Liquid Oral",
        "strength": "Multivitamin, Multimineral with Lycopene, L-Lysine & Vitamin B12 / 5ml",
        "pack": "200 ml",
        "page": 36,
        "image": "/assets/products/multi-vitamin-syrup-immune-booster.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "MULTI VITAMIN Syrup (Immune Booster) features Multivitamin, Multimineral with Lycopene, L-Lysine, Vitamin B12 & Antioxidant Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Comprehensive Immunity Booster & Vitality Syrup"
      },
      {
        "id": "coldaero-ds-suspension",
        "slug": "coldaero-ds-suspension",
        "name": "COLDAERO-DS Suspension",
        "category": "syrups",
        "composition": "Paracetamol, Chlorpheniramine Maleate & Phenylephrine HCL Suspension",
        "dosageForm": "Liquid Oral",
        "strength": "Paracetamol 250 mg + Phenylephrine HCl 5 mg + Chlorpheniramine Maleate 2 mg / 5ml",
        "pack": "60 ml",
        "page": 43,
        "image": "/assets/products/coldaero-ds-suspension.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "COLDAERO-DS Suspension features Paracetamol, Chlorpheniramine Maleate & Phenylephrine HCL Suspension. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Double-Strength Pediatric Cold & Antipyretic Suspension"
      }
    ],
    "count": 20
  },
  {
    "id": "dry-syrups",
    "slug": "pediatric-dry-syrups",
    "aliases": [
      "dry-syrups",
      "pediatric-dry-syrups",
      "dry-syrup"
    ],
    "title": "Pediatric Dry Syrups",
    "shortDesc": "Antibiotic & probiotic dry powder suspensions for reconstitution with purified water",
    "description": "Dry powder formulations engineered for moisture-sensitive active pharmaceutical ingredients, ensuring maximum stability prior to pediatric reconstitution.",
    "flagshipImage": "/assets/products/clavaero-cv-dry-syrup.jpg",
    "icon": "Baby",
    "products": [
      {
        "id": "clavaero-cv-dry-syrup",
        "slug": "clavaero-cv-dry-syrup",
        "name": "Clavaero-CV Dry Syrup",
        "category": "dry-syrups",
        "composition": "Amoxycillin & Potassium Clavulanate Oral Suspension I.P.",
        "dosageForm": "Dry Syrup",
        "strength": "Amoxycillin 200 mg + Potassium Clavulanate 28.5 mg / 5ml (30 ml)",
        "pack": "3.3gm / 30ml",
        "page": 25,
        "image": "/assets/products/clavaero-cv-dry-syrup.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Clavaero-CV Dry Syrup features Amoxycillin & Potassium Clavulanate Oral Suspension I.P.. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Broad-Spectrum Antibiotic Oral Suspension"
      },
      {
        "id": "clavaero-cv-dds-dry-syrup",
        "slug": "clavaero-cv-dds-dry-syrup",
        "name": "Clavaero-CV DDS Dry Syrup",
        "category": "dry-syrups",
        "composition": "Amoxycillin & Potassium Clavulanate Oral Suspension I.P. (Double Strength)",
        "dosageForm": "Dry Syrup",
        "strength": "Amoxycillin 400 mg + Potassium Clavulanate 57 mg / 5ml (Double Strength - 30 ml)",
        "pack": "6.6gm / 30ml",
        "page": 25,
        "image": "/assets/products/clavaero-cv-dds-dry-syrup.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Clavaero-CV DDS Dry Syrup features Amoxycillin & Potassium Clavulanate Oral Suspension I.P. (Double Strength). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric High-Dose Antibiotic Oral Suspension"
      },
      {
        "id": "aerofol-z-dry-syrup",
        "slug": "aerofol-z-dry-syrup",
        "name": "Aerofol - Z Dry Syrup",
        "category": "dry-syrups",
        "composition": "Lactic Acid Bacillus, Niacinamide, Folic Acid, Pyridoxine & Zinc Dry Syrup",
        "dosageForm": "Dry Syrup",
        "strength": "Lactic Acid Bacillus 60M spores + Niacinamide 15mg + Folic Acid 100mcg + Zinc 10mg / 5ml",
        "pack": "60 ml",
        "page": 28,
        "image": "/assets/products/aerofol-z.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Aerofol - Z Dry Syrup features Lactic Acid Bacillus, Niacinamide, Folic Acid, Pyridoxine & Zinc Dry Syrup. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Probiotic & Micronutrient Restoration"
      }
    ],
    "count": 3
  },
  {
    "id": "creams",
    "slug": "creams-gels-ointments",
    "aliases": [
      "creams",
      "creams-gels-ointments",
      "ointments"
    ],
    "title": "Creams, Gels & Ointments",
    "shortDesc": "Topical dermatological antifungals, antibacterial creams, healing ointments & pain gels",
    "description": "External topical preparations including medicated creams, soothing gels, and protective ointments for dermatological and muscular care.",
    "flagshipImage": "/assets/products/luliaero-cream.jpg",
    "icon": "ShieldCheck",
    "products": [
      {
        "id": "aeromax-oc-cream",
        "slug": "aeromax-oc-cream",
        "name": "AEROMAX-OC CREAM",
        "category": "creams",
        "composition": "Ofloxacin, Ornidazole, Itraconazole & Clobetasol Propionate Cream",
        "dosageForm": "Cream",
        "strength": "Ofloxacin 0.75% + Ornidazole 2% + Itraconazole 1% + Clobetasol Propionate 0.05% w/w",
        "pack": "Pack 20 X 15 gm",
        "page": 35,
        "image": "/assets/products/aeromax-oc-cream.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROMAX-OC CREAM features Ofloxacin, Ornidazole, Itraconazole & Clobetasol Propionate Cream. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Antimicrobial, Antifungal & Anti-Inflammatory Cream"
      },
      {
        "id": "aeroford-k6-cream",
        "slug": "aeroford-k6-cream",
        "name": "Aeroford-K6 Cream",
        "category": "creams",
        "composition": "Ketoconazole, Iodochlorhydroxyquinoline, Tolnaftate, Neomycin, Clobetasol Propionate & Dexpanthenol Cream",
        "dosageForm": "Cream",
        "strength": "Ketoconazole 2% + Iodochlorhydroxyquinoline 1% + Tolnaftate 1% + Neomycin 0.1% + Clobetasol 0.05% + Dexpanthenol 0.5%",
        "pack": "15 gm",
        "page": 35,
        "image": "/assets/products/aeroford-k6-cream.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aeroford-K6 Cream features Ketoconazole, Iodochlorhydroxyquinoline, Tolnaftate, Neomycin, Clobetasol Propionate & Dexpanthenol Cream. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Hexa-Action Dermatological Therapy (Anti-Fungal & Anti-Bacterial)"
      },
      {
        "id": "aerodaine-ointment",
        "slug": "aerodaine-ointment",
        "name": "AERODAINE Ointment",
        "category": "creams",
        "composition": "Povidone-Iodine Ointment USP 5% w/w",
        "dosageForm": "Ointment",
        "strength": "Povidone-Iodine USP 5% w/w",
        "pack": "15 gm",
        "page": 37,
        "image": "/assets/products/aerodaine-ointment.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AERODAINE Ointment features Povidone-Iodine Ointment USP 5% w/w. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Topical Microbicidal Antiseptic & Wound Care Ointment"
      },
      {
        "id": "clobiaero-plus-cream",
        "slug": "clobiaero-plus-cream",
        "name": "Clobiaero Plus Cream",
        "category": "creams",
        "composition": "Ciprofloxacin HCl, Metronidazole, Terbinafine HCl & Clobetasol Propionate Cream",
        "dosageForm": "Cream",
        "strength": "Ciprofloxacin HCl 0.5% + Metronidazole 1% + Terbinafine HCl 1% + Clobetasol Propionate 0.05% w/w",
        "pack": "15 gm",
        "page": 37,
        "image": "/assets/products/clobiaero-plus-cream.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Clobiaero Plus Cream features Ciprofloxacin HCl, Metronidazole, Terbinafine HCl & Clobetasol Propionate Cream. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Broad-Spectrum Antibacterial, Antiprotozoal & Antifungal Cream"
      },
      {
        "id": "rabbari-gel",
        "slug": "rabbari-gel",
        "name": "RABBARI GEL",
        "category": "creams",
        "composition": "Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate & Menthol Gel",
        "dosageForm": "Gel",
        "strength": "Diclofenac Diethylamine 1.16% + Linseed Oil 3% + Methyl Salicylate 10% + Menthol 5% w/w",
        "pack": "30 gm",
        "page": 38,
        "image": "/assets/products/rabbari-gel.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "RABBARI GEL features Diclofenac Diethylamine, Linseed Oil, Methyl Salicylate & Menthol Gel. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Topical NSAID Analgesic & Musculoskeletal Pain Reliever Gel"
      },
      {
        "id": "luliaero-cream",
        "slug": "luliaero-cream",
        "name": "Luliaero Cream",
        "category": "creams",
        "composition": "Luliconazole Cream IP 1% w/w",
        "dosageForm": "Cream",
        "strength": "Luliconazole IP 1% w/w",
        "pack": "30 gm",
        "page": 38,
        "image": "/assets/products/luliaero-cream.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Luliaero Cream features Luliconazole Cream IP 1% w/w. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "High-Efficacy Imidazole Antifungal Cream (Tinea & Dermatomycoses)"
      }
    ],
    "count": 6
  },
  {
    "id": "powders",
    "slug": "nutraceuticals-dry-powders",
    "aliases": [
      "powders",
      "nutraceuticals-dry-powders",
      "nutraceuticals"
    ],
    "title": "Nutraceuticals & Dry Powders",
    "shortDesc": "WHO-standard ORS, energy boosters, medical dusting powders & nutritional protein supplements",
    "description": "Nutritional powders, protein supplements, and oral rehydration salts formulated to support daily wellness and dietary balance.",
    "flagshipImage": "/assets/products/aerovita-z.jpg",
    "icon": "Sparkles",
    "products": [
      {
        "id": "electroaero-oral-rehydration-salts-21-8-g",
        "slug": "electroaero-oral-rehydration-salts-21-8-g",
        "name": "ELECTROAERO Oral Rehydration Salts 21.8 g",
        "category": "powders",
        "composition": "Oral Rehydration Salts 21.8 g (W.H.O. Recommended Formula)",
        "dosageForm": "Powder",
        "strength": "Sodium Chloride 2.6g + Potassium Chloride 1.5g + Sodium Citrate 2.9g + Dextrose 13.5g (Total 21.8g Sachet)",
        "pack": "30 PCS",
        "page": 9,
        "image": "/assets/products/electroaero-oral.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "ELECTROAERO Oral Rehydration Salts 21.8 g features Oral Rehydration Salts 21.8 g (W.H.O. Recommended Formula). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "WHO Recommended Low-Osmolarity Oral Electrolyte Replacement"
      },
      {
        "id": "clotriaero-dusting-powder",
        "slug": "clotriaero-dusting-powder",
        "name": "CLOTRIAERO Dusting Powder",
        "category": "powders",
        "composition": "Clotrimazole Dusting Powder",
        "dosageForm": "Powder",
        "strength": "Clotrimazole IP 1% w/w Dusting Powder Base",
        "pack": "100 g",
        "page": 21,
        "image": "/assets/products/clotriaero-dusting-powder.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "CLOTRIAERO Dusting Powder features Clotrimazole Dusting Powder. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Topical Antifungal & Anti-Pruritic Absorbent Powder"
      },
      {
        "id": "aero-protein-powder-vanilla-flavour",
        "slug": "aero-protein-powder-vanilla-flavour",
        "name": "Aero-PROTEIN Powder (Vanilla Flavour)",
        "category": "powders",
        "composition": "Complete Balanced Nutrition Protein Powder",
        "dosageForm": "Powder",
        "strength": "Whey Protein Concentrate + DHA + Bovine Colostrum + 28 Vitamins & Minerals (Vanilla)",
        "pack": "200 g",
        "page": 22,
        "image": "/assets/products/aero-protein-powder-vanilla-flavour.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aero-PROTEIN Powder (Vanilla Flavour) features Complete Balanced Nutrition Protein Powder. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Balanced Nutritional High-Protein Powder Drink"
      },
      {
        "id": "aero-protein-plus-dha-chocolate-flavour",
        "slug": "aero-protein-plus-dha-chocolate-flavour",
        "name": "Aero Protein Plus DHA (Chocolate Flavour)",
        "category": "powders",
        "composition": "Protein Powder with Whey, Omega & DHA",
        "dosageForm": "Powder",
        "strength": "Whey Protein Fortified with DHA, Omega-3 Fatty Acids & Micronutrients (Chocolate)",
        "pack": "200 g",
        "page": 22,
        "image": "/assets/products/aero-protein-plus-dha-chocolate-flavour.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aero Protein Plus DHA (Chocolate Flavour) features Protein Powder with Whey, Omega & DHA. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Cognitive & Muscle Nourishing Protein Supplement"
      },
      {
        "id": "aeropro-mom-powder",
        "slug": "aeropro-mom-powder",
        "name": "Aeropro Mom Powder",
        "category": "powders",
        "composition": "Maternal Nutritional Powder Fortified with Protein & Micronutrients",
        "dosageForm": "Powder",
        "strength": "Protein Supplement Fortified with Iron, Folic Acid, Calcium, DHA & Multivitamins",
        "pack": "200 g",
        "page": 23,
        "image": "/assets/products/aeropro-mom-powder.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Aeropro Mom Powder features Maternal Nutritional Powder Fortified with Protein & Micronutrients. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Specialized Maternal, Prenatal & Lactation Nutritional Supplement"
      },
      {
        "id": "aerovit-kids-powder",
        "slug": "aerovit-kids-powder",
        "name": "AEROVIT KIDS Powder",
        "category": "powders",
        "composition": "Nutritional Support for Healthy Growing Kids",
        "dosageForm": "Powder",
        "strength": "Essential Amino Acids, Protein, Brain DHA, Calcium & Multivitamins",
        "pack": "200 g",
        "page": 23,
        "image": "/assets/products/aerovit-kids-powder.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "AEROVIT KIDS Powder features Nutritional Support for Healthy Growing Kids. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Pediatric Physical Growth & Cognitive Development Nutrition"
      },
      {
        "id": "aerovita-z-instant-energy-drink-booster",
        "slug": "aerovita-z-instant-energy-drink-booster",
        "name": "Aerovita-Z Instant Energy Drink Booster",
        "category": "powders",
        "composition": "Dextrose with Vitamin C & Mineral Powder",
        "dosageForm": "Powder",
        "strength": "Dextrose Monohydrate, Sucrose, Zinc Sulphate 32.5mg & Ascorbic Acid (Vitamin C) 50mg",
        "pack": "105 gm / 200 g",
        "page": 24,
        "image": "/assets/products/aerovita-z.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Aerovita-Z Instant Energy Drink Booster features Dextrose with Vitamin C & Mineral Powder. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Instant Rehydration & Cellular Energy Drink Booster"
      },
      {
        "id": "aerovit-ors-powder",
        "slug": "aerovit-ors-powder",
        "name": "AEROVIT ORS Powder",
        "category": "powders",
        "composition": "Dextrose with Vitamin C, Zinc & Electrolyte Powder",
        "dosageForm": "Powder",
        "strength": "Dextrose, Sodium Chloride, Potassium Chloride, Sodium Citrate with Zinc & Vitamin C",
        "pack": "10 x 35 gm / 200 g",
        "page": 24,
        "image": "/assets/products/aerovit-ors-powder.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "AEROVIT ORS Powder features Dextrose with Vitamin C, Zinc & Electrolyte Powder. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Instant Electrolyte Hydration & Fatigue Relief Powder"
      }
    ],
    "count": 8
  },
  {
    "id": "drops",
    "slug": "ophthalmic-ear-drops",
    "aliases": [
      "drops",
      "ophthalmic-ear-drops",
      "eye-drops",
      "ear-drops",
      "ophthalmic"
    ],
    "title": "Eye Drops & Ear Drops",
    "shortDesc": "Sterile ophthalmic solutions & therapeutic ear drops in aseptically sealed dropper vials",
    "description": "Aseptically prepared sterile drops with balanced physiological pH and isotonicity for ophthalmic and otic administration.",
    "flagshipImage": "/assets/products/moxi-aero-d-eye-drops.jpg",
    "icon": "Eye",
    "products": [
      {
        "id": "moxi-aero-d-eye-drops",
        "slug": "moxi-aero-d-eye-drops",
        "name": "Moxi Aero-D Eye Drops",
        "category": "drops",
        "composition": "Moxifloxacin & Dexamethasone Eye Drops",
        "dosageForm": "Ophthalmic Drop",
        "strength": "Moxifloxacin HCl 0.5% w/v + Dexamethasone Sodium Phosphate 0.1% w/v",
        "pack": "5ml",
        "page": 40,
        "image": "/assets/products/moxi-aero-d-eye-drops.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Moxi Aero-D Eye Drops features Moxifloxacin & Dexamethasone Eye Drops. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Ophthalmic Fluoroquinolone Antimicrobial & Anti-Inflammatory Solution"
      },
      {
        "id": "cefi-aero-d-eye-ear-drops",
        "slug": "cefi-aero-d-eye-ear-drops",
        "name": "Cefi Aero D Eye & Ear Drops",
        "category": "drops",
        "composition": "Ciprofloxacin & Dexamethasone Eye/Ear Drops",
        "dosageForm": "Ophthalmic Drop",
        "strength": "Ciprofloxacin HCl 0.3% w/v + Dexamethasone Sodium Phosphate 0.1% w/v",
        "pack": "10 ml",
        "page": 40,
        "image": "/assets/products/cefi-aero-d-eye-ear-drops.jpg",
        "imagePending": true,
        "isFlagship": false,
        "description": "Cefi Aero D Eye & Ear Drops features Ciprofloxacin & Dexamethasone Eye/Ear Drops. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Ophthalmic & Otic Broad-Spectrum Antibiotic / Steroid Suspension"
      }
    ],
    "count": 2
  },
  {
    "id": "bandages",
    "slug": "bandages-medical-supplies",
    "aliases": [
      "bandages",
      "bandages-medical-supplies",
      "medical-supplies",
      "bandage"
    ],
    "title": "Bandages & Medical Supplies",
    "shortDesc": "Hospital-grade compression bandages, orthopedic wraps & surgical medical supplies",
    "description": "Orthopedic support and compression bandages manufactured to B.P.C. standards with non-fraying fast edges.",
    "flagshipImage": "/assets/products/cotton-crepe-bandage-with-fast-edges.jpg",
    "icon": "ShieldCheck",
    "products": [
      {
        "id": "cotton-crepe-bandage-with-fast-edges",
        "slug": "cotton-crepe-bandage-with-fast-edges",
        "name": "Cotton Crepe Bandage (With Fast Edges)",
        "category": "bandages",
        "composition": "Cotton Crepe Bandage B.P.C. Flesh Coloured Elastic",
        "dosageForm": "Medical Supply",
        "strength": "100% Pure Woven Cotton with Non-Fraying Fast Edges (B.P.C. Standard - 4 Metre)",
        "pack": "Length 4 Mtr.",
        "page": 36,
        "image": "/assets/products/cotton-crepe-bandage-with-fast-edges.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Cotton Crepe Bandage (With Fast Edges) features Cotton Crepe Bandage B.P.C. Flesh Coloured Elastic. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Orthopedic Support & Compression Bandage"
      }
    ],
    "count": 1
  },
  {
    "id": "derma-care",
    "slug": "derma-personal-care",
    "aliases": [
      "derma-care",
      "derma-personal-care",
      "personal-care",
      "derma",
      "soaps",
      "face-wash"
    ],
    "title": "Derma, Personal Care & Specialized Healthcare",
    "shortDesc": "Dermatological face washes, medicated antifungal soaps & classical ayurvedic hair oils",
    "description": "Targeted dermatological formulations including therapeutic exfoliating face washes, antifungal cleansing soaps, and Ayurvedic scalp therapies.",
    "flagshipImage": "/assets/products/aerosilix-face-wash.jpg",
    "icon": "Sparkles",
    "products": [
      {
        "id": "aerosilix-face-wash",
        "slug": "aerosilix-face-wash",
        "name": "Aerosilix Face Wash",
        "category": "derma-care",
        "composition": "Glycolic Acid, Salicylic Acid & Vitamin E Acetate Gel",
        "dosageForm": "Face Wash",
        "strength": "Glycolic Acid 1% + Salicylic Acid 2% + Vitamin E Acetate Gentle Gel Base",
        "pack": "75gm",
        "page": 16,
        "image": "/assets/products/aerosilix-face-wash.jpg",
        "imagePending": false,
        "isFlagship": true,
        "description": "Aerosilix Face Wash features Glycolic Acid, Salicylic Acid & Vitamin E Acetate Gel. Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Dermatological Exfoliating, Anti-Acne & Deep Cleansing Face Wash"
      },
      {
        "id": "kesh-aero-ayurvedic-oil",
        "slug": "kesh-aero-ayurvedic-oil",
        "name": "Kesh Aero Ayurvedic Oil",
        "category": "derma-care",
        "composition": "Ayurvedic Hair Oil (100% Natural Product)",
        "dosageForm": "Herbal Oil",
        "strength": "Bhringraj, Amla, Brahmi, Neem, Sesame Oil & Classical Ayurvedic Herb Extracts",
        "pack": "100 ml",
        "page": 39,
        "image": "/assets/products/kesh-aero-ayurvedic-oil.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "Kesh Aero Ayurvedic Oil features Ayurvedic Hair Oil (100% Natural Product). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "100% Natural Ayurvedic Anti-Hairfall & Scalp Nourishment Therapy"
      },
      {
        "id": "ketaero-soap",
        "slug": "ketaero-soap",
        "name": "KETAERO Soap",
        "category": "derma-care",
        "composition": "Ketoconazole 2% w/w Soap (Anti-Fungal Medicated Soap)",
        "dosageForm": "Medicated Soap",
        "strength": "Ketoconazole 2% w/w in Grade 1 Moisturizing Soap Base",
        "pack": "75 gm",
        "page": 39,
        "image": "/assets/products/ketaero-soap.jpg",
        "imagePending": false,
        "isFlagship": false,
        "description": "KETAERO Soap features Ketoconazole 2% w/w Soap (Anti-Fungal Medicated Soap). Available in standard commercial packaging as listed in the official catalog.",
        "therapeuticCategory": "Medicated Antifungal & Anti-Dandruff Body Cleansing Soap"
      }
    ],
    "count": 3
  }
];

/**
 * Single Source of Truth for all 84 formulations derived dynamically from CATEGORIES.
 * Guarantees 1:1 image and data synchronicity across all pages, search, and routes.
 */
export const ALL_PRODUCTS = CATEGORIES.flatMap(category =>
  category.products.map(product => ({
    ...product,
    categorySlug: category.slug,
    categoryTitle: category.title
  }))
);

/**
 * Returns all formulation categories with dynamic product counts
 */
export function getAllCategories() {
  return CATEGORIES;
}

/**
 * Finds a category by its slug or alias (e.g. 'tablets-capsules' or 'tablets')
 */
export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return CATEGORIES.find(
    cat => cat.slug === cleanSlug || cat.id === cleanSlug || (cat.aliases && cat.aliases.includes(cleanSlug))
  ) || null;
}

/**
 * Returns all products belonging to a given category slug/id
 */
export function getProductsByCategory(categorySlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return ALL_PRODUCTS.filter(p => p.category === category.id);
}

/**
 * Finds a specific product by its slug (with resilient fuzzy/prefix fallback)
 */
export function getProductBySlug(categorySlug, productSlug) {
  if (!productSlug) return null;
  const cleanProdSlug = productSlug.toLowerCase().trim();

  // 1. Exact match on slug or id
  let found = ALL_PRODUCTS.find(p => p.slug === cleanProdSlug || p.id === cleanProdSlug);
  if (found) return found;

  // 2. Starts with / prefix match
  found = ALL_PRODUCTS.find(p => p.slug.startsWith(cleanProdSlug) || cleanProdSlug.startsWith(p.slug));
  if (found) return found;

  // 3. Substring containment
  found = ALL_PRODUCTS.find(p => p.slug.includes(cleanProdSlug) || cleanProdSlug.includes(p.slug));
  if (found) return found;

  // 4. Normalized alphanumeric match (ignoring dashes and symbols)
  const alphaClean = cleanProdSlug.replace(/[^a-z0-9]/g, '');
  if (alphaClean.length >= 4) {
    found = ALL_PRODUCTS.find(p => {
      const pAlpha = p.slug.replace(/[^a-z0-9]/g, '');
      return pAlpha.includes(alphaClean) || alphaClean.includes(pAlpha);
    });
  }

  return found || null;
}

/**
 * Returns related products from the same category (excluding current product)
 */
export function getRelatedProducts(categorySlug, currentProductSlug, limit = 4) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  const prods = ALL_PRODUCTS.filter(
    p => p.category === category.id && p.slug !== currentProductSlug
  );
  return prods.slice(0, limit);
}

/**
 * Searches across all 84 verified products by name, composition, pack or dosage form
 */
export function searchProducts(query, categorySlug = null) {
  if (!query && !categorySlug) return ALL_PRODUCTS;

  let pool = ALL_PRODUCTS;
  if (categorySlug && categorySlug !== 'all') {
    const category = getCategoryBySlug(categorySlug);
    if (category) {
      pool = pool.filter(p => p.category === category.id);
    }
  }

  if (!query) return pool;

  const q = query.toLowerCase().trim();
  return pool.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.composition.toLowerCase().includes(q) ||
    p.pack.toLowerCase().includes(q) ||
    p.dosageForm.toLowerCase().includes(q) ||
    String(p.page).includes(q)
  );
}
