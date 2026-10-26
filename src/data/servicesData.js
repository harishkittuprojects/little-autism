export const CHILDREN_WE_SUPPORT = [
  {
    id: "asd",
    name: "Autism Spectrum Disorder (ASD)",
    category: "Neurodevelopmental",
    description: "Support for communication, social interaction, sensory processing, and individualized learning routines.",
    icon: "Heart"
  },
  {
    id: "adhd",
    name: "Attention Deficit Hyperactivity Disorder (ADHD)",
    category: "Attention & Executive Function",
    description: "Strengthening focus, emotional regulation, impulse management, and structured daily task completion.",
    icon: "Sparkles"
  },
  {
    id: "id",
    name: "Intellectual Disability (ID)",
    category: "Cognitive & Functional",
    description: "Personalized educational goals, functional life skills, cognitive development, and practical independence.",
    icon: "Brain"
  },
  {
    id: "down-syndrome",
    name: "Down Syndrome",
    category: "Genetic & Developmental",
    description: "Speech enhancement, motor coordination, social participation, and loving inclusive community living.",
    icon: "Smile"
  },
  {
    id: "cp",
    name: "Cerebral Palsy (CP)",
    category: "Physical & Motor",
    description: "Physical therapy, adapted movement, fine motor control, assisted communication, and posture guidance.",
    icon: "Activity"
  },
  {
    id: "speech-delay",
    name: "Speech and Language Delay",
    category: "Communication",
    description: "Verbal articulation, receptive and expressive language skills, vocabulary building, and AAC support.",
    icon: "MessageSquare"
  },
  {
    id: "gdd",
    name: "Global Developmental Delay (GDD)",
    category: "Developmental Milestones",
    description: "Multi-disciplinary early intervention across physical, cognitive, communication, and emotional milestones.",
    icon: "Compass"
  },
  {
    id: "learning-disabilities",
    name: "Specific Learning Disabilities",
    category: "Academic & Cognitive",
    description: "Multi-sensory instruction in reading, writing, comprehension, and math tailored to cognitive styles.",
    icon: "BookOpen"
  },
  {
    id: "dev-delays",
    name: "Developmental Delays",
    category: "Developmental Support",
    description: "Step-by-step stimulation and therapy to bridge developmental gaps at each child's individual pace.",
    icon: "Sprout"
  },
  {
    id: "social-comm",
    name: "Social Communication Difficulties",
    category: "Social Interaction",
    description: "Building conversational turn-taking, peer interactions, understanding social cues, and friendship building.",
    icon: "Users"
  },
  {
    id: "behaviour-attention",
    name: "Behavioural and Attention Difficulties",
    category: "Behavioural Support",
    description: "Gentle positive behavior interventions, sensory regulation techniques, and predictable schedules.",
    icon: "ShieldCheck"
  },
  {
    id: "multiple-disabilities",
    name: "Multiple Disabilities",
    category: "Comprehensive Care",
    description: "Holistic, high-care ratio support combining physical, sensory, medical, educational, and residential attention.",
    icon: "HeartHandshake"
  }
];

export const HIDDEN_TALENTS = [
  { name: "Music & Rhythm", desc: "Instruments, singing, acoustic exploration, melodic memory", icon: "Music" },
  { name: "Dance & Movement", desc: "Expressive rhythm, motor coordination, graceful joyful movement", icon: "Activity" },
  { name: "Art & Creativity", desc: "Painting, tactile sculpting, visual illustration, crafts", icon: "Palette" },
  { name: "Sports & Swimming", desc: "Supervised pool confidence, balance, endurance, playground joy", icon: "Sun" },
  { name: "Memory & Tech", desc: "Pattern recognition, digital tools, puzzles, computers", icon: "Sparkles" },
  { name: "Practical Life Skills", desc: "Cooking, gardening, nurturing plants, organizing spaces", icon: "Sprout" }
];

export const REGISTRATIONS_APPROVALS = [
  {
    code: "80G",
    title: "80G Tax Exemption Certificate",
    desc: "Donations are eligible for tax deduction benefits under Section 80G of the Income Tax Act.",
    badge: "Tax Exemption Benefit"
  },
  {
    code: "12A / 12AB",
    title: "12A / 12AB Registration",
    desc: "Officially registered as a non-profit charitable educational and healthcare institution under Section 12AB.",
    badge: "Non-Profit Status"
  },
  {
    code: "Form 10BD",
    title: "Form 10BD Compliance",
    desc: "Full annual compliance and donation reporting with donor certificate issuance.",
    badge: "Reporting Compliance"
  },
  {
    code: "CSR Eligible",
    title: "CSR Registration Documentation",
    desc: "Eligible and registered to receive corporate CSR partnership funds for school & hostel construction.",
    badge: "Corporate Partnerships"
  },
  {
    code: "Telangana RPwD",
    title: "Telangana RPwD Approvals",
    desc: "Adherence to Rights of Persons with Disabilities (RPwD) standards and state regulatory guidelines.",
    badge: "State Approvals"
  }
];

