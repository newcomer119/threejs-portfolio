export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Yen Yoga',
    position: 'Founder of Yen Yoga & Retreats',
    img: 'assets/logo.png',
    review:
      "The website transformed our retreat business! Clients can now easily book classes and retreats online, and our instructors love the new profile features. The blog has helped us build a real community. We're so grateful for the professionalism and creativity throughout the project.",
  },
  {
    id: 2,
    name: 'Audexis Consultancy',
    position: 'Operations Manager at Audexis Consultancy',
    img: 'assets/audexis.ico',
    review:
      "Our transcription workflow is now seamless thanks to the new platform. Clients appreciate the secure upload and tracking, and our team is more efficient than ever. The developer understood our needs perfectly and delivered beyond expectations.",
  },
  {
    id: 3,
    name: 'FilamentFreaks',
    position: 'CEO of FilamentFreaks',
    img: 'assets/filament.webp',
    review:
      "Launching our ecommerce site was a game-changer. Customers love the easy navigation and secure checkout, and managing our inventory is now effortless. The attention to detail and technical expertise made all the difference.",
  },
];

export const myProjects = [
  {
    title: 'Yen Yoga Retreat',
    desc: 'A serene and modern website for a yoga retreat center, enabling users to explore classes, book retreats, and connect with instructors. The platform features a blog and a seamless booking experience for wellness seekers.',
    subdesc: 'Developed with a focus on user experience and responsive design, yenyogaretreat.org helps the community discover and join yoga events with ease.',
    href: 'https://yenyogaretreat.org',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://liveditor-gilt.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Audexis Consultancy',
    desc: 'A professional platform for transcription services, allowing clients to securely upload audio files, track project progress, and receive accurate transcriptions. Designed for efficiency and reliability.',
    subdesc: 'audexisconsultancy.com streamlines the transcription process for businesses and individuals, with a focus on security and user-friendly workflows.',
    href: 'https://audexisconsultancy.com',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'FilamentFreaks',
    desc: 'An ecommerce platform dedicated to 3D printers and tech accessories. Users can browse products, read reviews, and enjoy a secure, streamlined checkout experience.',
    subdesc: 'filamentfreaks.com offers a robust shopping experience for tech enthusiasts, with inventory management and customer support built in.',
    href: 'https://filamentfreaks.com',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'CodeSync - Live Coding Interview Platform',
    desc: 'A modern platform for interviewers to create private coding interviews. Interviewers can generate coding questions, observe candidates solve them live, and assign ratings or pass/fail outcomes.',
    subdesc: 'codesync-mia1.vercel.app supports two roles: candidate and interviewer. Candidates solve problems in real time, while interviewers manage sessions, review code, and provide instant feedback.',
    href: 'https://codesync-mia1.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Yen Ypga & Retreats',
    pos: 'Web Developer',
    duration: '2024',
    title: 'Developed a modern, responsive website for a yoga retreat center, featuring class schedules, retreat booking, instructor profiles, and a blog to engage the wellness community.',
    icon: 'assets/logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Audexis Consultancy',
    pos: 'Web Developer',
    duration: '2024',
    title: 'Built a consultancy platform specializing in transcription services, enabling clients to upload audio files, track project progress, and securely receive transcribed documents.',
    icon: 'assets/audexis.ico',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'FilamentFreaks',
    pos: 'Web Developer',
    duration: '2025',
    title: 'Created an ecommerce website for 3D printers and tech accessories, with product listings, secure checkout, customer reviews, and inventory management for a seamless shopping experience.',
    icon: 'assets/filament.webp',
    animation: 'salute',
  },
];
