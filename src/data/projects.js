// Ažuriran fajl sa starim podacima iz kojih su zamenjene .jpg u .png ekstenzije (osim 025), i dodati su potpuno novi projekti iz novog foldera sortirani po godinama od 2026 nadole.[cite: 1]

const rawProjectsData = [
  // --- 2026 & NOVI PROJEKTI BEZ GODINE (postavljeno na vrh) ---
  {
    id: 41,
    year: '2026',
    image: '/projects/ESMC Dresden 2026.png',
    title: {
      en: 'ESMC Dresden',
      sr: 'ESMC Drezden',
      de: 'ESMC Dresden'
    },
    location: {
      en: 'Dresden, Germany',
      sr: 'Drezden, Nemačka',
      de: 'Dresden, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 42,
    year: '2026',
    image: '/projects/Porodicna kuca - 2026.png',
    title: {
      en: 'Family House',
      sr: 'Porodična kuća',
      de: 'Einfamilienhaus'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 43,
    year: '2026',
    image: '/projects/Porodicna kuca 2.png',
    title: {
      en: 'Family House 2',
      sr: 'Porodična kuća 2',
      de: 'Einfamilienhaus 2'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 44,
    year: '2026',
    image: '/projects/Porodicna kuca 3.png',
    title: {
      en: 'Family House 3',
      sr: 'Porodična kuća 3',
      de: 'Einfamilienhaus 3'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 45,
    year: '2026',
    image: '/projects/Porodicna kuca 4.png',
    title: {
      en: 'Family House 4',
      sr: 'Porodična kuća 4',
      de: 'Einfamilienhaus 4'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 46,
    year: '2026',
    image: '/projects/Kompetentni centar za visoku bezbednost.png',
    title: {
      en: 'High Security Competence Center',
      sr: 'Kompetentni centar za visoku bezbednost',
      de: 'Kompetenzzentrum für Hochsicherheit'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 47,
    year: '2026',
    image: '/projects/Osnovna škola Heusenstamm.png',
    title: {
      en: 'Primary School Heusenstamm',
      sr: 'Osnovna škola Heusenstamm',
      de: 'Grundschule Heusenstamm'
    },
    location: {
      en: 'Heusenstamm, Germany',
      sr: 'Hojzenštam, Nemačka',
      de: 'Heusenstamm, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 48,
    year: '2026',
    image: '/projects/Poslovni prostor Homberg.png',
    title: {
      en: 'Commercial Space Homberg',
      sr: 'Poslovni prostor Homberg',
      de: 'Geschäftsräume Homberg'
    },
    location: {
      en: 'Homberg, Germany',
      sr: 'Homberg, Nemačka',
      de: 'Homberg, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 49,
    year: '2026',
    image: '/projects/Schloss Wilhelmsburg.png',
    title: {
      en: 'Wilhelmsburg Castle',
      sr: 'Dvorac Wilhelmsburg',
      de: 'Schloss Wilhelmsburg'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 50,
    year: '2026',
    image: '/projects/SMA Fabrika.png',
    title: {
      en: 'SMA Factory',
      sr: 'SMA Fabrika',
      de: 'SMA Fabrik'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 51,
    year: '2026',
    image: '/projects/Stambeni objekat ulica Oslobodjenja.png',
    title: {
      en: 'Residential Building Oslobođenja Street',
      sr: 'Stambeni objekat Ulica Oslobođenja',
      de: 'Wohngebäude Oslobođenja Straße'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 52,
    year: '2026',
    image: '/projects/Tržni centar Dizeldorf.png',
    title: {
      en: 'Shopping Mall Düsseldorf',
      sr: 'Tržni centar Dizeldorf',
      de: 'Einkaufszentrum Düsseldorf'
    },
    location: {
      en: 'Düsseldorf, Germany',
      sr: 'Dizeldorf, Nemačka',
      de: 'Düsseldorf, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 53,
    year: '2026',
    image: '/projects/Vatrogasna stanica Mörfelden.png',
    title: {
      en: 'Fire Station Mörfelden',
      sr: 'Vatrogasna stanica Mörfelden',
      de: 'Feuerwehrwache Mörfelden'
    },
    location: {
      en: 'Mörfelden, Germany',
      sr: 'Merfelden, Nemačka',
      de: 'Mörfelden, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 54,
    year: '2026',
    image: '/projects/Vitos Haina.png',
    title: {
      en: 'Vitos Haina',
      sr: 'Vitos Haina',
      de: 'Vitos Haina'
    },
    location: {
      en: 'Haina, Germany',
      sr: 'Hajna, Nemačka',
      de: 'Haina, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 55,
    year: '2026',
    image: '/projects/Višenamenska zgrada Degerfeld.png',
    title: {
      en: 'Multipurpose Building Degerfeld',
      sr: 'Višenamenska zgrada Degerfeld',
      de: 'Mehrzweckgebäude Degerfeld'
    },
    location: {
      en: 'Degerfeld, Germany',
      sr: 'Degerfeld, Nemačka',
      de: 'Degerfeld, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 56,
    year: '2026',
    image: '/projects/Fritz Winter.png',
    title: {
      en: 'Fritz Winter',
      sr: 'Fritz Winter',
      de: 'Fritz Winter'
    },
    location: {
      en: 'Location TBD',
      sr: 'Lokacija TBD',
      de: 'Ort TBD'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 19,
    year: '2024–2026',
    image: '/projects/hypermep-projects-001.png',
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
    image: '/projects/hypermep-projects-002.png',
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
    image: '/projects/hypermep-projects-003.png',
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
    image: '/projects/hypermep-projects-004.png',
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
    image: '/projects/hypermep-projects-005.png',
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
    image: '/projects/hypermep-projects-006.png',
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
    image: '/projects/hypermep-projects-007.png',
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
    image: '/projects/hypermep-projects-008.png',
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
    image: '/projects/hypermep-projects-009.png',
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
    image: '/projects/hypermep-projects-010.png',
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
    image: '/projects/hypermep-projects-011.png',
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
    image: '/projects/hypermep-projects-012.png',
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
    image: '/projects/hypermep-projects-013.png',
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

  // --- 2025 (i periodi do 2025) ---
  {
    id: 34,
    year: '2025',
    image: '/projects/image34.jpeg',
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
    image: '/projects/image35.jpeg',
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
    image: '/projects/image37.jpeg',
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
    image: '/projects/image39.jpeg',
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
    image: '/projects/image40.jpeg',
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
    image: '/projects/image1.jpeg',
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
    image: '/projects/hypermep-projects-014.png',
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
    image: '/projects/hypermep-projects-015.png',
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
    image: '/projects/hypermep-projects-016.png',
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
    image: '/projects/hypermep-projects-017.png',
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
    image: '/projects/hypermep-projects-018.png',
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
    image: '/projects/hypermep-projects-019.png',
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
    image: '/projects/hypermep-projects-020.png',
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
    image: '/projects/hypermep-projects-021.png',
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
    image: '/projects/hypermep-projects-022.png',
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
    image: '/projects/hypermep-projects-023.png',
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
    image: '/projects/hypermep-projects-024.png',
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
    // 025 Nije bio u novom folderu, pa ostavljamo staru ekstenziju .jpg kako si i izlistao!
    image: '/projects/hypermep-projects-025.jpg',
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
    image: '/projects/hypermep-projects-026.png',
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

  // --- 2024 (i periodi do 2024) ---
  {
    id: 57,
    year: '2024',
    image: '/projects/Werner-von-Siemens Schule, Dammstraße 62, 35584 Wetzlar; Umbau, Sanierung & Erweiterung (8. BA) 2024.png',
    title: {
      en: 'Werner-von-Siemens Schule (Renovation & Expansion)',
      sr: 'Škola Werner-von-Siemens (Renoviranje i proširenje)',
      de: 'Werner-von-Siemens Schule (Umbau, Sanierung & Erweiterung)'
    },
    location: {
      en: 'Wetzlar, Germany',
      sr: 'Veclar, Nemačka',
      de: 'Wetzlar, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 2,
    year: '2024',
    image: '/projects/hypermep-projects-027.png',
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
    image: '/projects/image36.jpeg',
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
    image: '/projects/hypermep-projects-028.png',
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
    image: '/projects/hypermep-projects-029.png',
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
    image: '/projects/image7.jpeg',
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

  // --- 2023 ---
  {
    id: 9,
    year: '2023',
    image: '/projects/hypermep-projects-031.png',
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
    image: '/projects/image38.jpeg',
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
    image: '/projects/hypermep-projects-032.png',
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
  },

  // --- 2022 ---
  {
    id: 58,
    year: '2022',
    image: '/projects/Adam-von-Trott-Schule, Jahnstraße 16-20, 36205 Sontra, Umsetzung DigitalPakt - 2022.png',
    title: {
      en: 'Adam-von-Trott-Schule, DigitalPakt Implementation',
      sr: 'Škola Adam-von-Trott, Implementacija DigitalPakt-a',
      de: 'Adam-von-Trott-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Sontra, Germany',
      sr: 'Zontra, Nemačka',
      de: 'Sontra, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 59,
    year: '2022',
    image: '/projects/Anne-Frank-Schule, Fliederweg 3, 37269 Eschwege, Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'Anne-Frank-Schule, DigitalPakt Implementation',
      sr: 'Škola Anne-Frank, Implementacija DigitalPakt-a',
      de: 'Anne-Frank-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Eschwege, Germany',
      sr: 'Ešvege, Nemačka',
      de: 'Eschwege, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 60,
    year: '2022',
    image: '/projects/Berufliche Schulen Witzenhausen, Südbahnhofstr. 33, 37213 Witzenhausen; Umsetzung DigitalPakt - 2022.png',
    title: {
      en: 'Vocational Schools Witzenhausen, DigitalPakt Implementation',
      sr: 'Stručne škole Vicenhauzen, Implementacija DigitalPakt-a',
      de: 'Berufliche Schulen Witzenhausen, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Witzenhausen, Germany',
      sr: 'Vicenhauzen, Nemačka',
      de: 'Witzenhausen, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 61,
    year: '2022',
    image: '/projects/Brüder-Grimm-Schule (Gesamtschule), Dünzebacher Str. 21, 37263 Eschwege 2022.png',
    title: {
      en: 'Brüder-Grimm-Schule (Comprehensive School)',
      sr: 'Škola Brüder-Grimm (Sveobuhvatna škola)',
      de: 'Brüder-Grimm-Schule (Gesamtschule)'
    },
    location: {
      en: 'Eschwege, Germany',
      sr: 'Ešvege, Nemačka',
      de: 'Eschwege, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 62,
    year: '2022',
    image: '/projects/Freiherr-vom-Stein-Schule, Freiherr-vom-Stein-Str. 10, 37235 Hessisch Lichtenau; Umsetzung DigitalPakt - 2022.png',
    title: {
      en: 'Freiherr-vom-Stein-Schule, DigitalPakt Implementation',
      sr: 'Škola Freiherr-vom-Stein, Implementacija DigitalPakt-a',
      de: 'Freiherr-vom-Stein-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Hessisch Lichtenau, Germany',
      sr: 'Hesiš Lihtenau, Nemačka',
      de: 'Hessisch Lichtenau, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 63,
    year: '2022',
    image: '/projects/Friedrich-Wilhelm-Schule, Friedrich-Wilhelm-Straße 52, 37269 Eschwege, Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'Friedrich-Wilhelm-Schule, DigitalPakt Implementation',
      sr: 'Škola Friedrich-Wilhelm, Implementacija DigitalPakt-a',
      de: 'Friedrich-Wilhelm-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Eschwege, Germany',
      sr: 'Ešvege, Nemačka',
      de: 'Eschwege, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 64,
    year: '2022',
    image: '/projects/Grundschule Hessisch Lichtenau, Heinrichstraße 20-22, 37235 Hessisch Lichtenau; Umsetzung DigitalPakt - 2022.png',
    title: {
      en: 'Primary School Hessisch Lichtenau, DigitalPakt Implementation',
      sr: 'Osnovna škola Hesiš Lihtenau, Implementacija DigitalPakt-a',
      de: 'Grundschule Hessisch Lichtenau, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Hessisch Lichtenau, Germany',
      sr: 'Hesiš Lihtenau, Nemačka',
      de: 'Hessisch Lichtenau, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 65,
    year: '2022',
    image: '/projects/Johannisberg-Schule, Geschwister-Scholl-Straße 10, 37213 Witzenhausen; Umsetzung DigitalPakt - 2022.png',
    title: {
      en: 'Johannisberg-Schule, DigitalPakt Implementation',
      sr: 'Škola Johannisberg, Implementacija DigitalPakt-a',
      de: 'Johannisberg-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Witzenhausen, Germany',
      sr: 'Vicenhauzen, Nemačka',
      de: 'Witzenhausen, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 66,
    year: '2022',
    image: '/projects/Kleeblattschule Wehretal, Friedrich-Ebert-Straße 14 a, 37287 Wehretal, Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'Kleeblattschule Wehretal, DigitalPakt Implementation',
      sr: 'Škola Kleeblatt Veretal, Implementacija DigitalPakt-a',
      de: 'Kleeblattschule Wehretal, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Wehretal, Germany',
      sr: 'Veretal, Nemačka',
      de: 'Wehretal, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 67,
    year: '2022',
    image: '/projects/Oberstufengymnasium Eschwege, Südring 37, 37269 Eschwege; Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'High School Eschwege, DigitalPakt Implementation',
      sr: 'Gimnazija Ešvege, Implementacija DigitalPakt-a',
      de: 'Oberstufengymnasium Eschwege, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Eschwege, Germany',
      sr: 'Ešvege, Nemačka',
      de: 'Eschwege, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 68,
    year: '2022',
    image: '/projects/Paul-Moor-Schule, Langenhainer Str. 19, 37287 Wehretal 2022.png',
    title: {
      en: 'Paul-Moor-Schule',
      sr: 'Škola Paul-Moor',
      de: 'Paul-Moor-Schule'
    },
    location: {
      en: 'Wehretal, Germany',
      sr: 'Veretal, Nemačka',
      de: 'Wehretal, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 69,
    year: '2022',
    image: '/projects/Rhenanus-Schule - Partnerschule des Leistungssports, Huhngraben 2, 37242 Bad Sooden-Allendorf, Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'Rhenanus-Schule, DigitalPakt Implementation',
      sr: 'Škola Rhenanus, Implementacija DigitalPakt-a',
      de: 'Rhenanus-Schule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Bad Sooden-Allendorf, Germany',
      sr: 'Bad Zoden-Alendorf, Nemačka',
      de: 'Bad Sooden-Allendorf, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 70,
    year: '2022',
    image: '/projects/Steinwaldschule Neukirchen, Reißmannweg 7, 34626 Neukirchen; Sanierung - 2022.png',
    title: {
      en: 'Steinwaldschule Neukirchen (Renovation)',
      sr: 'Škola Steinwald Nojkirhen (Renoviranje)',
      de: 'Steinwaldschule Neukirchen (Sanierung)'
    },
    location: {
      en: 'Neukirchen, Germany',
      sr: 'Nojkirhen, Nemačka',
      de: 'Neukirchen, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 71,
    year: '2022',
    image: '/projects/Struthschule, Beethovenstraße 2, 37269 Eschwege, Umsetzung DigitalPakt 2022.png',
    title: {
      en: 'Struthschule, DigitalPakt Implementation',
      sr: 'Škola Struth, Implementacija DigitalPakt-a',
      de: 'Struthschule, Umsetzung DigitalPakt'
    },
    location: {
      en: 'Eschwege, Germany',
      sr: 'Ešvege, Nemačka',
      de: 'Eschwege, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 72,
    year: '2022',
    image: '/projects/Südringgauschule, (Grund-, Haupt- und Realschule), Schulstraße 16, 37293 Herleshausen 2022.png',
    title: {
      en: 'Südringgauschule',
      sr: 'Škola Südringgau',
      de: 'Südringgauschule'
    },
    location: {
      en: 'Herleshausen, Germany',
      sr: 'Herleshauzen, Nemačka',
      de: 'Herleshausen, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },

  // --- 2021 ---
  {
    id: 73,
    year: '2021',
    image: '/projects/HEAE Lern- und Erinnerungsort Notaufnahmelager, Meisenbornweg 23-27, 35398 Gießen; Haus 1, 6, 7, 9 - 2021.png',
    title: {
      en: 'HEAE Emergency Reception Camp Memorial',
      sr: 'HEAE Memorijalni centar prihvatnog logora',
      de: 'HEAE Lern- und Erinnerungsort Notaufnahmelager'
    },
    location: {
      en: 'Gießen, Germany',
      sr: 'Gisen, Nemačka',
      de: 'Gießen, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },

  // --- 2020 ---
  {
    id: 74,
    year: '2020',
    image: '/projects/Alte Mühle An der Alten Mühle, 65760 Eschborn - 2020.png',
    title: {
      en: 'Alte Mühle (Old Mill)',
      sr: 'Alte Mühle (Stari mlin)',
      de: 'Alte Mühle'
    },
    location: {
      en: 'Eschborn, Germany',
      sr: 'Ešborn, Nemačka',
      de: 'Eschborn, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },
  {
    id: 75,
    year: '2020',
    image: '/projects/IGS-LINDENFELDSCHULE Friedensstraße, 81, 63071 Offenbach - 2020.png',
    title: {
      en: 'IGS Lindenfeld School',
      sr: 'Škola IGS Lindenfeld',
      de: 'IGS-Lindenfeldschule'
    },
    location: {
      en: 'Offenbach, Germany',
      sr: 'Ofenbah, Nemačka',
      de: 'Offenbach, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  },

  // --- 2019 ---
  {
    id: 76,
    year: '2019',
    image: '/projects/Trauerzentrum Mühlheimer Straße 425, 63075 Offenbach am Main - 2019.png',
    title: {
      en: 'Grief Center Offenbach',
      sr: 'Centar za žalost Ofenbah',
      de: 'Trauerzentrum Offenbach'
    },
    location: {
      en: 'Offenbach am Main, Germany',
      sr: 'Ofenbah na Majni, Nemačka',
      de: 'Offenbach am Main, Deutschland'
    },
    tasks: {
      en: 'Detailed tasks to be added.',
      sr: 'Detaljan opis zadataka biće dodat naknadno.',
      de: 'Detaillierte Aufgaben werden hinzugefügt.'
    }
  }
];

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