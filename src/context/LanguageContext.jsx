import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      requirements: 'Requirements',
      campus: 'Our Campus',
      gallery: 'Gallery',
      contact: 'Contact Us',
      donateNow: 'Donate Now',
      quickNav: 'Quick Navigation Buttons',
      directTap: 'Direct Tap'
    },
    // Common CTAs & Labels
    common: {
      donateNow: 'Donate Now',
      donateCampus: 'Donate Now for Our Campus',
      exploreCampus: 'Explore Our Campus',
      ourServices: 'Our Services & Care',
      sponsorItem: 'Sponsor This Item',
      sponsorDonate: 'Sponsor / Donate',
      taxBenefit: '80G Tax Benefit',
      taxExemption: '80G Tax Exemption Available',
      searchingForDonors: 'Searching for Donors',
      livePoll: 'Live Priority Poll: What should we build next?',
      totalVotes: 'Total Votes Cast',
      voted: 'Voted',
      voteThis: 'Vote This',
      voteRecorded: 'Vote Recorded',
      thankYouVote: 'Thank you! Your vote has been recorded. We are actively searching for donors to sponsor this requirement.',
      clickToVote: 'Click any option above to cast your vote',
      votesCast: 'votes cast',
      viewAllReq: 'Explore all 16 campus requirements',
      csrPartners: 'Searching for Corporate CSR Partners & Individual Donors',
      learnMore: 'Learn More',
      inquire: 'Inquire',
      viewDetails: 'View Service Details',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      close: 'Close'
    },
    // Hero Slides
    hero: {
      badge: 'Root to Reach • Permanent Campus Sanctuary',
      slide1: {
        tag: 'Permanent Campus Project — Jinnaram, Telangana',
        title1: 'Driven by Purpose,',
        title2: 'Powered by People',
        subtitle: 'We are a non-profit organization dedicated to empowering special children with autism through education, therapy, healthcare, and our upcoming 24/7 permanent residential campus in Jinnaram.',
        dreamCampus: 'Our Dream Campus',
        dreamCampusDesc: 'Sensory courtyards & therapeutic classrooms',
        livesTransformed: 'Lives Transformed',
        livesTransformedDesc: 'Education, therapy & autism care',
        campusProgress: 'Our Campus Progress',
        built: 'Built',
        residentialHome: 'Residential Care Home',
        residentialHomeDesc: 'Safe suites with round-the-clock support'
      },
      slide2: {
        tag: 'Sensory & Developmental Therapy Suites',
        title1: 'Discovering Potential,',
        title2: 'Nurturing Abilities',
        subtitle: 'Every child on the spectrum carries unique brilliance. Through personalized speech therapy, sensory integration, and creative arts, we help them unlock true independence.',
        musicArt: 'Music & Art Therapy',
        musicArtDesc: 'Stimulating expression and emotional growth',
        milestoneSuccess: 'Milestone Success',
        milestoneDesc: 'Child-specific developmental goals',
        careTeam: 'Clinical Care Team',
        cognitiveTraining: 'Cognitive Training',
        cognitiveDesc: 'Transdisciplinary child-centered care'
      },
      slide3: {
        tag: 'Loving Caregiver Community & Home Setting',
        title1: 'A Sanctuary for Hope,',
        title2: 'Care & Independence',
        subtitle: 'Creating an inclusive home where every child is respected, nurtured, and provided lifelong residential care, medical supervision, and compassionate companionship.',
        caregivers: 'Dedicated Caregivers',
        caregiversDesc: 'Compassionate transdisciplinary staff',
        campusSanctuary: 'Campus Sanctuary',
        campusSanctuaryDesc: 'World-class residential boarding',
        autismDesign: 'Autism-Specific Design',
        lifelongCare: 'Lifelong Companionship',
        lifelongCareDesc: 'Dignified residential living for special youth'
      },
      poll: {
        campusBeds: '100 Campus Beds',
        campusBedsDesc: 'Permanent Campus Residential Home (100 Beds)',
        campusBedsDonors: 'Needs 32 Donors',
        fansLights: 'Fans & Lights (70)',
        fansLightsDesc: '35 Ceiling Fans & 35 LED Lights for Classrooms',
        fansLightsDonors: 'Needs 14 Donors',
        sensoryKits: 'Sensory Kits (500)',
        sensoryKitsDesc: '500 Special Stationery Sets & Sensory Therapy Kits',
        sensoryKitsDonors: 'Needs 45 Donors',
        waterPlants: 'RO Water Plants (2)',
        waterPlantsDesc: '2 Commercial RO Drinking Water Purification Plants',
        waterPlantsDonors: 'Needs 2 Donors'
      }
    },
    // Three Pillars Bar
    threePillars: {
      p1Title: 'Mentally Challenged & Autism Care',
      p1Subtitle: 'Nurturing children with intellectual & developmental needs.',
      p2Title: 'ADL Activities (Daily Living)',
      p2Subtitle: 'Brushing, eating, dressing & life independence.',
      p3Title: 'CSR Certified & 80G Tax Exemption',
      p3Subtitle: 'CSR donations accepted; claim tax rebate from government.'
    },
    // Campus Construction Progress Card
    campusProgress: {
      badge: 'Permanent Campus Project',
      title: 'Sanctuary for Mentally Challenged & Special Children',
      location: 'Jinnaram, Sangareddy Dist, Telangana',
      meterTitle: 'Campus Construction & Funds Raised',
      raisedAmount: '₹85 Lakhs Raised (68%)',
      campaignGoal: 'Campaign Goal: ₹1.25 Crore',
      completionTarget: 'Completion Target: 31 May 2027',
      donateBtn: 'Donate Now for Our Campus',
      impact1Badge: 'Mentally Challenged',
      impact1Title: 'Specialized Child Care',
      impact1Desc: 'Loving care, special education & individualized therapies for mentally challenged, autistic & neurodivergent children (Ages 3–18).',
      impact2Badge: 'ADL Activities',
      impact2Title: 'Daily Living Independence',
      impact2Desc: 'Structured daily routines in personal hygiene, brushing, bathing, dining habits, dressing, and lifelong practical independence.',
      impact3Badge: 'CSR Certified',
      impact3Title: 'CSR Donations Eligible',
      impact3Desc: 'Companies & corporate institutions can contribute their mandatory CSR funds directly for school and campus development.',
      impact4Badge: 'Government Tax Claim',
      impact4Title: 'Claim Money in Tax Rebate',
      impact4Desc: 'All donation money can be claimed for 50% tax exemption from the government under Section 80G when filing income tax returns.'
    },
    // Discover Abilities Section
    discoverAbilities: {
      heading: 'Discover Abilities. Nurture Talents.',
      card1Title: 'Speech & Communication',
      card1Desc: 'Build confidence, express needs and connect with the world.',
      card2Title: 'Special Education',
      card2Desc: 'Individualized learning plans for meaningful academic and life progress.',
      card3Title: 'Occupational & Behaviour Support',
      card3Desc: 'Develop focus, reduce challenges, build positive behaviours.',
      card4Title: 'Daily Living Skills',
      card4Desc: 'Build independence for a more confident future.'
    },
    // Dream Campus Section
    dreamCampus: {
      title: 'Our Dream Campus',
      desc: "We are building a safe, inclusive and nurturing campus with modern learning spaces, therapy rooms, activity areas and residential facilities — designed to support every child's unique journey towards independence.",
      feat1: 'Learning Spaces',
      feat2: 'Therapy Rooms',
      feat3: 'Activity Areas',
      feat4: 'Residential Facilities',
      donateBtn: 'Donate Now for Our Campus'
    },
    // About Section
    aboutSection: {
      badge: 'About Our Home & School',
      title: 'A Welcoming Sanctuary for Learning, Therapy & Life Skills',
      p1: 'Little Plant Autism Residential Home was created to offer families a dependable, transparent, and loving environment for children and youth on the autism spectrum. We combine round-the-clock residential warmth with certified clinical therapies and specialized education under one harmonious roof.',
      p2: 'Rather than a rigid institutional setting, our campus feels like a joyful, peaceful home. Here, children develop the vital tools to communicate, practice everyday self-care, engage in musical and physical play, and build cherished social bonds.',
      whyTitle: 'Why "Little Plant"?',
      whyDesc: 'We believe every child is like a tender little plant. Each sprout requires its own sunlight, nourishing soil, and patient tending to flourish. With individualized care and gentle guidance, every child blossoms at their own natural pace.',
      whyFoot: "Respecting every child's neurodiversity and pace",
      statPrograms: 'Integrated Programs',
      statCare: 'Compassionate Care',
      pillarsTitle: 'Key Pillars of Our Comprehensive Support:',
      viewAllPrograms: 'Explore All 8 Specialized Programs',
      getInTouch: 'Get in Touch'
    },
    // CTA Section
    ctaSection: {
      csrBadge: 'CSR Certified (Corporate Donations Accepted)',
      taxBadge: 'Claim Money in 80G Government Tax Exemption',
      title: 'Help Us Empower Mentally Challenged & Special Children',
      desc: 'Companies can contribute CSR funds directly for campus development. Individual donors receive official receipts to claim tax deduction from the government.',
      donateBtn: 'Donate to the Campus'
    },
    // Services Page
    servicesPage: {
      badge: 'Individualized Care & Therapy',
      title: 'Our Services',
      desc: "Detailed information on each of our eight specialized educational, therapeutic, daily living, and residential programs designed to support your child's confidence and progress.",
      filterAll: 'All',
      filterTherapy: 'Therapy',
      filterEducation: 'Education & Life Skills',
      filterResidential: 'Residential & Activities',
      searchPlaceholder: 'Search services...',
      noResults: 'No services matched your search term.',
      resetFilters: 'Reset filters',
      ageGroupLabel: 'Age Group',
      formatLabel: 'Format',
      keyBenefitsLabel: 'Key Developmental Outcomes & Focus Areas',
      inquireService: 'Inquire About This Program',
      callDirectly: 'Call Directly'
    },
    // Categories Page
    categoriesPage: {
      badge: 'Comprehensive Care Spectrum',
      title: 'Our Categories',
      desc: "Discover our eight specialized developmental, therapeutic, educational, and residential categories designed to support every dimension of your child's well-being.",
      needDetails: 'Need more in-depth curriculum and therapy details?',
      needDetailsDesc: 'Explore our full Services page featuring session formats, key benefits, and daily structure for every program.',
      visitServices: 'Visit Detailed Services Page'
    },
    // About Page
    aboutPage: {
      badge: 'Little Plant Autism Educational Academy',
      title: 'About Our Academy & Residential Home',
      desc: 'We are dedicated to discovering abilities, nurturing hidden talents, and providing 24/7 compassionate residential care for special children and youth.',
      meta1: 'Specialized Transdisciplinary Team',
      meta2: 'Inclusive 24/7 Home Setting',
      meta3: 'Child-Centered Potential'
    },
    // Campus Page
    campusPage: {
      badge: 'Permanent Campus Project',
      title: 'Our Dream Campus — Jinnaram',
      desc: 'Building a safe, world-class residential sanctuary with personalized learning spaces, therapy suites, and life-skills environments.',
      meta1: 'Jinnaram, Sangareddy Dist, Telangana',
      meta2: 'Completion Target: 31 May 2027',
      meta3: 'Residential Academy & Care',
      facilitiesTitle: 'Campus Facilities Designed for Neurodivergent Needs',
      f1Title: 'Sensory-Calming Architecture',
      f1Desc: 'Designed with gentle natural lighting, acoustic dampening, and safe soft-cornered rooms.',
      f2Title: 'Outdoor Sensory Courtyard',
      f2Desc: 'Expansive green walkways, touch gardens, and outdoor activity spaces for peaceful recreation.',
      f3Title: '24/7 Residential Care Home',
      f3Desc: 'Warm, supportive boarding suites supervised round-the-clock by trained caregivers.',
      f4Title: 'Integrated Clinical Therapy Suites',
      f4Desc: 'Equipped with AAC tools, swing frames, sensory mats, and speech articulation stations.'
    },
    // Gallery Page & Section
    gallery: {
      badge: 'Campus Visual Tour',
      title: 'Our Campus & Life Gallery',
      desc: 'Take a visual tour through our permanent Jinnaram campus development, sensory gardens, therapy rooms, and happy residential living.',
      meta1: 'Jinnaram Permanent Campus',
      meta2: 'Sensory Therapy Suites',
      meta3: 'Interactive Full Lightbox',
      filterAll: 'All Photos',
      filterCampus: 'Campus Construction',
      filterTherapy: 'Therapy & Classrooms',
      filterActivities: 'Activities & Sports',
      filterResidential: 'Residential Living',
      filterCommunity: 'Community & Events'
    },
    // Contact Page
    contactPage: {
      badge: 'Admissions & Contact Desk',
      title: 'Contact Us & Campus Enquiry',
      desc: 'We are here to support parents, guardians, doctors, donors, and CSR representatives. Reach out to schedule a visit or discuss admissions.',
      formTitle: 'Send Us a Direct Message',
      formSubtitle: 'Our admissions coordinators and clinical leads respond within 24 hours.',
      fullName: 'Full Name *',
      phone: 'Phone Number *',
      email: 'Email Address *',
      purpose: 'Purpose of Contact',
      childAge: "Child's Age (If Applicable)",
      message: 'Your Message / Inquiry *',
      submitBtn: 'Send Message / Inquiry',
      thankYou: 'Thank You for Reaching Out!',
      thankYouDesc: 'Your inquiry has been received. Our admissions and campus team will contact you shortly via phone and email.',
      submitAnother: 'Submit Another Inquiry',
      campusAddress: 'Campus Address',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      workingHours: 'Working Hours',
      hoursDesc: 'Monday – Saturday: 9:00 AM – 6:00 PM (24/7 Residential Support)'
    },
    // Requirements Section
    reqSection: {
      tag: 'Direct Giving & CSR Sponsorship Opportunities',
      title: 'Campus Material & Infrastructure Requirements',
      subtitle: 'Help us furnish and equip our permanent residential home & school in Jinnaram, Telangana. Individuals, donors, and CSR partners can sponsor specific items or contribute in-kind.',
      essentialCategories: '16 Essential Categories',
      campusReady: 'Jinnaram Campus Ready',
      viewPoster: 'View Full Illustrated Poster',
      filterAll: 'All Requirements (16)',
      filterTherapy: 'Therapy & Special Education',
      filterFurniture: 'Furniture & Living',
      filterInfra: 'Infrastructure & Utilities',
      sponsorItem: 'Sponsor This Item',
      items: {
        1: { name: 'Lights', desc: 'Energy-efficient LED ceiling & tube lights for classrooms, sensory rooms, and hostel dorms.' },
        2: { name: 'Fans', desc: 'Ceiling fans ensuring cool, well-ventilated airflow across bedrooms and therapy suites.' },
        3: { name: 'Kitchen Items', desc: 'Heavy-duty commercial cookware, pressure cookers, stainless steel dining sets, and food containers.' },
        4: { name: 'School Material (All) (Stationary)', desc: 'Notebooks, color pencils, tactile craft sets, safety scissors, drawing pads, and student stationery.' },
        5: { name: 'Water Filters (Big)', desc: 'High-capacity multi-stage RO water purification units for pure, mineral-balanced campus drinking water.' },
        6: { name: 'Chairs & Tables', desc: 'Ergonomic, rounded child-safe study desks and colorful chairs for adaptive classrooms.' },
        7: { name: 'CC Cameras', desc: 'HD night-vision security cameras and central monitoring system for 24/7 child safety.' },
        8: { name: 'Computers', desc: 'Desktop PCs and digital monitors for cognitive learning software, therapist reports, and IEP tracking.' },
        9: { name: 'Bedsheets', desc: 'Hypoallergenic, soft cotton bedsheets and cozy bedding sets for residential hostel suites.' },
        10: { name: 'Beds', desc: 'Sturdy single wooden beds with supportive orthopedic mattresses for 24/7 residential care.' },
        11: { name: 'Cots', desc: 'Foldable rest cots for afternoon sensory relaxation, daycare rest periods, and sick-bay care.' },
        12: { name: 'Speech Therapy Material', desc: 'Articulation cards, oral motor tools, mirrors, vocabulary flashcards, and AAC communication aids.' },
        13: { name: 'Occupational Therapy Material', desc: 'Therapy gym balls, tactile stepping stones, balance rings, tactile cones, and vestibular tools.' },
        14: { name: 'Special Education Material', desc: 'Wooden alphabet ABC 123 tracing boards, shape-sorters, tactile puzzles, and cognitive toys.' },
        15: { name: 'Behavioural Therapy Material', desc: 'Emotion facial expression cards, reward star boards, visual schedule charts, and calming sensory tools.' },
        16: { name: 'Floor Mats', desc: 'High-density interlocking EVA foam puzzle mats providing safe, cushioned sensory play flooring.' }
      }
    },
    // Footer
    footer: {
      aboutTitle: 'About Little Plant',
      aboutDesc: 'A registered non-profit organization dedicated to empowering special children with autism, developmental delays, and intellectual disabilities through lifelong residential care, clinical therapies, and education.',
      quickLinks: 'Quick Links',
      ourCampus: 'Our Campus',
      campusDesc: '4-Acre Permanent Campus Sanctuary at Jinnaram, Sangareddy District, Telangana.',
      contactInfo: 'Contact Information',
      taxExemptionTitle: 'Tax Benefits Under Section 80G',
      taxExemptionDesc: 'All donations to Little Plant are 50% tax exempt under Section 80G of the Income Tax Act. Official 80G receipt and certificate provided instantly.',
      allRights: 'All rights reserved. Dedicated to special children with love & dignity.'
    }
  },

  te: {
    // Navigation (తెలుగు)
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      requirements: 'అవసరాలు',
      campus: 'మా క్యాంపస్',
      gallery: 'గ్యాలరీ',
      contact: 'సంప్రదించండి',
      donateNow: 'విరాళం ఇవ్వండి',
      quickNav: 'త్వరిత నావిగేషన్ బటన్లు',
      directTap: 'నేరుగా వెళ్ళండి'
    },
    // Common CTAs & Labels
    common: {
      donateNow: 'విరాళం ఇవ్వండి',
      donateCampus: 'మా క్యాంపస్ కోసం విరాళం ఇవ్వండి',
      exploreCampus: 'మా క్యాంపస్ చూడండి',
      ourServices: 'మా సేవలు & సంరక్షణ',
      sponsorItem: 'ఈ సామగ్రిని స్పాన్సర్ చేయండి',
      sponsorDonate: 'స్పాన్సర్ / విరాళం',
      taxBenefit: '80G పన్ను ప్రయోజనం',
      taxExemption: '80G పన్ను మినహాయింపు లభించును',
      searchingForDonors: 'దాతల కోసం అన్వేషణ',
      livePoll: 'లైవ్ ప్రాధాన్యతా పోల్: మేము తదుపరి ఏమి నిర్మించాలి?',
      totalVotes: 'మొత్తం పోలైన ఓట్లు',
      voted: 'ఓటు వేశారు',
      voteThis: 'ఓటు వేయండి',
      voteRecorded: 'ఓటు నమోదైంది',
      thankYouVote: 'ధన్యవాదాలు! మీ ఓటు నమోదైంది. ఈ అవసరాన్ని పూర్తి చేయడానికి మేము దాతల కోసం చురుగ్గా అన్వేషిస్తున్నాము.',
      clickToVote: 'మీ ఓటు వేయడానికి పై ఆప్షన్‌పై క్లిక్ చేయండి',
      votesCast: 'ఓట్లు నమోదయ్యాయి',
      viewAllReq: 'మొత్తం 16 క్యాంపస్ అవసరాలను చూడండి',
      csrPartners: 'కార్పొరేట్ CSR భాగస్వాములు & వ్యక్తిగత దాతల కోసం అన్వేషణ',
      learnMore: 'మరింత తెలుసుకోండి',
      inquire: 'సంప్రదించండి',
      viewDetails: 'సేవ వివరాలు చూడండి',
      submit: 'వివరాలు సమర్పించండి',
      submitting: 'సమర్పిస్తున్నాము...',
      phone: 'ఫోన్ నంబర్',
      email: 'ఇమెయిల్',
      location: 'చిరునామా',
      close: 'మూసివేయి'
    },
    // Hero Slides
    hero: {
      badge: 'మూలాల నుండి ఉన్నత శిఖరాల వరకు • శాశ్వత క్యాంపస్ అభయారణ్యం',
      slide1: {
        tag: 'శాశ్వత క్యాంపస్ ప్రాజెక్ట్ — జిన్నారం, తెలంగాణ',
        title1: 'లక్ష్యంతో నడిచే ప్రయాణం,',
        title2: 'ప్రజల ఆదరణతో సాధ్యం',
        subtitle: 'ఆటిజం ఉన్న ప్రత్యేక పిల్లలకు నాణ్యమైన విద్య, చికిత్స, ఆరోగ్యం మరియు జిన్నారంలో మా 24/7 శాశ్వత నివాస క్యాంపస్ ద్వారా స్వావలంబన కల్పించడానికి అంకితమైన సేవా సంస్థ.',
        dreamCampus: 'మా కలల క్యాంపస్',
        dreamCampusDesc: 'సెన్సరీ ప్రాంగణాలు & ప్రత్యేక చికిత్సా తరగతి గదులు',
        livesTransformed: 'మారిన జీవితాలు',
        livesTransformedDesc: 'విద్య, థెరపీ & ఆటిజం సంరక్షణ',
        campusProgress: 'మా క్యాంపస్ పురోగతి',
        built: 'నిర్మాణం పూర్తి',
        residentialHome: 'నివాస సంరక్షణ గృహం',
        residentialHomeDesc: '24/7 సంరక్షణతో కూడిన సురక్షిత గదులు'
      },
      slide2: {
        tag: 'సెన్సరీ & అభివృద్ధి థెరపీ కేంద్రాలు',
        title1: 'సామర్థ్యాల గుర్తింపు,',
        title2: 'నైపుణ్యాల పెంపొందింపు',
        subtitle: 'ఆటిజం స్పెక్ట్రమ్‌లోని ప్రతి బిడ్డలోనూ ఒక ప్రత్యేక ప్రతిభ దాగి ఉంటుంది. వ్యక్తిగత స్పీచ్ థెరపీ, సెన్సరీ ఇంటిగ్రేషన్ మరియు సృజనాత్మక కళల ద్వారా వారిని సంపూర్ణ స్వతంత్రులుగా తీర్చిదిద్దుతున్నాము.',
        musicArt: 'సంగీతం & కళా థెరపీ',
        musicArtDesc: 'భావవ్యక్తీకరణ మరియు భావోద్వేగ ఎదుగుదలకు తోడ్పాటు',
        milestoneSuccess: 'విజయవంతమైన ఎదుగుదల',
        milestoneDesc: 'పిల్లల వ్యక్తిగత అభివృద్ధి లక్ష్యాలు',
        careTeam: 'క్లినికల్ కేర్ బృందం',
        cognitiveTraining: 'కాగ్నిటివ్ ట్రైనింగ్',
        cognitiveDesc: 'శిశు-కేంద్రీకృత సమగ్ర థెరపీ సంరక్షణ'
      },
      slide3: {
        tag: 'ప్రేమపూర్వక సంరక్షక బృందం & ఆత్మీయ గృహ వాతావరణం',
        title1: 'ఆశ, సంరక్షణ మరియు',
        title2: 'స్వావలంబనకు అభయారణ్యం',
        subtitle: 'ప్రతి ప్రత్యేక బిడ్డను గౌరవిస్తూ, ఆదరిస్తూ, జీవితకాల నివాస సంరక్షణ, వైద్య పర్యవేక్షణ మరియు ఆత్మీయ సాంగత్యాన్ని అందించే ఒక విశాలమైన కుటుంబం.',
        caregivers: 'అంకితభావం గల సంరక్షకులు',
        caregiversDesc: 'కారుణ్యంతో కూడిన నిపుణులైన సిబ్బంది',
        campusSanctuary: 'క్యాంపస్ అభయారణ్యం',
        campusSanctuaryDesc: 'ప్రపంచ స్థాయి నివాస బోర్డింగ్ సదుపాయం',
        autismDesign: 'ఆటిజం-అనుకూల నిర్మాణం',
        lifelongCare: 'జీవితకాల తోడు',
        lifelongCareDesc: 'ప్రత్యేక యువతకు గౌరవప్రదమైన నివాస జీవితం'
      },
      poll: {
        campusBeds: '100 క్యాంపస్ బెడ్లు',
        campusBedsDesc: 'శాశ్వత క్యాంపస్ నివాస గృహం (100 బెడ్లు)',
        campusBedsDonors: '32 దాతలు అవసరం',
        fansLights: 'ఫ్యాన్లు & లైట్లు (70)',
        fansLightsDesc: 'తరగతి గదుల కోసం 35 సీలింగ్ ఫ్యాన్లు & 35 LED లైట్లు',
        fansLightsDonors: '14 దాతలు అవసరం',
        sensoryKits: 'సెన్సరీ కిట్లు (500)',
        sensoryKitsDesc: '500 ప్రత్యేక స్టేషనరీ సెట్లు & సెన్సరీ థెరపీ కిట్లు',
        sensoryKitsDonors: '45 దాతలు అవసరం',
        waterPlants: 'RO వాటర్ ప్లాంట్లు (2)',
        waterPlantsDesc: '2 కమర్షియల్ RO స్వచ్ఛమైన త్రాగునీటి ప్లాంట్లు',
        waterPlantsDonors: '2 దాతలు అవసరం'
      }
    },
    // Three Pillars Bar (తెలుగు)
    threePillars: {
      p1Title: 'మానసిక సవాళ్లు & ఆటిజం సంరక్షణ',
      p1Subtitle: 'మేధో మరియు ఎదుగుదల అవసరాలు గల పిల్లల సమగ్ర ఆలంబన.',
      p2Title: 'ADL కార్యకలాపాలు (దైనందిన జీవనం)',
      p2Subtitle: 'బ్రషింగ్, భోజనం, దుస్తులు మరియు జీవిత స్వావలంబన.',
      p3Title: 'CSR సర్టిఫైడ్ & 80G పన్ను మినహాయింపు',
      p3Subtitle: 'కార్పొరేట్ CSR విరాళాలు అర్హం; ప్రభుత్వ పన్ను మినహాయింపు పొందండి.'
    },
    // Campus Construction Progress Card (తెలుగు)
    campusProgress: {
      badge: 'శాశ్వత క్యాంపస్ ప్రాజెక్ట్',
      title: 'ప్రత్యేక పిల్లల కోసం శాశ్వత అభయారణ్యం',
      location: 'జిన్నారం, సంగారెడ్డి జిల్లా, తెలంగాణ',
      meterTitle: 'క్యాంపస్ నిర్మాణం & సేకరించిన నిధులు',
      raisedAmount: '₹85 లక్షలు సేకరించబడ్డాయి (68%)',
      campaignGoal: 'లక్ష్యం: ₹1.25 కోట్లు',
      completionTarget: 'పూర్తయ్యే గడువు: 31 మే 2027',
      donateBtn: 'మా క్యాంపస్ కోసం విరాళం ఇవ్వండి',
      impact1Badge: 'మానసిక సవాళ్లు',
      impact1Title: 'ప్రత్యేక శిశు సంరక్షణ',
      impact1Desc: 'ఆటిజం, ఎదుగుదల లోపాలు ఉన్న పిల్లల కోసం ప్రేమపూర్వక సంరక్షణ, ప్రత్యేక విద్య మరియు వ్యక్తిగత థెరపీలు (3–18 సం॥).',
      impact2Badge: 'ADL కార్యకలాపాలు',
      impact2Title: 'దైనందిన జీవన స్వావలంబన',
      impact2Desc: 'వ్యక్తిగత పరిశుభ్రత, బ్రషింగ్, స్నానం, భోజనం, దుస్తులు ధరించడంలో రోజువారీ క్రమశిక్షణతో కూడిన శిక్షణ.',
      impact3Badge: 'CSR సర్టిఫైడ్',
      impact3Title: 'CSR విరాళాలు ఇవ్వవచ్చు',
      impact3Desc: 'కార్పొరేట్ కంపెనీలు తమ తప్పనిసరి CSR నిధులను పాఠశాల మరియు క్యాంపస్ నిర్మాణానికి నేరుగా అందించవచ్చు.',
      impact4Badge: 'ప్రభుత్వ పన్ను ప్రయోజనం',
      impact4Title: '80G పన్ను మినహాయింపు పొందండి',
      impact4Desc: 'అన్ని విరాళాలకు ఆదాయపు పన్ను చట్టంలోని సెక్షన్ 80G ప్రకారం 50% పన్ను మినహాయింపు లభిస్తుంది.'
    },
    // Discover Abilities Section (తెలుగు)
    discoverAbilities: {
      heading: 'సామర్థ్యాల గుర్తింపు. ప్రతిభకు ప్రోత్సాహం.',
      card1Title: 'స్పీచ్ & భావవ్యక్తీకరణ',
      card1Desc: 'ఆత్మవిశ్వాసం పెంపొందించడం, అవసరాలను వ్యక్తీకరించడం మరియు సమాజంతో మెలగడం.',
      card2Title: 'ప్రత్యేక విద్య (Special Education)',
      card2Desc: 'అర్థవంతమైన విద్యా మరియు జీవన పురోగతి కోసం వ్యక్తిగత అభ్యాస ప్రణాళికలు.',
      card3Title: 'ఆక్యుపేషనల్ & ప్రవర్తనా మద్దతు',
      card3Desc: 'ఏకాగ్రతను పెంచడం, సవాళ్లను తగ్గించడం మరియు సానుకూల ప్రవర్తనను పెంపొందించడం.',
      card4Title: 'రోజువారీ జీవన నైపుణ్యాలు (ADL)',
      card4Desc: 'ఉజ్వల భవిష్యత్తు మరియు ఆత్మగౌరవం కోసం స్వావలంబన సాధన.'
    },
    // Dream Campus Section (తెలుగు)
    dreamCampus: {
      title: 'మా కలల క్యాంపస్',
      desc: 'ఆధునిక అభ్యాస గదులు, చికిత్సా విభాగాలు, క్రీడా మైదానాలు మరియు నివాస వసతులతో ప్రతి బిడ్డ స్వతంత్రంగా ఎదగడానికి అత్యంత సురక్షితమైన, ఆత్మీయ క్యాంపస్‌ను నిర్మిస్తున్నాము.',
      feat1: 'అభ్యాస గదులు',
      feat2: 'థెరపీ గదులు',
      feat3: 'క్రీడా ప్రాంగణాలు',
      feat4: 'నివాస వసతులు',
      donateBtn: 'మా క్యాంపస్ కోసం విరాళం ఇవ్వండి'
    },
    // About Section (తెలుగు)
    aboutSection: {
      badge: 'మా సంస్థ & ప్రత్యేక పాఠశాల గురించి',
      title: 'అభ్యాసం, థెరపీ & జీవన నైపుణ్యాల కోసం ఆత్మీయ అభయారణ్యం',
      p1: 'ఆటిజం స్పెక్ట్రమ్‌లోని పిల్లలకు మరియు యువతకు నమ్మకమైన, పారదర్శకమైన మరియు ప్రేమపూర్వక వాతావరణాన్ని అందించడానికి లిటిల్ ప్లాంట్ ఆటిజం రెసిడెన్షియల్ హోమ్ స్థాపించబడింది. 24/7 ఆత్మీయ నివాసంతో పాటు క్లినికల్ థెరపీలు మరియు ప్రత్యేక విద్యను ఒకే పైకప్పు క్రింద అందిస్తున్నాము.',
      p2: 'కఠినమైన సంస్థాగత వాతావరణం కాకుండా, మా క్యాంపస్ ఒక ఆనందకరమైన కుటుంబ ఇల్లుగా ఉంటుంది. ఇక్కడ పిల్లలు కమ్యూనికేట్ చేయడం, స్వీయ సంరక్షణ, సంగీతం, క్రీడలు మరియు సామాజిక అనుబంధాలను పెంపొందించుకుంటారు.',
      whyTitle: '"లిటిల్ ప్లాంట్" అని ఎందుకు?',
      whyDesc: 'ప్రతి బిడ్డ ఒక లేత మొక్క వంటి వారని మేము విశ్వసిస్తాము. ప్రతి మొలక ఎదగడానికి తగిన సూర్యరశ్మి, సారవంతమైన మట్టి మరియు ఓర్పుతో కూడిన సంరక్షణ అవసరం. సున్నితమైన మార్గదర్శకత్వంతో ప్రతి బిడ్డ తమ సహజ వేగంతో వికసిస్తారు.',
      whyFoot: 'ప్రతి బిడ్డ వ్యక్తిత్వాన్ని మరియు సహజ వేగాన్ని గౌరవిస్తాము',
      statPrograms: 'సమగ్ర సేవలు',
      statCare: 'కారుణ్య సంరక్షణ',
      pillarsTitle: 'మా సమగ్ర సేవల ముఖ్య విభాగాలు:',
      viewAllPrograms: 'అన్ని 8 ప్రత్యేక సేవలను చూడండి',
      getInTouch: 'మమ్మల్ని సంప్రదించండి'
    },
    // CTA Section (తెలుగు)
    ctaSection: {
      csrBadge: 'CSR సర్టిఫైడ్ (కార్పొరేట్ విరాళాలు అర్హం)',
      taxBadge: 'సెక్షన్ 80G కింద ప్రభుత్వ పన్ను మినహాయింపు',
      title: 'ప్రత్యేక పిల్లల సాధికారతకు మాకు తోడ్పడండి',
      desc: 'కంపెనీలు క్యాంపస్ అభివృద్ధి కోసం నేరుగా CSR నిధులను అందించవచ్చు. వ్యక్తిగత దాతలకు ప్రభుత్వ పన్ను మినహాయింపు రసీదులు తక్షణమే అందించబడతాయి.',
      donateBtn: 'క్యాంపస్ కోసం విరాళం ఇవ్వండి'
    },
    // Services Page (తెలుగు)
    servicesPage: {
      badge: 'వ్యక్తిగత సంరక్షణ & థెరపీ',
      title: 'మా సేవలు',
      desc: 'మీ బిడ్డ ఆత్మవిశ్వాసం మరియు పురోగతికి తోడ్పడేలా రూపొందించబడిన మా ఎనిమిది ప్రత్యేక విద్యా, చికిత్సా, దైనందిన జీవన మరియు నివాస కార్యక్రమాల సమగ్ర వివరాలు.',
      filterAll: 'అన్నీ',
      filterTherapy: 'థెరపీ',
      filterEducation: 'విద్య & జీవిత నైపుణ్యాలు',
      filterResidential: 'నివాస సేవలు & కార్యకలాపాలు',
      searchPlaceholder: 'సేవలను శోధించండి...',
      noResults: 'మీ శోధనకు తగిన సేవలు కనుగొనబడలేదు.',
      resetFilters: 'ఫిల్టర్లను రీసెట్ చేయండి',
      ageGroupLabel: 'వయస్సు పరిమితి',
      formatLabel: 'సెషన్ విధానం',
      keyBenefitsLabel: 'ముఖ్య అభివృద్ధి ఫలితాలు & దృష్టి సారించే అంశాలు',
      inquireService: 'ఈ సేవ గురించి సంప్రదించండి',
      callDirectly: 'నేరుగా కాల్ చేయండి'
    },
    // Categories Page (తెలుగు)
    categoriesPage: {
      badge: 'సమగ్ర సంరక్షణ విభాగాలు',
      title: 'మా విభాగాలు',
      desc: 'మీ బిడ్డ సంపూర్ణ ఎదుగుదల మరియు వికాసానికి తోడ్పడే మా ఎనిమిది ప్రత్యేక అభివృద్ధి, చికిత్సా, విద్యా మరియు నివాస విభాగాలను తెలుసుకోండి.',
      needDetails: 'విద్యా ప్రణాళిక మరియు థెరపీల పూర్తి వివరాలు కావాలా?',
      needDetailsDesc: 'ప్రతి ప్రోగ్రామ్ యొక్క సెషన్ విధానాలు, ముఖ్య ప్రయోజనాలు మరియు దినచర్యలను మా సేవల పేజీలో చూడండి.',
      visitServices: 'వివరమైన సేవల పేజీని చూడండి'
    },
    // About Page (తెలుగు)
    aboutPage: {
      badge: 'లిటిల్ ప్లాంట్ ఆటిజం ఎడ్యుకేషనల్ అకాడమీ',
      title: 'మా అకాడమీ & రెసిడెన్షియల్ హోమ్ గురించి',
      desc: 'ఆటిజం మరియు ప్రత్యేక పిల్లలలో అంతర్గత సామర్థ్యాలను గుర్తించి, ప్రతిభను ప్రోత్సహిస్తూ, 24/7 ప్రేమపూర్వక నివాస సంరక్షణ అందించడానికి మేము అంకితమయ్యాము.',
      meta1: 'నిపుణులైన సమగ్ర చికిత్సా బృందం',
      meta2: '24/7 ఆత్మీయ గృహ వాతావరణం',
      meta3: 'శిశు-కేంద్రీకృత ఎదుగుదల'
    },
    // Campus Page (తెలుగు)
    campusPage: {
      badge: 'శాశ్వత క్యాంపస్ ప్రాజెక్ట్',
      title: 'మా కలల క్యాంపస్ — జిన్నారం',
      desc: 'వ్యక్తిగత అభ్యాస గదులు, థెరపీ సూట్లు మరియు నివాస సదుపాయాలతో ప్రపంచ స్థాయి సురక్షిత అభయారణ్యాన్ని నిర్మిస్తున్నాము.',
      meta1: 'జిన్నారం, సంగారెడ్డి జిల్లా, తెలంగాణ',
      meta2: 'పూర్తయ్యే గడువు: 31 మే 2027',
      meta3: 'రెసిడెన్షియల్ అకాడమీ & కేర్',
      facilitiesTitle: 'ప్రత్యేక పిల్లల అవసరాలకు అనుగుణంగా రూపొందించిన సౌకర్యాలు',
      f1Title: 'సెన్సరీ-ప్రశాంత నిర్మాణ శైలి',
      f1Desc: 'సహజ కాంతి, శబ్ద నియంత్రణ మరియు మృదువైన అంచులతో కూడిన సురక్షిత గదులు.',
      f2Title: 'బహిరంగ సెన్సరీ ప్రాంగణం',
      f2Desc: 'పచ్చని నడక మార్గాలు, స్పర్శ తోటలు మరియు ఆట స్థలాలతో కూడిన ప్రశాంత వాతావరణం.',
      f3Title: '24/7 నివాస సంరక్షణ గృహం',
      f3Desc: 'శిక్షణ పొందిన సంరక్షకుల నిరంతర పర్యవేక్షణతో కూడిన సురక్షిత బోర్డింగ్ గదులు.',
      f4Title: 'క్లినికల్ థెరపీ సూట్లు',
      f4Desc: 'AAC పరికరాలు, స్వింగ్ ఫ్రేమ్‌లు, సెన్సరీ మ్యాట్లు మరియు స్పీచ్ ఆర్టిక్యులేషన్ పరికరాలు.'
    },
    // Gallery Page & Section (తెలుగు)
    gallery: {
      badge: 'క్యాంపస్ ఫోటో టూర్',
      title: 'మా క్యాంపస్ & జీవన గ్యాలరీ',
      desc: 'తెలంగాణలోని జిన్నారంలో శాశ్వత క్యాంపస్ నిర్మాణం, సెన్సరీ తోటలు, తరగతి గదులు మరియు ఆనందకరమైన నివాస క్షణాలను వీక్షించండి.',
      meta1: 'జిన్నారం శాశ్వత క్యాంపస్',
      meta2: 'సెన్సరీ థెరపీ సూట్లు',
      meta3: 'ఇంటరాక్టివ్ ఫుల్ లైట్‌బాక్స్',
      filterAll: 'అన్ని ఫోటోలు',
      filterCampus: 'క్యాంపస్ నిర్మాణం',
      filterTherapy: 'థెరపీ & తరగతి గదులు',
      filterActivities: 'కార్యకలాపాలు & క్రీడలు',
      filterResidential: 'నివాస వసతులు',
      filterCommunity: 'కమ్యూనిటీ & పూజా వేడుకలు'
    },
    // Contact Page (తెలుగు)
    contactPage: {
      badge: 'అడ్మిషన్లు & సంప్రదింపు డెస్క్',
      title: 'మమ్మల్ని సంప్రదించండి & క్యాంపస్ విచారణ',
      desc: 'తల్లిదండ్రులు, సంరక్షకులు, వైద్యులు, దాతలు మరియు CSR ప్రతినిధులకు సహాయం చేయడానికి మేము అందుబాటులో ఉన్నాము.',
      formTitle: 'నేరుగా సందేశం పంపండి',
      formSubtitle: 'మా అడ్మిషన్ల సమన్వయకర్తలు 24 గంటల్లో మీకు సమాధానమిస్తారు.',
      fullName: 'పూర్తి పేరు *',
      phone: 'ఫోన్ నంబర్ *',
      email: 'ఇమెయిల్ చిరునామా *',
      purpose: 'సంప్రదించడానికి కారణం',
      childAge: 'పిల్లల వయస్సు (అవసరమైతే)',
      message: 'మీ సందేశం / విచారణ *',
      submitBtn: 'సందేశం పంపండి',
      thankYou: 'మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు!',
      thankYouDesc: 'మీ విచారణ అందింది. మా క్యాంపస్ బృందం త్వరలోనే ఫోన్ మరియు ఇమెయిల్ ద్వారా మిమ్మల్ని సంప్రదిస్తుంది.',
      submitAnother: 'మరొక విచారణ పంపండి',
      campusAddress: 'క్యాంపస్ చిరునామా',
      callUs: 'ఫోన్ చేయండి',
      emailUs: 'ఇమెయిల్ చేయండి',
      workingHours: 'పనివేళలు',
      hoursDesc: 'సోమవారం – శనివారం: ఉదయం 9:00 – సాయంత్రం 6:00 (24/7 నివాస సంరక్షణ)'
    },
    // Requirements Section (తెలుగు)
    reqSection: {
      tag: 'ప్రత్యక్ష విరాళాలు & CSR స్పాన్సర్‌షిప్ అవకాశాలు',
      title: 'క్యాంపస్ సామగ్రి & మౌలిక సదుపాయాల అవసరాలు',
      subtitle: 'తెలంగాణలోని జిన్నారంలో మా శాశ్వత పాఠశాల మరియు నివాస గృహాన్ని సమకూర్చడంలో మాకు సహాయం చేయండి. దాతలు, సంస్థలు మరియు CSR భాగస్వాములు నిర్దిష్ట వస్తువులను స్పాన్సర్ చేయవచ్చు.',
      essentialCategories: '16 ముఖ్యమైన విభాగాలు',
      campusReady: 'జిన్నారం క్యాంపస్ సిద్ధమవుతోంది',
      viewPoster: 'సచిత్ర పోస్టర్‌ను పూర్తిగా చూడండి',
      filterAll: 'అన్ని అవసరాలు (16)',
      filterTherapy: 'థెరపీ & ప్రత్యేక విద్య',
      filterFurniture: 'ఫర్నిచర్ & నివాసం',
      filterInfra: 'మౌలిక సదుపాయాలు',
      sponsorItem: 'ఈ సామగ్రిని స్పాన్సర్ చేయండి',
      items: {
        1: { name: 'లైట్లు (Lights)', desc: 'తరగతి గదులు, సెన్సరీ రూమ్‌లు మరియు హాస్టల్ డార్మిటరీల కోసం శక్తి సామర్థ్యం గల LED సీలింగ్ & ట్యూబ్ లైట్లు.' },
        2: { name: 'ఫ్యాన్లు (Fans)', desc: 'బెడ్‌రూమ్‌లు మరియు థెరపీ సూట్‌లలో చల్లని, సమృద్ధిగా గాలిని అందించే సీలింగ్ ఫ్యాన్లు.' },
        3: { name: 'వంటగది సామాగ్రి (Kitchen Items)', desc: 'భారీ వాణిజ్య వంటపాత్రలు, ప్రెషర్ కుక్కర్లు, స్టెయిన్‌లెస్ స్టీల్ భోజన ప్లేట్లు మరియు ఆహార కంటైనర్లు.' },
        4: { name: 'పాఠశాల స్టేషనరీ (School Material)', desc: 'నోట్‌బుక్‌లు, కలర్ పెన్సిళ్లు, క్రాఫ్ట్ కిట్లు, సేఫ్టీ కత్తెరలు, డ్రాయింగ్ ప్యాడ్‌లు మరియు విద్యార్థి స్టేషనరీ.' },
        5: { name: 'RO వాటర్ ఫిల్టర్లు (Water Filters)', desc: 'క్యాంపస్‌లో పరిశుభ్రమైన, ఖనిజాలతో కూడిన త్రాగునీటి కోసం అధిక సామర్థ్యం గల RO నీటి శుద్ధి ప్లాంట్లు.' },
        6: { name: 'కుర్చీలు & బల్లలు (Chairs & Tables)', desc: 'పిల్లలకు సురక్షితమైన, రౌండెడ్ ఎడ్జ్ స్టడీ డెస్కులు మరియు రంగురంగుల క్లాస్‌రూమ్ కుర్చీలు.' },
        7: { name: 'CCTV కెమెరాలు (CC Cameras)', desc: '24/7 పిల్లల భద్రత మరియు పర్యవేక్షణ కోసం నైట్-విజన్ భద్రతా కెమెరాలు మరియు సెంట్రల్ మానిటరింగ్ సిస్టమ్.' },
        8: { name: 'కంప్యూటర్లు (Computers)', desc: 'కాగ్నిటివ్ లెర్నింగ్ సాఫ్ట్‌వేర్, థెరపిస్ట్ నివేదికలు మరియు డిజిటల్ లెర్నింగ్ కోసం డెస్క్‌టాప్ కంప్యూటర్లు.' },
        9: { name: 'బెడ్‌షీట్లు (Bedsheets)', desc: 'హాస్టల్ సూట్‌ల కోసం మెత్తని, పరిశుభ్రమైన కాటన్ బెడ్‌షీట్లు మరియు పిల్లో కవర్లు.' },
        10: { name: 'మంచాలు (Beds)', desc: '24/7 నివాస సంరక్షణ కోసం ఆర్థోపెడిక్ పరుపులతో కూడిన బలమైన చెక్క సింగిల్ బెడ్‌లు.' },
        11: { name: 'విశ్రాంతి కాట్లు (Cots)', desc: 'మధ్యాహ్న విశ్రాంతి, డేకేర్ మరియు సిక్-బే సంరక్షణ కోసం అనుకూలమైన ఫోల్డబుల్ కాట్లు.' },
        12: { name: 'స్పీచ్ థెరపీ సామాగ్రి (Speech Therapy)', desc: 'ఆర్టిక్యులేషన్ కార్డులు, ఓరల్ మోటార్ టూల్స్, అద్దాలు మరియు పదజాలం ఫ్లాష్‌కార్డులు.' },
        13: { name: 'ఆక్యుపేషనల్ థెరపీ కిట్లు (Occupational Therapy)', desc: 'థెరపీ జిమ్ బాల్స్, బ్యాలెన్స్ రింగులు, టాక్టైల్ టూల్స్ మరియు వెస్టిబ్యులర్ పరికరాలు.' },
        14: { name: 'ప్రత్యేక విద్యా సామాగ్రి (Special Education)', desc: 'చెక్క ఆల్ఫాబెట్ ABC 123 ట్రేసింగ్ బోర్డులు, షేప్-సార్టర్లు మరియు లాజికల్ పజిల్ బొమ్మలు.' },
        15: { name: 'బిహేవియరల్ థెరపీ కిట్లు (Behavioural Therapy)', desc: 'భావోద్వేగ ముఖ కవళికల కార్డులు, రివార్డ్ స్టార్ బోర్డులు మరియు ప్రశాంతతనిచ్చే సెన్సరీ టూల్స్.' },
        16: { name: 'ఫ్లోర్ మ్యాట్లు (Floor Mats)', desc: 'సురక్షితమైన సెన్సరీ ఆటల కోసం హై-డెన్సిటీ ఇంటర్‌లాకింగ్ EVA ఫోమ్ పజిల్ కుషన్ మ్యాట్లు.' }
      }
    },
    // Footer (తెలుగు)
    footer: {
      aboutTitle: 'లిటిల్ ప్లాంట్ గురించి',
      aboutDesc: 'ఆటిజం మరియు ఎదుగుదల లోపాలు ఉన్న ప్రత్యేక పిల్లలకు జీవితకాల నివాస సంరక్షణ, క్లినికల్ థెరపీలు మరియు సమగ్ర విద్య ద్వారా సాధికారత కల్పిస్తున్న నమోదిత స్వచ్ఛంద సంస్థ.',
      quickLinks: 'త్వరిత లింకులు',
      ourCampus: 'మా క్యాంపస్',
      campusDesc: 'తెలంగాణలోని సంగారెడ్డి జిల్లా, జిన్నారంలో 4-ఎకరాల విస్తీర్ణంలో నిర్మితమవుతున్న శాశ్వత క్యాంపస్ అభయారణ్యం.',
      contactInfo: 'సంప్రదింపుల వివరాలు',
      taxExemptionTitle: 'సెక్షన్ 80G కింద పన్ను ప్రయోజనాలు',
      taxExemptionDesc: 'లిటిల్ ప్లాంట్‌కు ఇచ్చే అన్ని విరాళాలకు ఆదాయపు పన్ను చట్టంలోని సెక్షన్ 80G ప్రకారం 50% పన్ను మినహాయింపు ఉంటుంది. అధికారిక రసీదు వెంటనే అందించబడుతుంది.',
      allRights: 'అన్ని హక్కులూ ప్రత్యేకించబడినవి. ప్రత్యేక పిల్లలకు ప్రేమ మరియు ఆత్మగౌరవంతో అంకితం.'
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('littleplant_lang') || 'en';
  });

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'te') {
      setLangState(newLang);
      localStorage.setItem('littleplant_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Helper function to get nested translation value: t('nav.home')
  const t = (path, fallback = '') => {
    const parts = path.split('.');
    let curr = translations[lang];
    for (const part of parts) {
      if (curr && curr[part] !== undefined) {
        curr = curr[part];
      } else {
        // Fallback to English if missing in current language
        let enCurr = translations.en;
        for (const enPart of parts) {
          if (enCurr && enCurr[enPart] !== undefined) {
            enCurr = enCurr[enPart];
          } else {
            return fallback || path;
          }
        }
        return enCurr;
      }
    }
    return curr;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isTelugu: lang === 'te' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
