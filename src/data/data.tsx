import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import landCoinMarket from '../images/CoinMarketCap.png'
import landDextools from '../images/dextools-seeklogo.svg'
import testimonialImage from '../images/family-bg.jpg';
import heroImage from '../images/landing-backgroung.jpg';
import littleMy from '../images/LittleMy.jpg'
import logoGreen from '../images/Logo-green.svg';
import profilepic from '../images/logo-realistic.png';
import moominMama from '../images/MoominMama.jpg'
import moominPapa from '../images/MoominPapa.jpg'
import moominTroll from '../images/MoominTroll.jpg';
import landPancakeswap from '../images/pancakeswap.png'
import snufkin from '../images/Snufkin.jpg'
import landTelegram from '../images/telegram-svgrepo-com.svg';
import landTwitter from '../images/twitter-circle-svgrepo-com.svg'
import landUniswap from '../images/uniswap-seeklogo.svg'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Testimonials: 'family',
  Portfolio: 'contact',
  Resume: 'roadmap',
  Skills: 'skills',
  Stats: 'stats',
  Contact: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  contactImage: moominTroll,
  logoGreenSrc: logoGreen,
  name: `I'm MoominTroll.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description1: `Moomin Reflection Coin is a unique cryptocurrency inspired by the beloved Moomin characters created by Tove Jansson. `,
  description2: `Our mission is to blend the whimsical charm of the Moomin universe with the innovative world of blockchain technology. By holding Moomin Reflection Coin, you not only join a fun and vibrant community but also benefit from reflective rewards that grow your holdings over time.`,
  aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];


export const roadmap: TimelineItem[] = [
  {
    date: 'May 2024',
    location: 'Phase 1',
    title: 'Inception of Moomin Madness',
    content:  <ul className="list-inside">
      <li>Introduce the most adorable Moomin themed meme to captivate hearts.</li>
      <li>Launch token with a finite supply, sparking frenzy through social media buzz and captivating visuals.</li>
      <li>Cultivate community involvement with Moomin memes, animated GIFs, and whimsical content.</li>
    </ul>,
  },
  {
    date: 'June 2024',
    location: 'Phase 2',
    title: 'All Aboard the Moomin Express',
    content:  <ul className="list-inside">
      <li>Secure listings on major exchanges and establish robust liquidity pools.</li>
      <li>Organize Moomin meme challenges and generous giveaways to maintain community enthusiasm.</li>
      <li>Forge alliances with influencers and Moomin-loving pages to amplify the Moomin message.</li>
    </ul>,
  },
  {
    date: 'October 2024',
    location: 'Phase 3',
    title: 'Building the Moominiverse',
    content:  <ul className="list-inside">
      <li>Implement innovative Moomin-themed decentralized applications (dApps) for meme creation, trading, and gaming.</li>
      <li>Collaborate with Moomin-inspired projects to broaden utility and extend influence.</li>
      <li>Launch an exclusive Moomin NFT marketplace for prized digital collectibles.</li>
    </ul>,
  },
  {
    date: '2025',
    location: 'Phase 4',
    title: 'Journey to Moominland',
    content:  <ul className="list-inside">
      <li>Propel Moomin adoption into mainstream culture via strategic partnerships with brands and entertainment entities.</li>
      <li>Establish Moomin scholarships and grants to nurture emerging Moomin creators.</li>
      <li>Introduce a range of charming Moomin merchandise to further entrench the brand's appeal.</li>
    </ul>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'MoominPapa',
      text: 'Ahoy, adventurers of the Moomin meme coin valley! Our coin offers reflections with every transaction, fostering a warm and inclusive community. Join us in spreading Moomin magic far and wide!',
      image: moominPapa,
    },
    {
      name: 'MoominMama',
      text: 'Hello, friends! Our Moomin meme coin community is a cozy corner where everyone is welcomed with open arms. We cherish diversity, kindness, and belonging, spreading positivity with each transaction. Join us in creating Moomin magic!',
      image: moominMama,
    },
    {
      name: 'Snufkin',
      text: 'Hey wanderers! Welcome to our serene Moomin meme coin realm. Here, we value simplicity, freedom, and nature\'s beauty. Join us in spreading kindness and creating magic!',
      image: snufkin,
    },
    {
      name: 'LittleMy',
      text: 'Hey mischief-makers! Welcome to the lively Moomin meme coin world. Like me, our coin\'s full of spunk, offering adventure and fun. Let\'s ignite sparks of excitement with each transaction, fueling a vibrant community together!',
      image: littleMy,
    },
  ],
};
console.log(moominMama)
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

export const coinLinks = [
  {label: 'Twitter', Icon: landTwitter, href: 'https://github.com/Moomin'},
  {label: 'Telegram', Icon: landTelegram, href: 'https://t.me/dev_aurora'},
  {label: 'Uniswap', Icon: landUniswap, href: 'https://app.uniswap.org/swap'},
  {label: 'Pancakeswap', Icon: landPancakeswap, href: 'https://pancakeswap.finance/swap'},
  {label: 'Dextools', Icon: landDextools, href: 'https://www.dextools.io/app/en/pairs'},
  {label: 'CoinMarketCap', Icon: landCoinMarket, href: 'https://coinmarketcap.com/dexscan/solana/CTLVrVuFx9pdZ7xLio65TMuo2mnErF1fGNebaCTFxcqi/'},
];
