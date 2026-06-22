const rawProjectsData = [
  {
    id: 19,
    year: '2024–2026',
    image: '/image19.jpeg',
    title: {
      en: 'Multi-Storey Car Park Renovation – Wetzlar',
      sr: 'Renoviranje višeetažne garaže – Veclar',
      de: 'Sanierung Parkhaus – Wetzlar'
    },
    location: {
      en: 'Wetzlar, Germany',
      sr: 'Veclar, Nemačka',
      de: 'Wetzlar, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 20,
    year: '2024–2026',
    image: '/image20.jpeg',
    title: {
      en: 'Schloss Altenstein Castle – Interior Fit-out',
      sr: 'Dvorac Altenštajn – Unutrašnje uređenje',
      de: 'Schloss Altenstein – Innenausbau'
    },
    location: {
      en: 'Bad Liebenstein, Germany',
      sr: 'Bad Libenštajn, Nemačka',
      de: 'Bad Liebenstein, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 21,
    year: '2024–2026',
    image: '/image21.jpeg',
    title: {
      en: 'Airport Terminal Building – Braunschweig-Wolfsburg',
      sr: 'Zgrada aerodromskog terminala – Braunšvajg-Volfsburg',
      de: 'Flughafenterminal – Braunschweig-Wolfsburg'
    },
    location: {
      en: 'Braunschweig, Germany',
      sr: 'Braunšvajg, Nemačka',
      de: 'Braunschweig, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 24,
    year: '2024–2026',
    image: '/image24.jpeg',
    title: {
      en: 'Sugar Storage Silo, Lage',
      sr: 'Silos za skladištenje šećera, Lage',
      de: 'Zuckersilo, Lage'
    },
    location: {
      en: 'Lage, Germany',
      sr: 'Lage, Nemačka',
      de: 'Lage, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 25,
    year: '2024–2026',
    image: '/image25.jpeg',
    title: {
      en: 'Louis Scheuch GmbH, Kassel',
      sr: 'Louis Scheuch GmbH, Kasel',
      de: 'Louis Scheuch GmbH, Kassel'
    },
    location: {
      en: 'Kassel, Germany',
      sr: 'Kasel, Nemačka',
      de: 'Kassel, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 26,
    year: '2024–2026',
    image: '/image26.jpeg',
    title: {
      en: 'JLU Veterinary Clinic, Gießen',
      sr: 'JLU Veterinarska klinika, Gisen',
      de: 'JLU Tierklinik, Gießen'
    },
    location: {
      en: 'Gießen, Germany',
      sr: 'Gisen, Nemačka',
      de: 'Gießen, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 27,
    year: '2024–2026',
    image: '/image27.jpeg',
    title: {
      en: 'Gotisches Haus Museum, Bad Homburg',
      sr: 'Muzej Gotisches Haus, Bad Homburg',
      de: 'Museum Gotisches Haus, Bad Homburg'
    },
    location: {
      en: 'Bad Homburg, Germany',
      sr: 'Bad Homburg, Nemačka',
      de: 'Bad Homburg, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 28,
    year: '2024–2026',
    image: '/image28.jpeg',
    title: {
      en: 'Office and Administrative Building, Hofgeismar',
      sr: 'Poslovna i administrativna zgrada, Hofgajsmar',
      de: 'Büro- und Verwaltungsgebäude, Hofgeismar'
    },
    location: {
      en: 'Hofgeismar, Germany',
      sr: 'Hofgajsmar, Nemačka',
      de: 'Hofgeismar, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 29,
    year: '2024–2026',
    image: '/image29.jpeg',
    title: {
      en: 'Höchster Tennis and Hockey Club, Frankfurt',
      sr: 'Teniski i hokejaški klub Höchster, Frankfurt',
      de: 'Höchster Tennis- und Hockey-Club, Frankfurt'
    },
    location: {
      en: 'Frankfurt am Main, Germany',
      sr: 'Frankfurt na Majni, Nemačka',
      de: 'Frankfurt am Main, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 30,
    year: '2024–2026',
    image: '/image30.jpeg',
    title: {
      en: 'Social Welfare Center, Homberg-Efze',
      sr: 'Centar za socijalni rad, Homberg-Efca',
      de: 'Sozialzentrum, Homberg (Efze)'
    },
    location: {
      en: 'Homberg (Efze), Germany',
      sr: 'Homberg (Efca), Nemačka',
      de: 'Homberg (Efze), Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 31,
    year: '2024–2026',
    image: '/image31.jpeg',
    title: {
      en: 'Murhard Library, Kassel',
      sr: 'Biblioteka Murhard, Kasel',
      de: 'Murhardsche Bibliothek, Kassel'
    },
    location: {
      en: 'Kassel, Germany',
      sr: 'Kasel, Nemačka',
      de: 'Kassel, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 32,
    year: '2024–2026',
    image: '/image32.jpeg',
    title: {
      en: 'Kassel Education Center – Canteen Modernization',
      sr: 'Obrazovni centar Kasel – Modernizacija kantine',
      de: 'Bildungszentrum Kassel – Modernisierung der Kantine'
    },
    location: {
      en: 'Kassel, Germany',
      sr: 'Kasel, Nemačka',
      de: 'Kassel, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 33,
    year: '2024–2026',
    image: '/image33.jpeg',
    title: {
      en: 'Comprehensive School, Melsungen',
      sr: 'Sveobuhvatna škola, Melzungen',
      de: 'Gesamtschule, Melsungen'
    },
    location: {
      en: 'Melsungen, Germany',
      sr: 'Melzungen, Nemačka',
      de: 'Melsungen, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 34,
    year: '2025',
    image: '/image34.jpeg',
    title: {
      en: 'Self-Service Royal Car Wash, Vrsac',
      sr: 'Samouslužna autoperionica Royal, Vršac',
      de: 'SB-Waschanlage Royal, Vršac'
    },
    location: {
      en: 'Guduricki put BB, Vrsac, Serbia',
      sr: 'Gudurički put BB, Vršac, Srbija',
      de: 'Guduricki put BB, Vršac, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical power installations of a self-service car wash, including power supply links for specialized washing equipment, cable routing layouts, and main distribution boards.',
      sr: 'Izvođački projekat elektroenergetskih instalacija samouslužne autoperionice, uključujući napajanje specijalizovane opreme za pranje, trase kablova i glavne razvodne ormane.',
      de: 'Ausführungsplanung der Starkstromanlagen für eine SB-Waschanlage, einschließlich Stromversorgung für spezielle Waschanlagen, Kabeltrassenplanung und Hauptverteilungen.'
    }
  },
  {
    id: 35,
    year: '2025',
    image: '/image35.jpeg',
    title: {
      en: 'Tip-Top Car Wash, Plandiste',
      sr: 'Autoperionica Tip-Top, Plandište',
      de: 'Waschanlage Tip-Top, Plandište'
    },
    location: {
      en: 'Plandiste, Serbia',
      sr: 'Plandište, Srbija',
      de: 'Plandište, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical power installations of a self-service car wash, including power supply links for specialized washing equipment, cable routing layouts, and main distribution boards.',
      sr: 'Izvođački projekat elektroenergetskih instalacija samouslužne autoperionice, uključujući napajanje specijalizovane opreme za pranje, trase kablova i glavne razvodne ormane.',
      de: 'Ausführungsplanung der Starkstromanlagen für eine SB-Waschanlage, einschließlich Stromversorgung für spezielle Waschanlagen, Kabeltrassenplanung und Hauptverteilungen.'
    }
  },
  {
    id: 37,
    year: '2025',
    image: '/image37.jpeg',
    title: {
      en: 'Residential and Commercial Building in Pancevo',
      sr: 'Stambeno-poslovni objekat u Pančevu',
      de: 'Wohn- und Geschäftshaus in Pančevo'
    },
    location: {
      en: 'Oslobođenja Street, Pancevo, Serbia',
      sr: 'Ulica Oslobođenja, Pančevo, Srbija',
      de: 'Oslobođenja Straße, Pančevo, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical building services of a multi-family residential and commercial complex (B+G+4+Attic), including internal low-voltage power distribution, main switchboards and residential metering cabinets, structured cabling, intercom systems, and fully coordinated indoor and outdoor functional lighting.',
      sr: 'Izvođački projekat elektroinstalacija za višeporodični stambeno-poslovni kompleks (Po+Pr+4+Pk), uključujući unutrašnji razvod niskog napona, glavne i merne razvodne ormane, strukturno kabliranje, interfonske sisteme i potpuno koordinisano unutrašnje i spoljašnje funkcionalno osvetljenje.',
      de: 'Ausführungsplanung der elektrotechnischen Gebäudeausrüstung für einen Wohn- und Geschäftskomplex (UG+EG+4+DG), einschließlich interner Niederspannungsverteilung, Haupt- und Zählerschränken, strukturierter Verkabelung, Sprechanlagen sowie vollständig koordinierter Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 39,
    year: '2025',
    image: '/image39.jpeg',
    title: {
      en: 'Stela Car Wash, Kovacica',
      sr: 'Autoperionica Stela, Kovačica',
      de: 'Waschanlage Stela, Kovačica'
    },
    location: {
      en: 'Kovacica, Serbia',
      sr: 'Kovačica, Srbija',
      de: 'Kovačica, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical power installations of a self-service car wash, including power supply links for specialized washing equipment, cable routing layouts, and main distribution boards.',
      sr: 'Izvođački projekat elektroenergetskih instalacija samouslužne autoperionice, uključujući napajanje specijalizovane opreme za pranje, trase kablova i glavne razvodne ormane.',
      de: 'Ausführungsplanung der Starkstromanlagen für eine SB-Waschanlage, einschließlich Stromversorgung für spezielle Waschanlagen, Kabeltrassenplanung und Hauptverteilungen.'
    }
  },
  {
    id: 40,
    year: '2025',
    image: '/image40.jpeg',
    title: {
      en: 'Kovac Residence, Zrenjanin',
      sr: 'Rezidencija Kovač, Zrenjanin',
      de: 'Residenz Kovač, Zrenjanin'
    },
    location: {
      en: 'Zrenjanin, Serbia',
      sr: 'Zrenjanin, Srbija',
      de: 'Zrenjanin, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical engineering and building services of a modern villa-style accommodation and hospitality facility, including main and sub-distribution boards, functional indoor architectural lighting, premium outdoor and landscape illumination, as well as integrated extra-low voltage (ELV) networks for guest Wi-Fi and access control.',
      sr: 'Izvođački projekat elektroinstalacija za moderan ugostiteljski objekat u stilu vile, uključujući glavne i sporedne razvodne ormane, funkcionalno unutrašnje arhitektonsko osvetljenje, premium spoljašnje i pejzažno osvetljenje, kao i integrisane mreže slabe struje za Wi-Fi i kontrolu pristupa.',
      de: 'Ausführungsplanung der Elektrotechnik für eine moderne Beherbergungs- und Gastronomieeinrichtung im Villenstil, einschließlich Haupt- und Unterverteilungen, funktionaler Architektur-Innenbeleuchtung, hochwertiger Außen- und Landschaftsbeleuchtung sowie integrierter Schwachstromnetze für Gäste-WLAN und Zutrittskontrolle.'
    }
  },
  {
    id: 1,
    year: '2024-2025',
    image: '/image1.jpeg',
    title: {
      en: 'Kinderkrippe Josef-Wirth-Weg (Nursery School)',
      sr: 'Dečiji vrtić Josef-Wirth-Weg',
      de: 'Kinderkrippe Josef-Wirth-Weg'
    },
    location: {
      en: 'Munich, Germany',
      sr: 'Minhen, Nemačka',
      de: 'München, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 13,
    year: '2024–2025',
    image: '/image13.jpeg',
    title: {
      en: 'Putzerei 4 & Kernmacherei 19 Shop Expansions',
      sr: 'Proširenje pogona Putzerei 4 i Kernmacherei 19',
      de: 'Werkserweiterung Putzerei 4 & Kernmacherei 19'
    },
    location: {
      en: 'Stadtallendorf, Germany',
      sr: 'Štatendorf, Nemačka',
      de: 'Stadtallendorf, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 14,
    year: '2024–2025',
    image: '/image14.jpeg',
    title: {
      en: 'Production Facility Expansion (Phase 1) – SÄLZER GmbH',
      sr: 'Proširenje proizvodnog pogona (Faza 1) – SÄLZER GmbH',
      de: 'Erweiterung der Produktionsstätte (Phase 1) – SÄLZER GmbH'
    },
    location: {
      en: 'Marburg, Germany',
      sr: 'Marburg, Nemačka',
      de: 'Marburg, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 15,
    year: '2024–2025',
    image: '/image15.jpeg',
    title: {
      en: 'Bergzeit Otterfing Commercial Facility',
      sr: 'Komercijalni objekat Bergzeit Oterfing',
      de: 'Gewerbeobjekt Bergzeit Otterfing'
    },
    location: {
      en: 'Otterfing, Germany',
      sr: 'Oterfing, Nemačka',
      de: 'Otterfing, Deutschland'
    },
    tasks: {
      en: 'Execution design (LP5), as well as workshop drawing design, revision, and technical documentation for electrical installations (LP8 phase).',
      sr: 'Izvođački projekat (LP5), kao i izrada radioničkih crteža, revizija i tehnička dokumentacija izvedenog stanja elektroinstalacija (faza LP8).',
      de: 'Ausführungsplanung (LPH 5) sowie Erstellung von Werkstatt- und Montageplanung, Revision und Bestandsdokumentation für Elektroinstallationen (LPH 8).'
    }
  },
  {
    id: 18,
    year: '2024–2025',
    image: '/image18.jpeg',
    title: {
      en: 'Singbergschule Wölfersheim School Complex',
      sr: 'Školski kompleks Singbergschule Velfershajm',
      de: 'Schulkomplex Singbergschule Wölfersheim'
    },
    location: {
      en: 'Wölfersheim, Germany',
      sr: 'Velfershajm, Nemačka',
      de: 'Wölfersheim, Deutschland'
    },
    tasks: {
      en: 'Conceptual design (LP3) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni projekat (LP3) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfsplanung (LPH 3) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 22,
    year: '2024–2025',
    image: '/image22.jpeg',
    title: {
      en: 'Osthessen Police Headquarters',
      sr: 'Sedište policije Istočni Hesen',
      de: 'Polizeipräsidium Osthessen'
    },
    location: {
      en: 'Fulda, Germany',
      sr: 'Fulda, Nemačka',
      de: 'Fulda, Deutschland'
    },
    tasks: {
      en: 'Low voltage systems design, focusing on closed-circuit television (CCTV) and security network integration.',
      sr: 'Projektovanje sistema slabe struje, sa fokusom na sistem video nadzora (CCTV) i integraciju sigurnosne mreže.',
      de: 'Planung von Schwachstromanlagen mit Schwerpunkt auf Videoüberwachung (CCTV) und Integration von Sicherheitsnetzwerken.'
    }
  },
  {
    id: 3,
    year: '2023–2025',
    image: '/image3.jpeg',
    title: {
      en: 'Haus für Kinder Unnützstraße Daycare Center',
      sr: 'Dečiji vrtić Haus für Kinder Unnützstraße',
      de: 'Haus für Kinder Unnützstraße'
    },
    location: {
      en: 'Munich, Germany',
      sr: 'Minhen, Nemačka',
      de: 'München, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, indoor and outdoor lighting, including solar panel (PV) system calculations and design.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, unutrašnjeg i spoljašnjeg osvetljenja, uključujući proračun i projektovanje solarnih (FN) sistema.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen, Innen- und Außenbeleuchtung, einschließlich Berechnung und Planung von Photovoltaik (PV)-Anlagen.'
    }
  },
  {
    id: 6,
    year: '2023–2025',
    image: '/image6.jpeg',
    title: {
      en: 'Staatspark Hanau-Wilhelmsbad Historic Park',
      sr: 'Istorijski park Staatspark Hanau-Wilhelmsbad',
      de: 'Staatspark Hanau-Wilhelmsbad'
    },
    location: {
      en: 'Hanau, Germany',
      sr: 'Hanau, Nemačka',
      de: 'Hanau, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 8,
    year: '2023–2025',
    image: '/image8.jpeg',
    title: {
      en: 'Radko-Stöckl-Schule Vocational School',
      sr: 'Stručna škola Radko-Stöckl-Schule',
      de: 'Berufsschule Radko-Stöckl-Schule'
    },
    location: {
      en: 'Melsungen, Germany',
      sr: 'Melzungen, Nemačka',
      de: 'Melsungen, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 10,
    year: '2023–2025',
    image: '/image10.jpeg',
    title: {
      en: 'DHL Köngen Multi-Storey Car Park',
      sr: 'DHL Kengen višeetažna garaža',
      de: 'DHL Parkhaus Köngen'
    },
    location: {
      en: 'Köngen, Germany',
      sr: 'Kengen, Nemačka',
      de: 'Köngen, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 11,
    year: '2023–2025',
    image: '/image11.jpeg',
    title: {
      en: 'Deutsche Oper Berlin (DOB) Opera House',
      sr: 'Zgrada opere Deutsche Oper Berlin (DOB)',
      de: 'Deutsche Oper Berlin (DOB)'
    },
    location: {
      en: 'Berlin, Germany',
      sr: 'Berlin, Nemačka',
      de: 'Berlin, Deutschland'
    },
    tasks: {
      en: 'Execution design (LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Izvođački projekat (LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Ausführungsplanung (LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 12,
    year: '2023–2025',
    image: '/image12.jpeg',
    title: {
      en: 'Gerhart-Hauptmann-Schule School',
      sr: 'Škola Gerhart-Hauptmann-Schule',
      de: 'Gerhart-Hauptmann-Schule'
    },
    location: {
      en: 'Germany',
      sr: 'Nemačka',
      de: 'Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 16,
    year: '2023–2025',
    image: '/image16.jpeg',
    title: {
      en: 'IGS Lindenfeld Integrated Comprehensive School',
      sr: 'Integrisana škola IGS Lindenfeld',
      de: 'Integrierte Gesamtschule IGS Lindenfeld'
    },
    location: {
      en: 'Offenbach am Main, Germany',
      sr: 'Ofenbah na Majni, Nemačka',
      de: 'Offenbach am Main, Deutschland'
    },
    tasks: {
      en: 'Execution design (LP5) of high and low voltage installations, including detailed lighting calculations.',
      sr: 'Izvođački projekat (LP5) instalacija jake i slabe struje, uključujući detaljne proračune osvetljenja.',
      de: 'Ausführungsplanung (LPH 5) von Stark- und Schwachstromanlagen, einschließlich detaillierter Beleuchtungsberechnungen.'
    }
  },
  {
    id: 23,
    year: '2023–2025',
    image: '/image23.jpeg',
    title: {
      en: 'SMA Solar Technology – Fuldabrück',
      sr: 'SMA Solar Technology – Fuldabrik',
      de: 'SMA Solar Technology – Fuldabrück'
    },
    location: {
      en: 'Fuldabrück, Germany',
      sr: 'Fuldabrik, Nemačka',
      de: 'Fuldabrück, Deutschland'
    },
    tasks: {
      en: 'Design of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Projektovanje instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Planung von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 2,
    year: '2024',
    image: '/image2.jpeg',
    title: {
      en: 'Benedictus Krankenhaus Tutzing (Hospital)',
      sr: 'Bolnica Benedictus Krankenhaus Tucing',
      de: 'Benedictus Krankenhaus Tutzing'
    },
    location: {
      en: 'Tutzing (Munich region), Germany',
      sr: 'Tucing (okolina Minhena), Nemačka',
      de: 'Tutzing (Region München), Deutschland'
    },
    tasks: {
      en: 'Lightning protection system design (Blitzschutzplanung) for critical hospital infrastructure and facilities.',
      sr: 'Projektovanje sistema gromobranske zaštite za kritičnu bolničku infrastrukturu i objekte.',
      de: 'Blitzschutzplanung für kritische Krankenhausinfrastruktur und -einrichtungen.'
    }
  },
  {
    id: 36,
    year: '2024',
    image: '/image36.jpeg',
    title: {
      en: 'Apartment Unit, Pozeska 31, Belgrade',
      sr: 'Stambena jedinica, Požeška 31, Beograd',
      de: 'Wohneinheit, Pozeska 31, Belgrad'
    },
    location: {
      en: 'Pozeska 31, Belgrade, Serbia',
      sr: 'Požeška 31, Beograd, Srbija',
      de: 'Pozeska 31, Belgrad, Serbien'
    },
    tasks: {
      en: 'Execution Design for residential electrical installations, including premium indoor lighting layouts, customized power socket positioning, smart home/automation readiness, and low-voltage distribution board design tailored for modern residential living.',
      sr: 'Izvođački projekat elektroinstalacija za stambeni prostor, uključujući raspored premium unutrašnjeg osvetljenja, prilagođeno pozicioniranje priključnica, pripremu za pametnu kuću (smart home) i dizajn niskonaponskih razvodnih tabli prilagođenih modernom stanovanju.',
      de: 'Ausführungsplanung für Wohngebäudeelektrik, einschließlich Premium-Innenbeleuchtungskonzepten, maßgeschneiderter Steckdosenplatzierung, Smart-Home-Vorbereitung und Planung von Niederspannungsverteilern für modernes Wohnen.'
    }
  },
  {
    id: 17,
    year: '2023–2024',
    image: '/image17.jpeg',
    title: {
      en: 'Scandic Frankfurt Hafenpark Quartier (HPQ) Hotel',
      sr: 'Hotel Scandic Frankfurt Hafenpark Quartier (HPQ)',
      de: 'Scandic Frankfurt Hafenpark Quartier (HPQ) Hotel'
    },
    location: {
      en: 'Frankfurt am Main, Germany',
      sr: 'Frankfurt na Majni, Nemačka',
      de: 'Frankfurt am Main, Deutschland'
    },
    tasks: {
      en: 'Workshop drawing design, revision, and as-built technical documentation for electrical installations (LP8 phase).',
      sr: 'Izrada radioničkih crteža, revizija i tehnička dokumentacija izvedenog stanja elektroinstalacija (faza LP8).',
      de: 'Erstellung von Werkstatt- und Montageplanung, Revision und Bestandsdokumentation für Elektroinstallationen (LPH 8).'
    }
  },
  {
    id: 5,
    year: '2022–2024',
    image: '/image5.jpeg',
    title: {
      en: 'Feuerwehrstützpunkt Frankenberg (Eder) Fire Station',
      sr: 'Vatrogasna stanica Frankenberg (Eder)',
      de: 'Feuerwehrstützpunkt Frankenberg (Eder)'
    },
    location: {
      en: 'Frankenberg (Eder), Germany',
      sr: 'Frankenberg (Eder), Nemačka',
      de: 'Frankenberg (Eder), Deutschland'
    },
    tasks: {
      en: 'Execution design (LP5) of high and low voltage installations, including detailed lighting calculations.',
      sr: 'Izvođački projekat (LP5) instalacija jake i slabe struje, uključujući detaljne proračune osvetljenja.',
      de: 'Ausführungsplanung (LPH 5) von Stark- und Schwachstromanlagen, einschließlich detaillierter Beleuchtungsberechnungen.'
    }
  },
  {
    id: 7,
    year: '2022–2024',
    image: '/image7.jpeg',
    title: {
      en: 'Gesamtschule Melsungen Secondary School',
      sr: 'Srednja škola Gesamtschule Melzungen',
      de: 'Gesamtschule Melsungen'
    },
    location: {
      en: 'Melsungen, Germany',
      sr: 'Melzungen, Nemačka',
      de: 'Melsungen, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 9,
    year: '2023',
    image: '/image9.jpeg',
    title: {
      en: 'DHL Köln-Eifeltor Multi-Storey Car Park',
      sr: 'DHL Keln-Eifeltor višeetažna garaža',
      de: 'DHL Parkhaus Köln-Eifeltor'
    },
    location: {
      en: 'Cologne, Germany',
      sr: 'Keln, Nemačka',
      de: 'Köln, Deutschland'
    },
    tasks: {
      en: 'Conceptual and execution design (LP3 & LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Idejni i izvođački projekat (LP3 i LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Entwurfs- und Ausführungsplanung (LPH 3 & LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  },
  {
    id: 38,
    year: '2023',
    image: '/image38.jpeg',
    title: {
      en: 'Glamour Event Center, Kovacica',
      sr: 'Event centar Glamour, Kovačica',
      de: 'Veranstaltungszentrum Glamour, Kovačica'
    },
    location: {
      en: 'Kovacica, Serbia',
      sr: 'Kovačica, Srbija',
      de: 'Kovačica, Serbien'
    },
    tasks: {
      en: 'Execution Design for electrical installations of a multi-level event facility (up to 450 guests), including the design of main distribution boards, power supply for high-capacity catering and climate control systems, decorative and functional indoor lighting control, and external lighting for the event complex and parking area.',
      sr: 'Izvođački projekat elektroinstalacija za višenamenski event centar (do 450 gostiju), uključujući projektovanje glavnih razvodnih ormana, napajanje opreme za ugostiteljstvo visokog kapaciteta i sistema za klimatizaciju, kontrolu dekorativnog i funkcionalnog unutrašnjeg osvetljenja, kao i spoljašnje osvetljenje kompleksa i parkinga.',
      de: 'Ausführungsplanung der Elektroinstallationen für ein mehrstöckiges Veranstaltungszentrum (bis zu 450 Gäste), einschließlich der Planung von Hauptverteilern, Stromversorgung für Hochleistungsgastronomie und Klimaanlagen, Steuerung der dekorativen und funktionalen Innenbeleuchtung sowie Außenbeleuchtung für den Veranstaltungskomplex und Parkplatz.'
    }
  },
  {
    id: 4,
    year: '2021–2023',
    image: '/image4.jpeg',
    title: {
      en: 'Hermann-Schafft-Schule Special Education School',
      sr: 'Specijalna škola Hermann-Schafft-Schule',
      de: 'Förderschule Hermann-Schafft-Schule'
    },
    location: {
      en: 'Homberg (Efze), Germany',
      sr: 'Homberg (Efca), Nemačka',
      de: 'Homberg (Efze), Deutschland'
    },
    tasks: {
      en: 'Execution design (LP5) of high and low voltage installations, as well as indoor and outdoor lighting.',
      sr: 'Izvođački projekat (LP5) instalacija jake i slabe struje, kao i unutrašnjeg i spoljašnjeg osvetljenja.',
      de: 'Ausführungsplanung (LPH 5) von Stark- und Schwachstromanlagen sowie der Innen- und Außenbeleuchtung.'
    }
  }
];

// Ovu funkciju izvozimo da bi stranica zatražila prave podatke
export const getProjectsData = (lang) => {
  const validLang = ['en', 'sr', 'de'].includes(lang) ? lang : 'en';

  return rawProjectsData.map(project => ({
    id: project.id,
    year: project.year,
    image: project.image,
    title: project.title[validLang],
    location: project.location[validLang],
    tasks: project.tasks[validLang]
  }));
};