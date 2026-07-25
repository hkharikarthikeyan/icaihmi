export const CONFERENCE = {
  acronym: "ICAIHMI 2026",
  name: "International Conference on AI in Healthcare and Medical Informatics",
  theme: "Transforming Healthcare Delivery through Artificial Intelligence and Medical Informatics",
  date: "February 6, 2027",
  dateISO: "2027-02-06T09:00:00",
  venue: "Fully online",
  organizer: "Shazu Soft Technologies",
  email: "contact@iciestdi.org",
  phone: "+91 93616 80077",
  whatsapp: "+91 93616 80077",
  address: "Shazu Soft Technologies, 2nd Agraharam, Chairman Rajarathinam Street, Near Kamala Hospital, Salem, Tamil Nadu - 636001",
};

export const IMPORTANT_DATES = [
  { label: "Full Length Paper Submission", date: "October 21, 2026" },
  { label: "Paper Acceptance Notification", date: "November 30, 2026" },
  { label: "Early Bird Registration", date: "December 24, 2026" },
  { label: "Standard Registration", date: "January 8, 2027" },
  { label: "Conference Date", date: "February 6, 2027" },
];

export type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "About",
    children: [
      { label: "About", to: "/about" },
      { label: "Committee", to: "/committee" },
    ],
  },
  {
    label: "Call for Papers",
    children: [
      { label: "Call for Papers", to: "/call-for-papers" },
      { label: "Conference Tracks", to: "/tracks" },
      { label: "Important Dates", to: "/important-dates" },
    ],
  },
  { to: "/program", label: "Program" },
   
  {
    label: "Author",
    children: [
      { label: "Author Guidelines", to: "/author-guidelines" },
      
      { label: "Publication", to: "/publication" },
    ],
  },
  { label: "Submission", to: "/submission" },
  { to: "/registration", label: "Registration" },
 
  
  //{ to: "/workshop", label: "Workshop" },
 // { to: "/venue", label: "Venue" },
  { to: "/contact", label: "Contact" },
];

export const RESEARCH_AREAS = [
  "Artificial Intelligence in Medicine",
  "Machine Learning for Healthcare",
  "Deep Learning Applications",
  "Computer Vision in Medical Imaging",
  "Natural Language Processing for Healthcare",
  "Clinical Decision Support Systems",
  "Electronic Health Records (EHR)",
  "Bioinformatics",
  "Precision Medicine",
  "Telemedicine",
  "Internet of Medical Things (IoMT)",
  "Wearable Healthcare Devices",
  "Robotics in Healthcare",
  "Blockchain for Healthcare",
  "Healthcare Cybersecurity",
];

export const TRACKS = [
  {
    id: 1,
    title: "Artificial Intelligence in Healthcare",
    description:
      "Research on AI-driven medicine, machine learning, deep learning, and intelligent systems for clinical decision-making and disease diagnosis.",
    topics: [
      "Artificial Intelligence in Medicine",
      "Machine Learning for Healthcare",
      "Deep Learning Applications",
      "Computer Vision in Medical Imaging",
      "Natural Language Processing for Healthcare",
      "Clinical Decision Support Systems",
      "Predictive Healthcare Analytics",
      "Explainable AI in Healthcare",
      "AI-Based Disease Diagnosis",
      "Intelligent Healthcare Systems",
    ],
    chair: { name: "TBA", affiliation: "To Be Announced" },
  },
  {
    id: 2,
    title: "Medical Informatics and Digital Health",
    description:
      "Advances in health information systems, electronic records, and digital health technologies improving healthcare delivery.",
    topics: [
      "Medical Informatics",
      "Health Informatics",
      "Electronic Health Records (EHR)",
      "Hospital Information Systems",
      "Clinical Information Systems",
      "Healthcare Data Management",
      "Digital Health Technologies",
      "Health Information Exchange",
      "Healthcare Interoperability",
      "Public Health Informatics",
    ],
    chair: { name: "TBA", affiliation: "To Be Announced" },
  },
  {
    id: 3,
    title: "Biomedical Data Analytics and Smart Healthcare",
    description:
      "Data-driven approaches to healthcare including bioinformatics, medical imaging, genomics, and personalized medicine.",
    topics: [
      "Medical Data Analytics",
      "Big Data in Healthcare",
      "Bioinformatics",
      "Biomedical Signal Processing",
      "Medical Image Processing",
      "Precision Medicine",
      "Personalized Healthcare",
      "Healthcare Data Mining",
      "Genomics and Computational Biology",
      "Smart Healthcare Applications",
    ],
    chair: { name: "TBA", affiliation: "To Be Announced" },
  },
  {
    id: 4,
    title: "Telemedicine and Connected Healthcare",
    description:
      "Remote and connected healthcare technologies including telehealth, wearables, and IoT-enabled patient monitoring.",
    topics: [
      "Telemedicine",
      "Telehealth Systems",
      "Internet of Medical Things (IoMT)",
      "Wearable Healthcare Devices",
      "Remote Patient Monitoring",
      "Mobile Health (mHealth)",
      "Smart Hospitals",
      "Cloud-Based Healthcare Systems",
      "Healthcare IoT Applications",
      "Ambient Assisted Living",
    ],
    chair: { name: "TBA", affiliation: "To Be Announced" },
  },
  {
    id: 5,
    title: "Emerging Technologies in Healthcare",
    description:
      "Next-generation technologies including robotics, extended reality, blockchain, and digital twins reshaping intelligent healthcare.",
    topics: [
      "Robotics in Healthcare",
      "Surgical Robotics",
      "Virtual Reality in Medicine",
      "Augmented Reality in Healthcare",
      "Blockchain for Healthcare",
      "Healthcare Cybersecurity",
      "Digital Twin in Healthcare",
      "Smart Medical Devices",
      "Healthcare Automation",
      "Future Intelligent Healthcare Systems",
    ],
    chair: { name: "TBA", affiliation: "To Be Announced" },
  },
];

