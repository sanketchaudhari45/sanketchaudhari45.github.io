
import type { SkillCategory, Experience, Project, Certification } from './types';
import {
  JarvisIcon,
  AwsIcon,
  AccentureIcon,
  GamingIcon,
  YoutubeIcon,
  ProjectIcon1,
  ProjectIcon2,
  ProjectIcon3,
  ProjectIcon4,
  ProjectIcon5,
} from './components/icons/Icons';


export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Route 53)', level: 90 },
      { name: 'Jenkins CI/CD', level: 85 },
      { name: 'Docker', level: 85 },
    ],
  },
  {
    title: 'Development & Scripting',
    skills: [
      { name: 'Node.js Scripting', level: 80 },
      { name: 'Shell Scripting', level: 85 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'GIT', level: 90 },
      { name: 'Windows Server', level: 75 },
    ],
  },
  {
    title: 'MERN Stack',
    skills: [
      { name: 'MongoDB Integration', level: 85 },
      { name: 'Express.js Deployment', level: 80 },
      { name: 'React.js CI/CD', level: 75 },
    ],
  },
  {
    title: 'Automation & Monitoring',
    skills: [
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Containerization', level: 85 },
      { name: 'Infrastructure Automation', level: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Collaboration', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 85 },
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'DevOps Engineer',
    company: 'AIQOD',
    period: 'June 2024 - Present · 9 mos',
    points: [
      'Set up environments for new projects across development, UAT, and production, along with databases for smooth operation of web applications using Jenkins CI/CD pipelines.',
      'Gained solid experience with the MERN stack, particularly in CI/CD deployment and troubleshooting.',
      'Worked extensively with AWS, including EC2, S3 (with a focus on cost optimization), and Route 53.',
      'Led the deployment of Python-based services, including generative AI chatbot microservices and other related services.',
      'Ensured seamless MongoDB integration with both frontend and backend systems, providing continuous monitoring through scripts written in Node.js.',
      'Hands-on experience with Docker, collaborating with team to deploy microservices across multiple containers with automated one-click deployment setup.',
      'Managed company credentials, distributing them securely via email with manager approval when needed.',
    ],
    tags: ['AWS', 'Jenkins', 'Docker', 'MERN Stack', 'MongoDB', 'Node.js', 'AI Microservices'],
    gradient: 'from-emerald-500 to-teal-600 dark:from-amber-600 dark:to-orange-700',
  },
  {
    role: 'YouTube Content Creator',
    company: 'Freelance',
    period: 'Feb 2016 - Jan 2023 · 7 yrs',
    points: [
      '<strong>Tech Content Creator (Feb 2016 - Jun 2020):</strong> Managed a YouTube channel specializing in tech-related content, producing videos focused on troubleshooting technical issues, highlighting latest technology innovations, and offering instructional guides. Achieved 10,000+ subscribers and over 1 million views.',
      '<strong>Esports Gamer/Streamer (Jun 2020 - Jan 2023):</strong> Managed gameplay streaming content and participated in eSports tournaments. Successfully managed sponsorships and engaged with audience through entertaining gameplay content using OBS Studio.',
      'Developed expertise in YouTube SEO techniques and analytical skills to optimize channel performance',
      'Built strong audience engagement strategies and community management skills',
      'Gained experience in content strategy, digital marketing, and brand partnerships',
    ],
    tags: ['YouTube SEO', 'Content Strategy', 'OBS Studio', 'eSports', 'Digital Marketing', 'Analytics'],
    gradient: 'from-red-500 to-pink-600 dark:from-red-600 dark:to-pink-700',
  },
  {
    role: 'Social Media Manager & Content Producer',
    company: 'Corporate IT Solutions Company (Freelance)',
    period: '2019 - 2021 · 1.5 yrs',
    points: [
      'Built complete social media infrastructure for a corporate IT solutions company, managing all aspects of their digital presence and content strategy.',
      'Created and managed YouTube channel production for their IT products, developing comprehensive video content including product demos, tutorials, and promotional materials.',
      'Collaborated with company employees to develop engaging content, ensuring brand consistency and technical accuracy across all materials.',
      'Designed high-quality graphics and visual elements for social media campaigns, product presentations, and marketing materials.',
      'Managed end-to-end content creation process from concept development to final production and distribution across multiple platforms.',
      'Developed content calendars, social media strategies, and engagement campaigns that significantly improved the company\'s online presence.',
    ],
    tags: ['Social Media Management', 'Content Production', 'YouTube Channel', 'Graphic Design', 'Brand Strategy', 'Video Production'],
    gradient: 'from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'JARVIS',
    description: 'Python-Based AI Personal Assistant',
    details: 'Jarvis is an A.I. Personal Assistant System that can help you with your daily, regular tasks. You can control it using your voice. This system is made using python programming.',
    tags: ['Python', 'AI/ML', 'Voice Control', 'Automation'],
    type: 'gradient',
    Icon: JarvisIcon,
    gradient: 'from-emerald-500 to-teal-600 dark:from-amber-500 dark:to-orange-600',
  },
  {
    title: 'AI Chatbot Microservices',
    description: 'Led deployment of Python-based generative AI chatbot microservices with automated CI/CD pipelines and Docker containerization.',
    details: 'Managed the end-to-end deployment lifecycle for multiple generative AI microservices. Utilized Jenkins for creating robust CI/CD pipelines, Docker for containerization, and AWS for scalable cloud hosting, ensuring high availability and performance.',
    tags: ['Python', 'Docker', 'AI/ML', 'Jenkins'],
    type: 'image',
    Icon: ProjectIcon1,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'MERN Stack CI/CD Pipeline',
    description: 'Implemented comprehensive CI/CD pipelines for MERN stack applications with automated testing, deployment, and monitoring.',
    details: 'Designed and implemented a full CI/CD workflow for MERN applications. This included setting up automated build triggers on Git commits, running unit and integration tests, and deploying to staging and production environments on AWS EC2 instances.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    type: 'image',
    Icon: ProjectIcon2,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'AWS Cost Optimization',
    description: 'Implemented AWS S3 cost optimization strategies and managed EC2 instances for improved resource utilization and cost efficiency.',
    details: 'Analyzed AWS usage reports to identify cost-saving opportunities. Implemented S3 lifecycle policies to transition objects to cheaper storage classes, and optimized EC2 instance types and usage (e.g., using spot instances) to reduce monthly cloud spend by over 20%.',
    tags: ['AWS EC2', 'AWS S3', 'Route 53', 'Cost Optimization'],
    type: 'image',
    Icon: ProjectIcon3,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Automated Environment Setup',
    description: 'Created automated one-click deployment system for development, UAT, and production environments with database integration.',
    details: 'Developed a series of Jenkins jobs and shell scripts to automate the entire environment setup process. This system allowed developers to spin up a complete, isolated environment (including web server, backend services, and database) with a single click, reducing setup time from hours to minutes.',
    tags: ['Automation', 'Jenkins', 'Environment Setup', 'Database'],
    type: 'image',
    Icon: ProjectIcon4,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'MongoDB Monitoring Scripts',
    description: 'Developed Node.js monitoring scripts for seamless MongoDB integration with frontend and backend systems.',
    details: 'Wrote custom Node.js scripts to monitor MongoDB performance metrics, database connection status, and query execution times. These scripts integrated with a logging system to provide real-time alerts on potential issues, ensuring database health and stability.',
    tags: ['Node.js', 'MongoDB', 'Monitoring', 'Integration'],
    type: 'image',
    Icon: ProjectIcon5,
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'AWS APAC - Solutions Architecture Job Simulation',
    issuer: 'Forage.com',
    date: 'April 2024',
    description: 'Designed a sleek and scalable hosting architecture using Elastic Beanstalk for a client facing rapid growth and sluggish response time.',
    tags: ['AWS', 'Elastic Beanstalk', 'Solutions Architecture'],
    Icon: AwsIcon,
    iconBg: 'bg-orange-100 dark:bg-orange-900/50',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    title: 'Consultant Program',
    issuer: 'Accenture',
    date: 'August 2021',
    description: 'Comprehensive consulting skills development including project prioritization, planning, user journey redesign, and outcomes analysis.',
    tags: ['Consulting', 'Project Management', 'User Experience'],
    Icon: AccentureIcon,
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Gaming Industry DevOps Webinar',
    issuer: 'Hirovired.com',
    date: 'December 2023',
    description: 'Learned how gaming companies manage concurrent users, implement CI/CD for rapid updates, ensure security, and optimize performance for smooth gameplay.',
    tags: ['Gaming DevOps', 'Scalability', 'Security', 'Performance'],
    Icon: GamingIcon,
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    title: 'YouTube Content Creation',
    issuer: 'How To/Gaming',
    date: 'December 2023',
    description: 'Developed analytical mindset for performance tracking and optimization. Proficient in content strategy and SEO optimization with educational and gaming content creation.',
    tags: ['Content Creation', 'SEO', 'Analytics', 'Strategy'],
    Icon: YoutubeIcon,
    iconBg: 'bg-red-100 dark:bg-red-900/50',
    iconColor: 'text-red-600 dark:text-red-400',
  },
];
