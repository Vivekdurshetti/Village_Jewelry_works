import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'it' | 'fr' | 'pt' | 'ja' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translations = getTranslations();
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = () => ({
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact Us',
      rings: 'Rings',
      necklaces: 'Necklaces',
      earrings: 'Earrings',
      goldRings: 'Gold Rings',
      weddingRings: 'Wedding Rings',
      engagementRings: 'Engagement Rings',
      goldChains: 'Gold Chains',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Pendant Sets',
      goldStuds: 'Gold Studs',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Handcrafted Gold & Silver Jewellery in',
      location: 'Basara',
      subtitle: 'Crafting Timeless Beauty, One Ornament at a Time',
      cta: 'Explore Our Collection'
    },
    about: {
      title: 'Your Local Artisans of',
      titleHighlight: 'Precious Metalwork',
      description1: 'Located in Basara Village, we are a family-run jewelry artelier specializing in exquisite gold and silver pieces. With over 20 years of combined experience, our craftsmen blend traditional techniques with contemporary design—ensuring every ornament tells your unique story.',
      description2: 'From elegant bridal sets to everyday keepsakes, quality and trust are the cornerstones of our business. Each piece is meticulously handcrafted with attention to detail that honors both the materials and the artisanal tradition.',
      qualityTitle: 'Quality Materials',
      qualityDesc: 'Premium gold and silver sourced ethically',
      legacyTitle: 'Family Legacy',
      legacyDesc: 'Three generations of jewelry artisans'
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'Discover our range of premium jewelry services, crafted with precision and care',
      custom: {
        title: 'Custom Gold & Silver Ornaments',
        desc1: 'Bespoke necklaces, bracelets, pendants and more',
        desc2: 'Wide range of karat options and finishes',
        desc3: 'CAD-backed design previews and gemstone setting'
      },
      repair: {
        title: 'Repair & Restoration',
        desc1: 'Ring resizing, clasp replacement, soldering',
        desc2: 'Polishing, rhodium plating, and stone re-setting',
        desc3: 'Fast turnaround with quality guarantees'
      },
      making: {
        title: 'Ear & Hand Ring Making',
        desc1: 'Precision crafting of earrings and hand rings',
        desc2: 'Intricate filigree, traditional temple work, modern styles',
        desc3: 'Personalized fitting and design consultation'
      }
    },
    expertise: {
      title: 'Our Exquisite',
      titleHighlight: 'Collection',
      subtitle: 'Discover our complete range of handcrafted jewelry, each piece telling a unique story of tradition, elegance, and timeless beauty.',
      customTitle: "Can't Find What You're Looking For?",
      customDesc: 'We specialize in custom jewelry design. Let us create something unique just for you.',
      customCta: 'Contact Us for Custom Design',
      knowMore: 'Know More'
    },
    testimonials: {
      title: 'What Our',
      titleHighlight: 'Clients Say',
      subtitle: 'Read what our valued customers have to say about their experience with us',
      shareTitle: 'Share Your Experience',
      latestTitle: 'Latest Feedback',
      moreTitle: 'More Reviews'
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      subtitle: 'Have questions or want to schedule a consultation? Reach out to us!',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursValue: 'Mon–Sat: 10 AM–6 PM | Sun: Closed',
      consultationTitle: 'Get a Free Consultation',
      consultationDesc: 'Complete our online form or call us to book a one-on-one design appointment.',
      formTitle: 'Send us a Message',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      phonePlaceholder: 'Your phone (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      sending: 'Sending...',
      send: 'Send Message'
    },
    footer: {
      description: 'Crafting timeless beauty with precision and passion. Your trusted local jeweller since 2000.',
      quickLinks: 'Quick Links',
      businessHours: 'Business Hours',
      monday: 'Monday - Friday:',
      saturday: 'Saturday:',
      sunday: 'Sunday:',
      mondayHours: '10:00 AM - 6:00 PM',
      saturdayHours: '10:00 AM - 4:00 PM',
      sundayHours: 'Closed',
      rights: '© 2025 Basar Jewellery. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    products: {
      goldRings: {
        title: 'Elegant Gold Rings for Every',
        titleHighlight: 'Occasion',
        subtitle: 'Timeless Designs, Artisan Craftsmanship, and Purity You Can Trust',
        description: 'Experience the perfect blend of traditional craftsmanship and contemporary design with our exclusive gold ring collection. Each piece is meticulously handcrafted by our master artisans using the finest 22K and 24K gold, ensuring unmatched quality and timeless beauty.',
        features: {
          purity: 'Available in 22K & 24K Purity',
          handcrafted: 'Handcrafted by Master Artisans',
          custom: 'Custom Sizes & Engraving Available',
          hallmarked: 'BIS Hallmarked Jewelry'
        },
        cta: {
          shop: 'Shop Now',
          custom: 'Request Custom Ring'
        }
      },
      weddingRings: {
        title: 'Wedding Rings for Your',
        titleHighlight: 'Special Day',
        subtitle: 'Symbol of Eternal Love, Crafted with Perfection',
        description: 'Celebrate your eternal bond with our exquisite wedding ring collection. Each ring is crafted to symbolize your unique love story, featuring traditional and contemporary designs that will be treasured for generations.',
        features: {
          matching: 'Matching His & Hers Sets Available',
          gold: '18K, 22K & 24K Gold Options',
          diamonds: 'Diamond & Gemstone Settings',
          engraving: 'Custom Engraving Services',
          warranty: 'Lifetime Warranty & Maintenance'
        }
      },
      engagementRings: {
        title: 'Engagement Rings for Your',
        titleHighlight: 'Perfect Proposal',
        subtitle: 'Begin Your Forever with a Ring as Unique as Your Love',
        description: 'Make your proposal unforgettable with our stunning engagement ring collection. From classic solitaires to vintage-inspired designs, each ring is crafted to capture the essence of your love story and create a moment that will be cherished forever.',
        features: {
          certified: 'Certified Diamond & Gemstones',
          styles: 'Solitaire, Halo & Vintage Styles',
          gold: '18K & 22K Gold Settings',
          consultation: 'Custom Design Consultation',
          gia: 'GIA Certified Diamonds'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Call Now',
      viewCollection: 'View Collection',
      customDesign: 'Custom Design',
      freeDelivery: 'Free Delivery',
      secureShipping: 'Secure shipping nationwide',
      lifetimePolish: 'Lifetime Polish',
      freePolishing: 'Free polishing service',
      easyReturns: 'Easy Returns',
      returnPolicy: '15-day return policy',
      customization: 'Customization',
      personalizedDesigns: 'Personalized designs',
      premiumQuality: 'Premium Quality',
      expertCraftsmanship: 'Expert Craftsmanship',
      perfectFit: 'Perfect Fit',
      lifetimeService: 'Lifetime Service',
      rating: 'Rating',
      excellent: 'Excellent',
      good: 'Good',
      average: 'Average',
      poor: 'Poor',
      worst: 'Worst',
      submitFeedback: 'Submit Feedback',
      submitting: 'Submitting...'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      about: 'Über uns',
      services: 'Dienstleistungen',
      testimonials: 'Bewertungen',
      contact: 'Kontakt',
      rings: 'Ringe',
      necklaces: 'Halsketten',
      earrings: 'Ohrringe',
      goldRings: 'Goldringe',
      weddingRings: 'Eheringe',
      engagementRings: 'Verlobungsringe',
      goldChains: 'Goldketten',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Anhänger-Sets',
      goldStuds: 'Gold-Ohrstecker',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Handgefertigter Gold- und Silberschmuck in',
      location: 'Basara',
      subtitle: 'Zeitlose Schönheit schaffen, ein Schmuckstück nach dem anderen',
      cta: 'Unsere Kollektion entdecken'
    },
    about: {
      title: 'Ihre lokalen Handwerker für',
      titleHighlight: 'Edelmetallarbeiten',
      description1: 'In Basara Village ansässig, sind wir ein familiengeführtes Schmuckatelier, das sich auf exquisite Gold- und Silberstücke spezialisiert hat. Mit über 20 Jahren kombinierter Erfahrung verbinden unsere Handwerker traditionelle Techniken mit zeitgenössischem Design und stellen sicher, dass jedes Schmuckstück Ihre einzigartige Geschichte erzählt.',
      description2: 'Von eleganten Brautsets bis hin zu alltäglichen Erinnerungsstücken sind Qualität und Vertrauen die Grundpfeiler unseres Geschäfts. Jedes Stück wird sorgfältig handgefertigt mit Liebe zum Detail, die sowohl die Materialien als auch die handwerkliche Tradition ehrt.',
      qualityTitle: 'Hochwertige Materialien',
      qualityDesc: 'Premium Gold und Silber ethisch bezogen',
      legacyTitle: 'Familienerbe',
      legacyDesc: 'Drei Generationen von Schmuckhandwerkern'
    },
    services: {
      title: 'Unsere',
      titleHighlight: 'Dienstleistungen',
      subtitle: 'Entdecken Sie unser Angebot an Premium-Schmuckdienstleistungen, gefertigt mit Präzision und Sorgfalt',
      custom: {
        title: 'Maßgeschneiderte Gold- und Silberschmuckstücke',
        desc1: 'Maßgeschneiderte Halsketten, Armbänder, Anhänger und mehr',
        desc2: 'Breite Palette von Karat-Optionen und Oberflächen',
        desc3: 'CAD-gestützte Design-Vorschauen und Edelsteinfassung'
      },
      repair: {
        title: 'Reparatur & Restaurierung',
        desc1: 'Ringgrößenänderung, Verschlussaustausch, Löten',
        desc2: 'Polieren, Rhodiumbeschichtung und Steinneubesetzung',
        desc3: 'Schnelle Bearbeitung mit Qualitätsgarantien'
      },
      making: {
        title: 'Ohrring- und Handringherstellung',
        desc1: 'Präzisionsfertigung von Ohrringen und Handringen',
        desc2: 'Komplizierte Filigranarbeiten, traditionelle Tempelarbeiten, moderne Stile',
        desc3: 'Personalisierte Anpassung und Designberatung'
      }
    },
    expertise: {
      title: 'Unsere exquisite',
      titleHighlight: 'Kollektion',
      subtitle: 'Entdecken Sie unser komplettes Sortiment an handgefertigtem Schmuck, wobei jedes Stück eine einzigartige Geschichte von Tradition, Eleganz und zeitloser Schönheit erzählt.',
      customTitle: 'Können Sie nicht finden, was Sie suchen?',
      customDesc: 'Wir sind spezialisiert auf maßgeschneiderte Schmuckdesigns. Lassen Sie uns etwas Einzigartiges nur für Sie schaffen.',
      customCta: 'Kontaktieren Sie uns für maßgeschneiderte Designs',
      knowMore: 'Mehr erfahren'
    },
    testimonials: {
      title: 'Was unsere',
      titleHighlight: 'Kunden sagen',
      subtitle: 'Lesen Sie, was unsere geschätzten Kunden über ihre Erfahrungen mit uns zu sagen haben',
      shareTitle: 'Teilen Sie Ihre Erfahrung',
      latestTitle: 'Neueste Bewertung',
      moreTitle: 'Weitere Bewertungen'
    },
    contact: {
      title: 'Kontakt',
      titleHighlight: 'aufnehmen',
      subtitle: 'Haben Sie Fragen oder möchten Sie einen Beratungstermin vereinbaren? Kontaktieren Sie uns!',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Geschäftszeiten',
      hoursValue: 'Mo–Sa: 10–18 Uhr | So: Geschlossen',
      consultationTitle: 'Kostenlose Beratung erhalten',
      consultationDesc: 'Füllen Sie unser Online-Formular aus oder rufen Sie uns an, um einen persönlichen Designtermin zu buchen.',
      formTitle: 'Senden Sie uns eine Nachricht',
      name: 'Vollständiger Name',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail',
      phonePlaceholder: 'Ihr Telefon (optional)',
      message: 'Nachricht',
      messagePlaceholder: 'Sagen Sie uns, wie wir Ihnen helfen können...',
      sending: 'Wird gesendet...',
      send: 'Nachricht senden'
    },
    footer: {
      description: 'Zeitlose Schönheit mit Präzision und Leidenschaft schaffen. Ihr vertrauensvoller lokaler Juwelier seit 2000.',
      quickLinks: 'Schnelllinks',
      businessHours: 'Geschäftszeiten',
      monday: 'Montag - Freitag:',
      saturday: 'Samstag:',
      sunday: 'Sonntag:',
      mondayHours: '10:00 - 18:00 Uhr',
      saturdayHours: '10:00 - 16:00 Uhr',
      sundayHours: 'Geschlossen',
      rights: '© 2025 Basar Jewellery. Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen'
    },
    products: {
      goldRings: {
        title: 'Elegante Goldringe für jeden',
        titleHighlight: 'Anlass',
        subtitle: 'Zeitlose Designs, Handwerkskunst und Reinheit, der Sie vertrauen können',
        description: 'Erleben Sie die perfekte Mischung aus traditioneller Handwerkskunst und zeitgenössischem Design mit unserer exklusiven Goldring-Kollektion. Jedes Stück wird sorgfältig von unseren Meisterhandwerkern mit feinstem 22K und 24K Gold handgefertigt und gewährleistet unvergleichliche Qualität und zeitlose Schönheit.',
        features: {
          purity: 'Verfügbar in 22K & 24K Reinheit',
          handcrafted: 'Handgefertigt von Meisterhandwerkern',
          custom: 'Maßgeschneiderte Größen & Gravur verfügbar',
          hallmarked: 'BIS-zertifizierter Schmuck'
        },
        cta: {
          shop: 'Jetzt kaufen',
          custom: 'Maßgeschneiderten Ring anfragen'
        }
      },
      weddingRings: {
        title: 'Eheringe für Ihren',
        titleHighlight: 'besonderen Tag',
        subtitle: 'Symbol ewiger Liebe, mit Perfektion gefertigt',
        description: 'Feiern Sie Ihre ewige Verbindung mit unserer exquisiten Ehering-Kollektion. Jeder Ring ist gefertigt, um Ihre einzigartige Liebesgeschichte zu symbolisieren, mit traditionellen und zeitgenössischen Designs, die für Generationen geschätzt werden.',
        features: {
          matching: 'Passende Sets für Sie und Ihn verfügbar',
          gold: '18K, 22K & 24K Gold-Optionen',
          diamonds: 'Diamant- und Edelsteinfassungen',
          engraving: 'Maßgeschneiderte Gravurdienste',
          warranty: 'Lebenslange Garantie & Wartung'
        }
      },
      engagementRings: {
        title: 'Verlobungsringe für Ihren',
        titleHighlight: 'perfekten Antrag',
        subtitle: 'Beginnen Sie Ihr Für-immer mit einem Ring so einzigartig wie Ihre Liebe',
        description: 'Machen Sie Ihren Antrag unvergesslich mit unserer atemberaubenden Verlobungsring-Kollektion. Von klassischen Solitären bis hin zu vintage-inspirierten Designs ist jeder Ring gefertigt, um die Essenz Ihrer Liebesgeschichte einzufangen und einen Moment zu schaffen, der für immer geschätzt wird.',
        features: {
          certified: 'Zertifizierte Diamanten & Edelsteine',
          styles: 'Solitär-, Halo- & Vintage-Stile',
          gold: '18K & 22K Goldfassungen',
          consultation: 'Maßgeschneiderte Designberatung',
          gia: 'GIA-zertifizierte Diamanten'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Jetzt anrufen',
      viewCollection: 'Kollektion ansehen',
      customDesign: 'Maßgeschneidertes Design',
      freeDelivery: 'Kostenlose Lieferung',
      secureShipping: 'Sicherer Versand deutschlandweit',
      lifetimePolish: 'Lebenslange Politur',
      freePolishing: 'Kostenloser Polierdienst',
      easyReturns: 'Einfache Rückgabe',
      returnPolicy: '15-Tage-Rückgaberecht',
      customization: 'Anpassung',
      personalizedDesigns: 'Personalisierte Designs',
      premiumQuality: 'Premium-Qualität',
      expertCraftsmanship: 'Expertenhandwerk',
      perfectFit: 'Perfekte Passform',
      lifetimeService: 'Lebenslanger Service',
      rating: 'Bewertung',
      excellent: 'Ausgezeichnet',
      good: 'Gut',
      average: 'Durchschnittlich',
      poor: 'Schlecht',
      worst: 'Sehr schlecht',
      submitFeedback: 'Bewertung abgeben',
      submitting: 'Wird übermittelt...'
    }
  },
  it: {
    nav: {
      home: 'Home',
      products: 'Prodotti',
      about: 'Chi siamo',
      services: 'Servizi',
      testimonials: 'Testimonianze',
      contact: 'Contattaci',
      rings: 'Anelli',
      necklaces: 'Collane',
      earrings: 'Orecchini',
      goldRings: 'Anelli d\'oro',
      weddingRings: 'Fedi nuziali',
      engagementRings: 'Anelli di fidanzamento',
      goldChains: 'Catene d\'oro',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Set di ciondoli',
      goldStuds: 'Orecchini a bottone d\'oro',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Gioielli in oro e argento fatti a mano a',
      location: 'Basara',
      subtitle: 'Creando bellezza senza tempo, un ornamento alla volta',
      cta: 'Esplora la nostra collezione'
    },
    about: {
      title: 'I vostri artigiani locali di',
      titleHighlight: 'lavorazione metalli preziosi',
      description1: 'Situati nel villaggio di Basara, siamo un atelier di gioielli a conduzione familiare specializzato in squisiti pezzi d\'oro e argento. Con oltre 20 anni di esperienza combinata, i nostri artigiani fondono tecniche tradizionali con design contemporaneo, assicurando che ogni ornamento racconti la vostra storia unica.',
      description2: 'Dai set da sposa eleganti ai ricordi quotidiani, qualità e fiducia sono le pietre angolari del nostro business. Ogni pezzo è meticolosamente fatto a mano con attenzione ai dettagli che onora sia i materiali che la tradizione artigianale.',
      qualityTitle: 'Materiali di qualità',
      qualityDesc: 'Oro e argento premium di provenienza etica',
      legacyTitle: 'Eredità familiare',
      legacyDesc: 'Tre generazioni di artigiani gioiellieri'
    },
    services: {
      title: 'I nostri',
      titleHighlight: 'servizi',
      subtitle: 'Scopri la nostra gamma di servizi di gioielleria premium, realizzati con precisione e cura',
      custom: {
        title: 'Ornamenti personalizzati in oro e argento',
        desc1: 'Collane, braccialetti, ciondoli su misura e altro',
        desc2: 'Ampia gamma di opzioni di carati e finiture',
        desc3: 'Anteprime di design supportate da CAD e incastonatura di gemme'
      },
      repair: {
        title: 'Riparazione e restauro',
        desc1: 'Ridimensionamento anelli, sostituzione chiusure, saldatura',
        desc2: 'Lucidatura, placcatura al rodio e re-incastonatura pietre',
        desc3: 'Tempi di consegna rapidi con garanzie di qualità'
      },
      making: {
        title: 'Creazione di orecchini e anelli',
        desc1: 'Lavorazione di precisione di orecchini e anelli',
        desc2: 'Filigrana intricata, lavori tradizionali del tempio, stili moderni',
        desc3: 'Adattamento personalizzato e consulenza di design'
      }
    },
    expertise: {
      title: 'La nostra squisita',
      titleHighlight: 'collezione',
      subtitle: 'Scopri la nostra gamma completa di gioielli fatti a mano, ogni pezzo racconta una storia unica di tradizione, eleganza e bellezza senza tempo.',
      customTitle: 'Non riesci a trovare quello che cerchi?',
      customDesc: 'Siamo specializzati nel design di gioielli personalizzati. Lascia che creiamo qualcosa di unico solo per te.',
      customCta: 'Contattaci per design personalizzati',
      knowMore: 'Scopri di più'
    },
    testimonials: {
      title: 'Cosa dicono i nostri',
      titleHighlight: 'clienti',
      subtitle: 'Leggi cosa hanno da dire i nostri stimati clienti sulla loro esperienza con noi',
      shareTitle: 'Condividi la tua esperienza',
      latestTitle: 'Ultima testimonianza',
      moreTitle: 'Altre recensioni'
    },
    contact: {
      title: 'Mettiti in',
      titleHighlight: 'contatto',
      subtitle: 'Hai domande o vuoi programmare una consulenza? Contattaci!',
      address: 'Indirizzo',
      phone: 'Telefono',
      email: 'Email',
      hours: 'Orari di apertura',
      hoursValue: 'Lun–Sab: 10:00–18:00 | Dom: Chiuso',
      consultationTitle: 'Ottieni una consulenza gratuita',
      consultationDesc: 'Compila il nostro modulo online o chiamaci per prenotare un appuntamento di design uno-a-uno.',
      formTitle: 'Inviaci un messaggio',
      name: 'Nome completo',
      namePlaceholder: 'Il tuo nome',
      emailPlaceholder: 'La tua email',
      phonePlaceholder: 'Il tuo telefono (opzionale)',
      message: 'Messaggio',
      messagePlaceholder: 'Dicci come possiamo aiutarti...',
      sending: 'Invio in corso...',
      send: 'Invia messaggio'
    },
    footer: {
      description: 'Creando bellezza senza tempo con precisione e passione. Il vostro gioielliere locale di fiducia dal 2000.',
      quickLinks: 'Link rapidi',
      businessHours: 'Orari di apertura',
      monday: 'Lunedì - Venerdì:',
      saturday: 'Sabato:',
      sunday: 'Domenica:',
      mondayHours: '10:00 - 18:00',
      saturdayHours: '10:00 - 16:00',
      sundayHours: 'Chiuso',
      rights: '© 2025 Basar Jewellery. Tutti i diritti riservati.',
      privacy: 'Politica sulla privacy',
      terms: 'Termini di servizio'
    },
    products: {
      goldRings: {
        title: 'Anelli d\'oro eleganti per ogni',
        titleHighlight: 'occasione',
        subtitle: 'Design senza tempo, artigianato artistico e purezza di cui ti puoi fidare',
        description: 'Sperimenta la perfetta fusione di artigianato tradizionale e design contemporaneo con la nostra esclusiva collezione di anelli d\'oro. Ogni pezzo è meticolosamente fatto a mano dai nostri maestri artigiani utilizzando il più fine oro 22K e 24K, garantendo qualità ineguagliabile e bellezza senza tempo.',
        features: {
          purity: 'Disponibile in purezza 22K e 24K',
          handcrafted: 'Fatto a mano da maestri artigiani',
          custom: 'Taglie personalizzate e incisioni disponibili',
          hallmarked: 'Gioielli certificati BIS'
        },
        cta: {
          shop: 'Acquista ora',
          custom: 'Richiedi anello personalizzato'
        }
      },
      weddingRings: {
        title: 'Fedi nuziali per il vostro',
        titleHighlight: 'giorno speciale',
        subtitle: 'Simbolo di amore eterno, realizzato con perfezione',
        description: 'Celebrate il vostro legame eterno con la nostra squisita collezione di fedi nuziali. Ogni anello è realizzato per simboleggiare la vostra storia d\'amore unica, con design tradizionali e contemporanei che saranno tesoro per generazioni.',
        features: {
          matching: 'Set coordinati per lui e per lei disponibili',
          gold: 'Opzioni oro 18K, 22K e 24K',
          diamonds: 'Incastonature di diamanti e gemme',
          engraving: 'Servizi di incisione personalizzata',
          warranty: 'Garanzia a vita e manutenzione'
        }
      },
      engagementRings: {
        title: 'Anelli di fidanzamento per la vostra',
        titleHighlight: 'proposta perfetta',
        subtitle: 'Iniziate il vostro per sempre con un anello unico come il vostro amore',
        description: 'Rendete la vostra proposta indimenticabile con la nostra straordinaria collezione di anelli di fidanzamento. Dai classici solitari ai design ispirati al vintage, ogni anello è realizzato per catturare l\'essenza della vostra storia d\'amore e creare un momento che sarà custodito per sempre.',
        features: {
          certified: 'Diamanti e gemme certificate',
          styles: 'Stili solitario, alone e vintage',
          gold: 'Incastonature oro 18K e 22K',
          consultation: 'Consulenza di design personalizzato',
          gia: 'Diamanti certificati GIA'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Chiama ora',
      viewCollection: 'Visualizza collezione',
      customDesign: 'Design personalizzato',
      freeDelivery: 'Consegna gratuita',
      secureShipping: 'Spedizione sicura in tutta Italia',
      lifetimePolish: 'Lucidatura a vita',
      freePolishing: 'Servizio di lucidatura gratuito',
      easyReturns: 'Resi facili',
      returnPolicy: 'Politica di reso di 15 giorni',
      customization: 'Personalizzazione',
      personalizedDesigns: 'Design personalizzati',
      premiumQuality: 'Qualità premium',
      expertCraftsmanship: 'Artigianato esperto',
      perfectFit: 'Vestibilità perfetta',
      lifetimeService: 'Servizio a vita',
      rating: 'Valutazione',
      excellent: 'Eccellente',
      good: 'Buono',
      average: 'Medio',
      poor: 'Scarso',
      worst: 'Pessimo',
      submitFeedback: 'Invia feedback',
      submitting: 'Invio in corso...'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      about: 'À propos',
      services: 'Services',
      testimonials: 'Témoignages',
      contact: 'Nous contacter',
      rings: 'Bagues',
      necklaces: 'Colliers',
      earrings: 'Boucles d\'oreilles',
      goldRings: 'Bagues en or',
      weddingRings: 'Alliances',
      engagementRings: 'Bagues de fiançailles',
      goldChains: 'Chaînes en or',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Ensembles de pendentifs',
      goldStuds: 'Puces en or',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Bijoux en or et argent faits main à',
      location: 'Basara',
      subtitle: 'Créer une beauté intemporelle, un ornement à la fois',
      cta: 'Explorer notre collection'
    },
    about: {
      title: 'Vos artisans locaux de',
      titleHighlight: 'travail des métaux précieux',
      description1: 'Situés dans le village de Basara, nous sommes un atelier de bijouterie familial spécialisé dans les pièces exquises en or et argent. Avec plus de 20 ans d\'expérience combinée, nos artisans mélangent les techniques traditionnelles avec le design contemporain, s\'assurant que chaque ornement raconte votre histoire unique.',
      description2: 'Des ensembles de mariée élégants aux souvenirs quotidiens, la qualité et la confiance sont les pierres angulaires de notre entreprise. Chaque pièce est méticuleusement fabriquée à la main avec une attention aux détails qui honore à la fois les matériaux et la tradition artisanale.',
      qualityTitle: 'Matériaux de qualité',
      qualityDesc: 'Or et argent premium d\'origine éthique',
      legacyTitle: 'Héritage familial',
      legacyDesc: 'Trois générations d\'artisans bijoutiers'
    },
    services: {
      title: 'Nos',
      titleHighlight: 'services',
      subtitle: 'Découvrez notre gamme de services de bijouterie premium, conçus avec précision et soin',
      custom: {
        title: 'Ornements personnalisés en or et argent',
        desc1: 'Colliers, bracelets, pendentifs sur mesure et plus',
        desc2: 'Large gamme d\'options de carats et de finitions',
        desc3: 'Aperçus de design assistés par CAO et sertissage de pierres précieuses'
      },
      repair: {
        title: 'Réparation et restauration',
        desc1: 'Redimensionnement de bagues, remplacement de fermoirs, soudure',
        desc2: 'Polissage, placage au rhodium et re-sertissage de pierres',
        desc3: 'Délai d\'exécution rapide avec garanties de qualité'
      },
      making: {
        title: 'Fabrication de boucles d\'oreilles et bagues',
        desc1: 'Fabrication de précision de boucles d\'oreilles et bagues',
        desc2: 'Filigrane complexe, travail de temple traditionnel, styles modernes',
        desc3: 'Ajustement personnalisé et consultation de design'
      }
    },
    expertise: {
      title: 'Notre exquise',
      titleHighlight: 'collection',
      subtitle: 'Découvrez notre gamme complète de bijoux faits main, chaque pièce racontant une histoire unique de tradition, d\'élégance et de beauté intemporelle.',
      customTitle: 'Vous ne trouvez pas ce que vous cherchez ?',
      customDesc: 'Nous nous spécialisons dans la conception de bijoux personnalisés. Laissez-nous créer quelque chose d\'unique juste pour vous.',
      customCta: 'Contactez-nous pour un design personnalisé',
      knowMore: 'En savoir plus'
    },
    testimonials: {
      title: 'Ce que disent nos',
      titleHighlight: 'clients',
      subtitle: 'Lisez ce que nos clients estimés ont à dire sur leur expérience avec nous',
      shareTitle: 'Partagez votre expérience',
      latestTitle: 'Dernier témoignage',
      moreTitle: 'Plus d\'avis'
    },
    contact: {
      title: 'Entrer en',
      titleHighlight: 'contact',
      subtitle: 'Vous avez des questions ou souhaitez programmer une consultation ? Contactez-nous !',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Heures d\'ouverture',
      hoursValue: 'Lun–Sam : 10h–18h | Dim : Fermé',
      consultationTitle: 'Obtenez une consultation gratuite',
      consultationDesc: 'Remplissez notre formulaire en ligne ou appelez-nous pour réserver un rendez-vous de design en tête-à-tête.',
      formTitle: 'Envoyez-nous un message',
      name: 'Nom complet',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      phonePlaceholder: 'Votre téléphone (optionnel)',
      message: 'Message',
      messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
      sending: 'Envoi en cours...',
      send: 'Envoyer le message'
    },
    footer: {
      description: 'Créer une beauté intemporelle avec précision et passion. Votre bijoutier local de confiance depuis 2000.',
      quickLinks: 'Liens rapides',
      businessHours: 'Heures d\'ouverture',
      monday: 'Lundi - Vendredi :',
      saturday: 'Samedi :',
      sunday: 'Dimanche :',
      mondayHours: '10h00 - 18h00',
      saturdayHours: '10h00 - 16h00',
      sundayHours: 'Fermé',
      rights: '© 2025 Basar Jewellery. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions de service'
    },
    products: {
      goldRings: {
        title: 'Bagues en or élégantes pour chaque',
        titleHighlight: 'occasion',
        subtitle: 'Designs intemporels, artisanat artistique et pureté en laquelle vous pouvez avoir confiance',
        description: 'Découvrez le mélange parfait d\'artisanat traditionnel et de design contemporain avec notre collection exclusive de bagues en or. Chaque pièce est méticuleusement fabriquée à la main par nos maîtres artisans utilisant l\'or 22K et 24K le plus fin, garantissant une qualité inégalée et une beauté intemporelle.',
        features: {
          purity: 'Disponible en pureté 22K et 24K',
          handcrafted: 'Fabriqué à la main par des maîtres artisans',
          custom: 'Tailles personnalisées et gravure disponibles',
          hallmarked: 'Bijoux certifiés BIS'
        },
        cta: {
          shop: 'Acheter maintenant',
          custom: 'Demander une bague personnalisée'
        }
      },
      weddingRings: {
        title: 'Alliances pour votre',
        titleHighlight: 'jour spécial',
        subtitle: 'Symbole d\'amour éternel, conçu avec perfection',
        description: 'Célébrez votre lien éternel avec notre exquise collection d\'alliances. Chaque bague est conçue pour symboliser votre histoire d\'amour unique, avec des designs traditionnels et contemporains qui seront chéris pour les générations.',
        features: {
          matching: 'Ensembles assortis pour lui et elle disponibles',
          gold: 'Options or 18K, 22K et 24K',
          diamonds: 'Sertissages de diamants et pierres précieuses',
          engraving: 'Services de gravure personnalisée',
          warranty: 'Garantie à vie et maintenance'
        }
      },
      engagementRings: {
        title: 'Bagues de fiançailles pour votre',
        titleHighlight: 'demande parfaite',
        subtitle: 'Commencez votre pour toujours avec une bague aussi unique que votre amour',
        description: 'Rendez votre demande inoubliable avec notre magnifique collection de bagues de fiançailles. Des solitaires classiques aux designs inspirés du vintage, chaque bague est conçue pour capturer l\'essence de votre histoire d\'amour et créer un moment qui sera chéri pour toujours.',
        features: {
          certified: 'Diamants et pierres précieuses certifiés',
          styles: 'Styles solitaire, halo et vintage',
          gold: 'Sertissages or 18K et 22K',
          consultation: 'Consultation de design personnalisé',
          gia: 'Diamants certifiés GIA'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Appeler maintenant',
      viewCollection: 'Voir la collection',
      customDesign: 'Design personnalisé',
      freeDelivery: 'Livraison gratuite',
      secureShipping: 'Expédition sécurisée dans toute la France',
      lifetimePolish: 'Polissage à vie',
      freePolishing: 'Service de polissage gratuit',
      easyReturns: 'Retours faciles',
      returnPolicy: 'Politique de retour de 15 jours',
      customization: 'Personnalisation',
      personalizedDesigns: 'Designs personnalisés',
      premiumQuality: 'Qualité premium',
      expertCraftsmanship: 'Artisanat expert',
      perfectFit: 'Ajustement parfait',
      lifetimeService: 'Service à vie',
      rating: 'Évaluation',
      excellent: 'Excellent',
      good: 'Bon',
      average: 'Moyen',
      poor: 'Médiocre',
      worst: 'Très mauvais',
      submitFeedback: 'Soumettre un avis',
      submitting: 'Envoi en cours...'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      products: 'Produtos',
      about: 'Sobre nós',
      services: 'Serviços',
      testimonials: 'Depoimentos',
      contact: 'Contacte-nos',
      rings: 'Anéis',
      necklaces: 'Colares',
      earrings: 'Brincos',
      goldRings: 'Anéis de ouro',
      weddingRings: 'Alianças de casamento',
      engagementRings: 'Anéis de noivado',
      goldChains: 'Correntes de ouro',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Conjuntos de pingentes',
      goldStuds: 'Brincos de ouro',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Joias de ouro e prata artesanais em',
      location: 'Basara',
      subtitle: 'Criando beleza atemporal, um ornamento de cada vez',
      cta: 'Explore nossa coleção'
    },
    about: {
      title: 'Seus artesãos locais de',
      titleHighlight: 'trabalho em metais preciosos',
      description1: 'Localizados na aldeia de Basara, somos um ateliê de joias familiar especializado em peças requintadas de ouro e prata. Com mais de 20 anos de experiência combinada, nossos artesãos misturam técnicas tradicionais com design contemporâneo, garantindo que cada ornamento conte sua história única.',
      description2: 'De conjuntos de noiva elegantes a lembranças do dia a dia, qualidade e confiança são as pedras angulares do nosso negócio. Cada peça é meticulosamente feita à mão com atenção aos detalhes que honra tanto os materiais quanto a tradição artesanal.',
      qualityTitle: 'Materiais de qualidade',
      qualityDesc: 'Ouro e prata premium de origem ética',
      legacyTitle: 'Legado familiar',
      legacyDesc: 'Três gerações de artesãos joalheiros'
    },
    services: {
      title: 'Nossos',
      titleHighlight: 'serviços',
      subtitle: 'Descubra nossa gama de serviços de joalheria premium, criados com precisão e cuidado',
      custom: {
        title: 'Ornamentos personalizados de ouro e prata',
        desc1: 'Colares, pulseiras, pingentes sob medida e mais',
        desc2: 'Ampla gama de opções de quilates e acabamentos',
        desc3: 'Pré-visualizações de design apoiadas por CAD e engaste de gemas'
      },
      repair: {
        title: 'Reparação e restauro',
        desc1: 'Redimensionamento de anéis, substituição de fechos, soldagem',
        desc2: 'Polimento, banho de ródio e re-engaste de pedras',
        desc3: 'Prazo de entrega rápido com garantias de qualidade'
      },
      making: {
        title: 'Fabricação de brincos e anéis',
        desc1: 'Fabricação de precisão de brincos e anéis',
        desc2: 'Filigrana intrincada, trabalho tradicional de templo, estilos modernos',
        desc3: 'Ajuste personalizado e consulta de design'
      }
    },
    expertise: {
      title: 'Nossa requintada',
      titleHighlight: 'coleção',
      subtitle: 'Descubra nossa gama completa de joias artesanais, cada peça contando uma história única de tradição, elegância e beleza atemporal.',
      customTitle: 'Não consegue encontrar o que procura?',
      customDesc: 'Especializamo-nos em design de joias personalizadas. Deixe-nos criar algo único só para si.',
      customCta: 'Contacte-nos para design personalizado',
      knowMore: 'Saber mais'
    },
    testimonials: {
      title: 'O que dizem os nossos',
      titleHighlight: 'clientes',
      subtitle: 'Leia o que os nossos estimados clientes têm a dizer sobre a sua experiência connosco',
      shareTitle: 'Partilhe a sua experiência',
      latestTitle: 'Último depoimento',
      moreTitle: 'Mais avaliações'
    },
    contact: {
      title: 'Entre em',
      titleHighlight: 'contacto',
      subtitle: 'Tem perguntas ou quer agendar uma consulta? Entre em contacto connosco!',
      address: 'Morada',
      phone: 'Telefone',
      email: 'Email',
      hours: 'Horário de funcionamento',
      hoursValue: 'Seg–Sáb: 10h–18h | Dom: Fechado',
      consultationTitle: 'Obtenha uma consulta gratuita',
      consultationDesc: 'Preencha o nosso formulário online ou ligue-nos para marcar uma consulta de design individual.',
      formTitle: 'Envie-nos uma mensagem',
      name: 'Nome completo',
      namePlaceholder: 'O seu nome',
      emailPlaceholder: 'O seu email',
      phonePlaceholder: 'O seu telefone (opcional)',
      message: 'Mensagem',
      messagePlaceholder: 'Diga-nos como podemos ajudá-lo...',
      sending: 'A enviar...',
      send: 'Enviar mensagem'
    },
    footer: {
      description: 'Criando beleza atemporal com precisão e paixão. O seu joalheiro local de confiança desde 2000.',
      quickLinks: 'Links rápidos',
      businessHours: 'Horário de funcionamento',
      monday: 'Segunda - Sexta:',
      saturday: 'Sábado:',
      sunday: 'Domingo:',
      mondayHours: '10h00 - 18h00',
      saturdayHours: '10h00 - 16h00',
      sundayHours: 'Fechado',
      rights: '© 2025 Basar Jewellery. Todos os direitos reservados.',
      privacy: 'Política de privacidade',
      terms: 'Termos de serviço'
    },
    products: {
      goldRings: {
        title: 'Anéis de ouro elegantes para cada',
        titleHighlight: 'ocasião',
        subtitle: 'Designs atemporais, artesanato artístico e pureza em que pode confiar',
        description: 'Experimente a mistura perfeita de artesanato tradicional e design contemporâneo com a nossa coleção exclusiva de anéis de ouro. Cada peça é meticulosamente feita à mão pelos nossos mestres artesãos usando o mais fino ouro 22K e 24K, garantindo qualidade incomparável e beleza atemporal.',
        features: {
          purity: 'Disponível em pureza 22K e 24K',
          handcrafted: 'Feito à mão por mestres artesãos',
          custom: 'Tamanhos personalizados e gravação disponíveis',
          hallmarked: 'Joias certificadas BIS'
        },
        cta: {
          shop: 'Comprar agora',
          custom: 'Solicitar anel personalizado'
        }
      },
      weddingRings: {
        title: 'Alianças de casamento para o seu',
        titleHighlight: 'dia especial',
        subtitle: 'Símbolo de amor eterno, criado com perfeição',
        description: 'Celebre o seu laço eterno com a nossa requintada coleção de alianças de casamento. Cada anel é criado para simbolizar a sua história de amor única, com designs tradicionais e contemporâneos que serão valorizados por gerações.',
        features: {
          matching: 'Conjuntos combinados para ele e ela disponíveis',
          gold: 'Opções de ouro 18K, 22K e 24K',
          diamonds: 'Engastes de diamantes e gemas',
          engraving: 'Serviços de gravação personalizada',
          warranty: 'Garantia vitalícia e manutenção'
        }
      },
      engagementRings: {
        title: 'Anéis de noivado para o seu',
        titleHighlight: 'pedido perfeito',
        subtitle: 'Comece o seu para sempre com um anel tão único quanto o seu amor',
        description: 'Torne o seu pedido inesquecível com a nossa deslumbrante coleção de anéis de noivado. Dos solitários clássicos aos designs inspirados no vintage, cada anel é criado para capturar a essência da sua história de amor e criar um momento que será valorizado para sempre.',
        features: {
          certified: 'Diamantes e gemas certificados',
          styles: 'Estilos solitário, halo e vintage',
          gold: 'Engastes de ouro 18K e 22K',
          consultation: 'Consulta de design personalizado',
          gia: 'Diamantes certificados GIA'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Ligar agora',
      viewCollection: 'Ver coleção',
      customDesign: 'Design personalizado',
      freeDelivery: 'Entrega gratuita',
      secureShipping: 'Envio seguro em todo o país',
      lifetimePolish: 'Polimento vitalício',
      freePolishing: 'Serviço de polimento gratuito',
      easyReturns: 'Devoluções fáceis',
      returnPolicy: 'Política de devolução de 15 dias',
      customization: 'Personalização',
      personalizedDesigns: 'Designs personalizados',
      premiumQuality: 'Qualidade premium',
      expertCraftsmanship: 'Artesanato especializado',
      perfectFit: 'Ajuste perfeito',
      lifetimeService: 'Serviço vitalício',
      rating: 'Avaliação',
      excellent: 'Excelente',
      good: 'Bom',
      average: 'Médio',
      poor: 'Fraco',
      worst: 'Muito mau',
      submitFeedback: 'Enviar feedback',
      submitting: 'A enviar...'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      products: '商品',
      about: '私たちについて',
      services: 'サービス',
      testimonials: 'お客様の声',
      contact: 'お問い合わせ',
      rings: 'リング',
      necklaces: 'ネックレス',
      earrings: 'イヤリング',
      goldRings: 'ゴールドリング',
      weddingRings: '結婚指輪',
      engagementRings: '婚約指輪',
      goldChains: 'ゴールドチェーン',
      mangalsutra: 'マンガルスートラ',
      pendantSets: 'ペンダントセット',
      goldStuds: 'ゴールドスタッド',
      jhumkas: 'ジュムカ',
      chandbali: 'チャンドバリ'
    },
    hero: {
      title: 'バサラの手作りゴールド＆シルバージュエリー',
      location: '',
      subtitle: '一つ一つの装身具で時代を超えた美しさを創造',
      cta: 'コレクションを見る'
    },
    about: {
      title: '地元の',
      titleHighlight: '貴金属工芸職人',
      description1: 'バサラ村に位置する私たちは、精巧なゴールドとシルバーの作品を専門とする家族経営のジュエリーアトリエです。20年以上の経験を持つ職人たちが、伝統的な技法と現代的なデザインを融合させ、あなただけの物語を語る装身具を作り上げます。',
      description2: 'エレガントなブライダルセットから日常の記念品まで、品質と信頼が私たちのビジネスの基盤です。各作品は、素材と職人の伝統の両方を尊重する細部への注意を払って、丁寧に手作りされています。',
      qualityTitle: '高品質素材',
      qualityDesc: '倫理的に調達されたプレミアムゴールドとシルバー',
      legacyTitle: '家族の遺産',
      legacyDesc: '三世代にわたるジュエリー職人'
    },
    services: {
      title: '私たちの',
      titleHighlight: 'サービス',
      subtitle: '精密さと配慮で作られたプレミアムジュエリーサービスの範囲をご覧ください',
      custom: {
        title: 'カスタムゴールド＆シルバー装身具',
        desc1: 'オーダーメイドのネックレス、ブレスレット、ペンダントなど',
        desc2: '幅広いカラットオプションと仕上げ',
        desc3: 'CADサポートのデザインプレビューと宝石セッティング'
      },
      repair: {
        title: '修理・復元',
        desc1: 'リングサイズ変更、留め具交換、はんだ付け',
        desc2: '研磨、ロジウムメッキ、石の再セッティング',
        desc3: '品質保証付きの迅速な納期'
      },
      making: {
        title: 'イヤリング・ハンドリング製作',
        desc1: 'イヤリングとハンドリングの精密製作',
        desc2: '複雑なフィリグリー、伝統的な寺院細工、モダンスタイル',
        desc3: 'パーソナライズされたフィッティングとデザイン相談'
      }
    },
    expertise: {
      title: '私たちの精巧な',
      titleHighlight: 'コレクション',
      subtitle: '手作りジュエリーの完全な範囲をご覧ください。各作品が伝統、エレガンス、時代を超えた美しさのユニークな物語を語ります。',
      customTitle: 'お探しのものが見つかりませんか？',
      customDesc: '私たちはカスタムジュエリーデザインを専門としています。あなただけのユニークなものを作らせてください。',
      customCta: 'カスタムデザインについてお問い合わせ',
      knowMore: '詳細を見る'
    },
    testimonials: {
      title: 'お客様の',
      titleHighlight: 'お声',
      subtitle: '私たちとの体験について、大切なお客様からのお声をお読みください',
      shareTitle: 'あなたの体験をシェア',
      latestTitle: '最新のフィードバック',
      moreTitle: 'その他のレビュー'
    },
    contact: {
      title: 'お気軽に',
      titleHighlight: 'お問い合わせください',
      subtitle: 'ご質問やコンサルテーションのご予約をご希望ですか？お気軽にお問い合わせください！',
      address: '住所',
      phone: '電話',
      email: 'メール',
      hours: '営業時間',
      hoursValue: '月〜土：10時〜18時 | 日：定休日',
      consultationTitle: '無料コンサルテーションを受ける',
      consultationDesc: 'オンラインフォームにご記入いただくか、お電話でマンツーマンデザイン相談をご予約ください。',
      formTitle: 'メッセージをお送りください',
      name: 'お名前',
      namePlaceholder: 'あなたのお名前',
      emailPlaceholder: 'あなたのメールアドレス',
      phonePlaceholder: 'あなたの電話番号（任意）',
      message: 'メッセージ',
      messagePlaceholder: 'どのようにお手伝いできるかお聞かせください...',
      sending: '送信中...',
      send: 'メッセージを送信'
    },
    footer: {
      description: '精密さと情熱で時代を超えた美しさを創造。2000年以来、信頼される地元のジュエラー。',
      quickLinks: 'クイックリンク',
      businessHours: '営業時間',
      monday: '月曜日 - 金曜日：',
      saturday: '土曜日：',
      sunday: '日曜日：',
      mondayHours: '10:00 - 18:00',
      saturdayHours: '10:00 - 16:00',
      sundayHours: '定休日',
      rights: '© 2025 Basar Jewellery. 全著作権所有。',
      privacy: 'プライバシーポリシー',
      terms: 'サービス利用規約'
    },
    products: {
      goldRings: {
        title: 'あらゆる',
        titleHighlight: '機会のためのエレガントなゴールドリング',
        subtitle: '時代を超えたデザイン、職人の技、信頼できる純度',
        description: '私たちの独占的なゴールドリングコレクションで、伝統的な職人技と現代的なデザインの完璧な融合を体験してください。各作品は、最高級の22Kと24Kゴールドを使用して、マスター職人によって丁寧に手作りされ、比類のない品質と時代を超えた美しさを保証します。',
        features: {
          purity: '22K＆24K純度で利用可能',
          handcrafted: 'マスター職人による手作り',
          custom: 'カスタムサイズ＆彫刻利用可能',
          hallmarked: 'BISホールマークジュエリー'
        },
        cta: {
          shop: '今すぐ購入',
          custom: 'カスタムリングをリクエスト'
        }
      },
      weddingRings: {
        title: 'あなたの',
        titleHighlight: '特別な日のための結婚指輪',
        subtitle: '永遠の愛の象徴、完璧に作られた',
        description: '私たちの精巧な結婚指輪コレクションで、あなたの永遠の絆を祝いましょう。各リングは、あなたのユニークなラブストーリーを象徴するように作られ、世代にわたって大切にされる伝統的で現代的なデザインを特徴としています。',
        features: {
          matching: '彼と彼女のマッチングセット利用可能',
          gold: '18K、22K＆24Kゴールドオプション',
          diamonds: 'ダイヤモンド＆ジェムストーンセッティング',
          engraving: 'カスタム彫刻サービス',
          warranty: '生涯保証＆メンテナンス'
        }
      },
      engagementRings: {
        title: 'あなたの',
        titleHighlight: '完璧なプロポーズのための婚約指輪',
        subtitle: 'あなたの愛と同じくらいユニークなリングで永遠を始めましょう',
        description: '私たちの見事な婚約指輪コレクションで、あなたのプロポーズを忘れられないものにしてください。クラシックなソリテアからヴィンテージインスパイアのデザインまで、各リングはあなたのラブストーリーの本質を捉え、永遠に大切にされる瞬間を作るために作られています。',
        features: {
          certified: '認定ダイヤモンド＆ジェムストーン',
          styles: 'ソリテア、ハロー＆ヴィンテージスタイル',
          gold: '18K＆22Kゴールドセッティング',
          consultation: 'カスタムデザインコンサルテーション',
          gia: 'GIA認定ダイヤモンド'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: '今すぐ電話',
      viewCollection: 'コレクションを見る',
      customDesign: 'カスタムデザイン',
      freeDelivery: '送料無料',
      secureShipping: '全国安全配送',
      lifetimePolish: '生涯研磨',
      freePolishing: '無料研磨サービス',
      easyReturns: '簡単返品',
      returnPolicy: '15日間返品ポリシー',
      customization: 'カスタマイゼーション',
      personalizedDesigns: 'パーソナライズデザイン',
      premiumQuality: 'プレミアム品質',
      expertCraftsmanship: 'エキスパート職人技',
      perfectFit: '完璧なフィット',
      lifetimeService: '生涯サービス',
      rating: '評価',
      excellent: '優秀',
      good: '良い',
      average: '平均',
      poor: '悪い',
      worst: '最悪',
      submitFeedback: 'フィードバックを送信',
      submitting: '送信中...'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Acerca de',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contáctanos',
      rings: 'Anillos',
      necklaces: 'Collares',
      earrings: 'Pendientes',
      goldRings: 'Anillos de oro',
      weddingRings: 'Anillos de boda',
      engagementRings: 'Anillos de compromiso',
      goldChains: 'Cadenas de oro',
      mangalsutra: 'Mangalsutra',
      pendantSets: 'Conjuntos de colgantes',
      goldStuds: 'Pendientes de oro',
      jhumkas: 'Jhumkas',
      chandbali: 'Chandbali'
    },
    hero: {
      title: 'Joyería de oro y plata artesanal en',
      location: 'Basara',
      subtitle: 'Creando belleza atemporal, un ornamento a la vez',
      cta: 'Explora nuestra colección'
    },
    about: {
      title: 'Sus artesanos locales de',
      titleHighlight: 'trabajo en metales preciosos',
      description1: 'Ubicados en la aldea de Basara, somos un taller de joyería familiar especializado en piezas exquisitas de oro y plata. Con más de 20 años de experiencia combinada, nuestros artesanos mezclan técnicas tradicionales con diseño contemporáneo, asegurando que cada ornamento cuente su historia única.',
      description2: 'Desde elegantes conjuntos nupciales hasta recuerdos cotidianos, la calidad y la confianza son las piedras angulares de nuestro negocio. Cada pieza está meticulosamente hecha a mano con atención al detalle que honra tanto los materiales como la tradición artesanal.',
      qualityTitle: 'Materiales de calidad',
      qualityDesc: 'Oro y plata premium de origen ético',
      legacyTitle: 'Legado familiar',
      legacyDesc: 'Tres generaciones de artesanos joyeros'
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'servicios',
      subtitle: 'Descubre nuestra gama de servicios de joyería premium, elaborados con precisión y cuidado',
      custom: {
        title: 'Ornamentos personalizados de oro y plata',
        desc1: 'Collares, pulseras, colgantes a medida y más',
        desc2: 'Amplia gama de opciones de quilates y acabados',
        desc3: 'Vistas previas de diseño respaldadas por CAD y engaste de gemas'
      },
      repair: {
        title: 'Reparación y restauración',
        desc1: 'Cambio de tamaño de anillos, reemplazo de cierres, soldadura',
        desc2: 'Pulido, baño de rodio y re-engaste de piedras',
        desc3: 'Tiempo de entrega rápido con garantías de calidad'
      },
      making: {
        title: 'Fabricación de pendientes y anillos',
        desc1: 'Fabricación de precisión de pendientes y anillos',
        desc2: 'Filigrana intrincada, trabajo tradicional de templo, estilos modernos',
        desc3: 'Ajuste personalizado y consulta de diseño'
      }
    },
    expertise: {
      title: 'Nuestra exquisita',
      titleHighlight: 'colección',
      subtitle: 'Descubre nuestra gama completa de joyas hechas a mano, cada pieza cuenta una historia única de tradición, elegancia y belleza atemporal.',
      customTitle: '¿No encuentras lo que buscas?',
      customDesc: 'Nos especializamos en diseño de joyas personalizadas. Déjanos crear algo único solo para ti.',
      customCta: 'Contáctanos para diseño personalizado',
      knowMore: 'Saber más'
    },
    testimonials: {
      title: 'Lo que dicen nuestros',
      titleHighlight: 'clientes',
      subtitle: 'Lee lo que nuestros estimados clientes tienen que decir sobre su experiencia con nosotros',
      shareTitle: 'Comparte tu experiencia',
      latestTitle: 'Último testimonio',
      moreTitle: 'Más reseñas'
    },
    contact: {
      title: 'Ponte en',
      titleHighlight: 'contacto',
      subtitle: '¿Tienes preguntas o quieres programar una consulta? ¡Contáctanos!',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Email',
      hours: 'Horario comercial',
      hoursValue: 'Lun–Sáb: 10:00–18:00 | Dom: Cerrado',
      consultationTitle: 'Obtén una consulta gratuita',
      consultationDesc: 'Completa nuestro formulario en línea o llámanos para reservar una cita de diseño uno a uno.',
      formTitle: 'Envíanos un mensaje',
      name: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      phonePlaceholder: 'Tu teléfono (opcional)',
      message: 'Mensaje',
      messagePlaceholder: 'Dinos cómo podemos ayudarte...',
      sending: 'Enviando...',
      send: 'Enviar mensaje'
    },
    footer: {
      description: 'Creando belleza atemporal con precisión y pasión. Tu joyero local de confianza desde 2000.',
      quickLinks: 'Enlaces rápidos',
      businessHours: 'Horario comercial',
      monday: 'Lunes - Viernes:',
      saturday: 'Sábado:',
      sunday: 'Domingo:',
      mondayHours: '10:00 - 18:00',
      saturdayHours: '10:00 - 16:00',
      sundayHours: 'Cerrado',
      rights: '© 2025 Basar Jewellery. Todos los derechos reservados.',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio'
    },
    products: {
      goldRings: {
        title: 'Anillos de oro elegantes para cada',
        titleHighlight: 'ocasión',
        subtitle: 'Diseños atemporales, artesanía artística y pureza en la que puedes confiar',
        description: 'Experimenta la mezcla perfecta de artesanía tradicional y diseño contemporáneo con nuestra colección exclusiva de anillos de oro. Cada pieza está meticulosamente hecha a mano por nuestros maestros artesanos usando el más fino oro 22K y 24K, garantizando calidad incomparable y belleza atemporal.',
        features: {
          purity: 'Disponible en pureza 22K y 24K',
          handcrafted: 'Hecho a mano por maestros artesanos',
          custom: 'Tamaños personalizados y grabado disponibles',
          hallmarked: 'Joyería certificada BIS'
        },
        cta: {
          shop: 'Comprar ahora',
          custom: 'Solicitar anillo personalizado'
        }
      },
      weddingRings: {
        title: 'Anillos de boda para tu',
        titleHighlight: 'día especial',
        subtitle: 'Símbolo de amor eterno, creado con perfección',
        description: 'Celebra tu vínculo eterno con nuestra exquisita colección de anillos de boda. Cada anillo está creado para simbolizar tu historia de amor única, con diseños tradicionales y contemporáneos que serán atesorados por generaciones.',
        features: {
          matching: 'Conjuntos a juego para él y ella disponibles',
          gold: 'Opciones de oro 18K, 22K y 24K',
          diamonds: 'Engastes de diamantes y gemas',
          engraving: 'Servicios de grabado personalizado',
          warranty: 'Garantía de por vida y mantenimiento'
        }
      },
      engagementRings: {
        title: 'Anillos de compromiso para tu',
        titleHighlight: 'propuesta perfecta',
        subtitle: 'Comienza tu para siempre con un anillo tan único como tu amor',
        description: 'Haz tu propuesta inolvidable con nuestra impresionante colección de anillos de compromiso. Desde solitarios clásicos hasta diseños inspirados en vintage, cada anillo está creado para capturar la esencia de tu historia de amor y crear un momento que será atesorado para siempre.',
        features: {
          certified: 'Diamantes y gemas certificados',
          styles: 'Estilos solitario, halo y vintage',
          gold: 'Engastes de oro 18K y 22K',
          consultation: 'Consulta de diseño personalizado',
          gia: 'Diamantes certificados GIA'
        }
      }
    },
    common: {
      whatsapp: 'WhatsApp',
      callNow: 'Llamar ahora',
      viewCollection: 'Ver colección',
      customDesign: 'Diseño personalizado',
      freeDelivery: 'Entrega gratuita',
      secureShipping: 'Envío seguro a nivel nacional',
      lifetimePolish: 'Pulido de por vida',
      freePolishing: 'Servicio de pulido gratuito',
      easyReturns: 'Devoluciones fáciles',
      returnPolicy: 'Política de devolución de 15 días',
      customization: 'Personalización',
      personalizedDesigns: 'Diseños personalizados',
      premiumQuality: 'Calidad premium',
      expertCraftsmanship: 'Artesanía experta',
      perfectFit: 'Ajuste perfecto',
      lifetimeService: 'Servicio de por vida',
      rating: 'Calificación',
      excellent: 'Excelente',
      good: 'Bueno',
      average: 'Promedio',
      poor: 'Malo',
      worst: 'Pésimo',
      submitFeedback: 'Enviar comentario',
      submitting: 'Enviando...'
    }
  }
});