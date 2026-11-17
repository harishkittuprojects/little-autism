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
      csrPartners: 'Searching for Corporate CSR Partners & Individual Donors'
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
      csrPartners: 'కార్పొరేట్ CSR భాగస్వాములు & వ్యక్తిగత దాతల కోసం అన్వేషణ'
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