export const SERVICES_DATA = [
  {
    id: "speech-communication",
    number: "01",
    name: "Speech and Communication Development",
    categoryGroup: "Therapy",
    badge: "Language & Expression",
    shortDescription: "Supporting children in developing speech, language, communication, and social interaction skills.",
    description: "Our dedicated speech and language therapists create gentle, individualized communication pathways for every child. Whether through verbal articulation, picture exchange systems (PECS), or assistive technology, we help children express their thoughts, emotions, and needs with growing confidence.",
    benefits: [
      "Speech clarity, pronunciation, and vocal modulation",
      "Expressive, receptive, and conversational language skills",
      "Alternative & Augmentative Communication (AAC) assistance",
      "Social interaction, non-verbal cues, and peer bonding",
      "Oral motor strength, articulation, and swallowing support"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "1-on-1 & Small Interactive Groups",
    iconName: "MessageSquare",
    colorAccent: "emerald"
  },
  {
    id: "behaviour-therapy",
    number: "02",
    name: "Behaviour Therapy and Positive Behaviour Support",
    categoryGroup: "Therapy",
    badge: "Positive Reinforcement & Regulation",
    shortDescription: "Helping children develop positive behaviours, emotional regulation, attention, social skills, and participation in everyday activities.",
    description: "Guided by positive behavioral support principles, our specialists help children understand emotions, navigate sensory overload, and develop constructive coping strategies. We focus on celebrating every positive step and building self-regulation in a calm, encouraging atmosphere.",
    benefits: [
      "Identifying sensory triggers and environmental stressors",
      "Emotional self-regulation and coping strategies",
      "Attention span enhancement and task completion",
      "Social participation and cooperative group interaction",
      "Family collaboration and guidance for home consistency"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "Individualized Daily Support",
    iconName: "HeartHandshake",
    colorAccent: "green"
  },
  {
    id: "occupational-therapy",
    number: "03",
    name: "Occupational Therapy",
    categoryGroup: "Therapy",
    badge: "Sensory & Functional Independence",
    shortDescription: "Supporting sensory processing, fine motor skills, coordination, and functional independence.",
    description: "Our sensory-adapted occupational therapy spaces allow children to build motor coordination, tactile tolerance, and everyday self-reliance. From holding pencils and fastening buttons to navigating sensory integration obstacle courses, we turn milestones into playful triumphs.",
    benefits: [
      "Sensory processing integration and tactile tolerance",
      "Fine motor control for writing, gripping, and tools",
      "Gross motor balance, posture, and spatial awareness",
      "Adaptive techniques for dressing, dining, and hygiene",
      "Calm sensory room exploration and nervous system soothing"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "1-on-1 Adaptive Sessions",
    iconName: "HandMetal",
    colorAccent: "teal"
  },
  {
    id: "special-education",
    number: "04",
    name: "Special Education and Individualized Learning",
    categoryGroup: "Education & Life Skills",
    badge: "Customized IEP Learning",
    shortDescription: "Providing personalized educational support according to each child's learning abilities, educational goals, and developmental needs.",
    description: "Every child learns differently. Our experienced special educators design Individualized Education Plans (IEPs) that respect each student's sensory preferences, pacing, and cognitive strengths. We make learning joyful with hands-on manipulatives, visual aids, and assistive technology.",
    benefits: [
      "Individualized Education Plans (IEPs) tailored to each child",
      "Multi-sensory reading, writing, numbers, and basic concepts",
      "Small student-to-teacher ratio for dedicated attention",
      "Assistive learning technology and visual schedules",
      "Regular milestone reviews and collaborative parent updates"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "Structured Classroom & Tutoring",
    iconName: "GraduationCap",
    colorAccent: "emerald"
  },
  {
    id: "daily-living",
    number: "05",
    name: "Activities of Daily Living (ADL)",
    categoryGroup: "Education & Life Skills",
    badge: "Self-Care & Practical Independence",
    shortDescription: "Teaching self-care, eating, dressing, grooming, personal hygiene, toileting, and other essential daily living skills.",
    description: "Real-world independence begins with everyday routines. Our life-skills training suites simulate real home settings where students learn personal grooming, meal preparation, room organization, hygiene, and safe community awareness in a patient, respectful setting.",
    benefits: [
      "Self-care, dressing, buttoning, and shoe-tying",
      "Independent eating, table etiquette, and hydration",
      "Personal hygiene, bathing routines, and toileting training",
      "Room tidiness, bed-making, and care of belongings",
      "Daily visual routine following and community safety awareness"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "Hands-on Practical Training Suites",
    iconName: "Sparkles",
    colorAccent: "green"
  },
  {
    id: "physical-activities-swimming",
    number: "06",
    name: "Physical Activities and Swimming",
    categoryGroup: "Residential & Activities",
    badge: "Fitness, Motor Skills & Swimming",
    shortDescription: "Encouraging physical fitness, balance, coordination, motor development, confidence, and participation through appropriate physical activities and supervised swimming, where available.",
    description: "Movement is vital for physical health, sensory balance, and joy. Our indoor play gym and soft outdoor green spaces offer adapted sports, yoga, obstacle courses, cooperative games, and supervised water confidence swimming sessions tailored to every child's physical abilities and energy levels.",
    benefits: [
      "Supervised swimming sessions for sensory relaxation and water confidence",
      "Adapted gentle gymnastics, stretching, and yoga",
      "Balance beams, soft trampolines, and climbing activities",
      "Cardiovascular health, stamina, and motor control",
      "Teamwork and joyful non-competitive group play"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "Daily Guided Movement & Supervised Pool Sessions",
    iconName: "Activity",
    colorAccent: "teal"
  },
  {
    id: "music-creative",
    number: "07",
    name: "Music and Creative Activities",
    categoryGroup: "Residential & Activities",
    badge: "Art, Rhythm & Talent Discovery",
    shortDescription: "Encouraging children to explore music, rhythm, art, creativity, and self-expression while discovering their interests and talents.",
    description: "Music and creative arts transcend words. In our vibrant music, art, and rhythm sessions, children explore xylophones, percussion drums, chimes, watercolors, and tactile crafts. Creative activities help calm sensory overload, spark joy, and uncover extraordinary hidden talents.",
    benefits: [
      "Rhythm exploration, singing, acoustic instruments, and drums",
      "Sensory art, painting, clay modeling, and tactile crafts",
      "Emotional expression, anxiety reduction, and relaxation",
      "Discovery and nurturing of musical, artistic, or performance talents",
      "Social bonding and joyful ensemble participation"
    ],
    ageGroup: "Ages 3 – 18 years",
    sessionFormat: "Creative Studios & Individual Practice",
    iconName: "Music",
    colorAccent: "green"
  },
  {
    id: "hostel-daycare",
    number: "08",
    name: "24/7 Residential Hostel and Daycare",
    categoryGroup: "Residential & Activities",
    badge: "Planned Residential Home & Daycare",
    shortDescription: "Providing planned residential care and daycare support, with a focus on safety, personal care, daily routines, learning opportunities, nutrition, and independent living skills. Hostel facilities are under development, with completion targeted for June 2027.",
    description: "Our planned residential campus provides a calm, home-like sanctuary with 24/7 attentive care. Rooms are designed with soothing natural light, sound dampening, hypoallergenic bedding, and secure facilities. We create a warm family atmosphere where children feel protected, loved, and valued.",
    benefits: [
      "24/7 round-the-clock trained caregivers and healthcare support",
      "Planned daycare and full residential hostel options",
      "Sensory-adapted, calm private and semi-private bedrooms",
      "Nutritious, balanced meals tailored to special dietary requirements",
      "Structured evening recreation, storytime, and peaceful bedtime routines"
    ],
    ageGroup: "Ages 3 – 18 years (Hostel target: June 2027)",
    sessionFormat: "Daycare & Full 24/7 Residential Sanctuary",
    iconName: "Home",
    colorAccent: "emerald"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "professional-care",
    title: "Professional Care",
    description: "Our team includes certified special educators, speech therapists, occupational therapists, and experienced caregivers who treat each child with deep empathy and clinical expertise.",
    icon: "ShieldCheck"
  },
  {
    id: "individual-attention",
    title: "Individual Attention",
    description: "We maintain low student-to-caregiver ratios, crafting personalized care plans that cater to each child's sensory profile, communication style, and growth pace.",
    icon: "UserCheck"
  },
  {
    id: "learning-development",
    title: "Learning & Development",
    description: "Through specialized curricula and adaptive teaching materials, we foster academic, communication, and cognitive milestones in an encouraging atmosphere.",
    icon: "BookOpen"
  },
  {
    id: "daily-living",
    title: "Daily Living Skills",
    description: "From morning routines to mealtime manners, we patiently instill practical self-care habits that empower children toward lifelong dignity and independence.",
    icon: "CheckCircle2"
  },
  {
    id: "safe-environment",
    title: "Safe Residential Environment",
    description: "A secure, sensory-soothing home with 24/7 care, clean accommodation, balanced nutrition, and peaceful outdoor green gardens where children thrive safely.",
    icon: "Home"
  },
  {
    id: "physical-creative",
    title: "Physical & Creative Activities",
    description: "Daily music therapy, adapted swimming, sensory movement, and gentle gardening nourish the body, heart, and mind through joyful engagement.",
    icon: "Palette"
  }
];