export const COMMITTEE = {
  "Chief Patron": [
    {
      name: "Dr. Sindhu Saranya",
      designation: "Professor",
      affiliation: "Department of Computer Science and Engineering, Sona College of Technology, Salem",
      country: "India",
    },
    {
      name: "Dr. Osamah Ibrahim Khalaf",
      designation: "Professor",
      affiliation: "Department of Solar, Al-Nahrain Research Center for Renewable Energy, Al-Nahrain University, Jadriya, Baghdad 10072",
      country: "Iraq",
    },
  ],

  "Co-Chief Patron": [
    {
      name: "Prof. Rajesh Dey",
      designation: "Professor & Principal",
      affiliation: "Camellia Institute of Engineering and Technology (CIET), Burdwan, West Bengal",
      country: "India",
    },
    {
      name: "Dr. Ghaida Muttashar Abdulsahib",
      designation: "Professor",
      affiliation: "Department of Computer Engineering, University of Technology, Baghdad 10066",
      country: "Iraq",
    },
    {
      name: "Prof. M. Narendran",
      designation: "Professor",
      affiliation: "Department of Computer Science and Engineering, Sona College of Technology, Salem",
      country: "India",
    },
  ],

  "National Advisory Committee": [
    {
      name: "Dr. Krishna B V",
      designation: "Professor",
      affiliation: "Department of Computer Science and Engineering, KCG College of Technology, Chennai",
      country: "India",
    },
    {
      name: "Dr. Mithra C",
      designation: "Professor",
      affiliation: "Department of Computational Intelligence, School of Computing, SRM Institute of Science and Technology, Kattankulathur",
      country: "India",
    },
    {
      name: "Dr. M. Sathya Sathiskumar",
      designation: "Professor & Vice Principal",
      affiliation: "Nadar Saraswathi College of Engineering and Technology, Theni, Tamil Nadu",
      country: "India",
    },
    {
      name: "Dr. Vairachilai Shenbagavel",
      designation: "Associate Professor & Assistant Dean (Research)",
      affiliation: "School of Computer Science and Artificial Intelligence, SR University, Warangal, Telangana",
      country: "India",
    },
    {
      name: "Dr. Koushick Venkatesh",
      designation: "Secretary, IEEE Broadcast Technology Society (IEEE Madras Section) & Associate Professor - ECE",
      affiliation: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
      country: "India",
    },
    {
      name: "Prof. Bhuvaneswari P",
      designation: "Professor",
      affiliation: "Department of Computer Science and Engineering, Sona College of Technology, Salem",
      country: "India",
    },
    {
      name: "Dr. S. Devaraju",
      designation: "Associate Professor",
      affiliation: "VIT Bhopal University, Madhya Pradesh",
      country: "India",
    },
    {
      name: "Mohan Raj A",
      designation: "Researcher",
      affiliation: "National Institute of Technology Calicut",
      country: "India",
    },
    {
      name: "Dr. Ruchi Banarjee",
      designation: "Professor",
      affiliation: "Jaipur National University, Jaipur, Rajasthan",
      country: "India",
    },
  ],

  "International Advisory Committee": [
    {
      name: "Dr. Zaher Fadhil Raham",
      designation: "Professor",
      affiliation: "Al-Nahrain University",
      country: "Iraq",
    },
    {
      name: "Dr. Zaid Ali Hussein",
      designation: "Researcher",
      affiliation: "Al-Nahrain Renewable Energy Research Center, Al-Nahrain University",
      country: "Iraq",
    },
    {
      name: "Dr. Muhammad Ismail Kashif",
      designation: "Associate Researcher",
      affiliation: "International Center of Higher Education and Research (INCHER), Multan University of Science and Technology",
      country: "Pakistan",
    },
  ],
};

export const KEYNOTES = [
  {
    name: "George Salazar",
    affiliation: "Johnson Space Center, NASA, USA",
    image: "/speaker/george.jpg",
  },
  {
    name: "Dr. Ihtiram Raza Khan",
    affiliation: "Jamia Hamdard, New Delhi",
    image: "/speaker/ihtiram.jpg",
  },
];
export const REGISTRATION_FEES = [
  {
    category: "Research Scholars / Students",
    indian: "₹ 8000",
    international: "$ 175",
  },
  {
    category: "Academicians",
    indian: "₹ 8500",
    international: "$ 200",
  },
  {
    category: "Industry Professionals",
    indian: "₹ 10000",
    international: "$ 220",
  },
  {
    category: "Listener / Attendee",
    indian: "₹ 3000",
    international: "$ 100",
  },
];

export const WORKSHOPS = [
  { title: "Applied AI Workshop", desc: "Hands-on session covering modern AI toolchains, prompt engineering and evaluation." },
  { title: "Machine Learning in Practice", desc: "Feature engineering, model selection and production ML pipelines." },
  { title: "Python for Research", desc: "Scientific Python stack — NumPy, Pandas, scikit-learn, reproducible notebooks." },
  { title: "Deep Learning", desc: "CNNs, Transformers, fine-tuning strategies and interpretability." },
  { title: "Data Science", desc: "End-to-end data workflow — collection, cleaning, modelling, storytelling." },
  { title: "Cyber Security", desc: "Threat modelling, secure coding, penetration testing basics." },
  { title: "Modern Web Development", desc: "TypeScript, React, edge deployment and accessibility." },
];

export const SPONSORS = [
  "Shazu Soft Technologies"
];
