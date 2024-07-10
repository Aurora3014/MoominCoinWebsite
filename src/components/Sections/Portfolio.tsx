// import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
// import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo,} from 'react';

// import {isMobile} from '../../config';
import {heroData, SectionId} from '../../data/data';
// import {PortfolioItem} from '../../data/dataDef';
// import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';
import ContactIcon from '../Sections/Extra/ContactIcon'

const Portfolio: FC = memo(() => {
  const {contactImage, name} = heroData;

  return (
    <Section className="bg-[#F5F5DC]" sectionId={SectionId.Portfolio}>
      <div className='flex flex-col items-center max-w-screen-lg'>
        <Image
          alt={`${name}-image-green`}
          className="h-110 w-[20rem] rounded-full object-cover "
          priority
          src={contactImage}
        />
        <h1 className='text-4xl text-center font-bold mt-10'>Welcome to MUMIN Meme Coin</h1>
        <h2 className='text-2xl text-center font-light'>Join the MUMIN Meme-verse!</h2>
        <br/>
        <p className='text-2xl text-center'> Discover the magic of MUMIN Meme Coin. Fun, memes, and crypto adventures await in our vibrant community.</p>
        <br/>
        <div className='text-2xl text-center font-bold text-black p-4 hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 '>
          <ContactIcon/>
        </div>

      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

// const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
//   const [mobile, setMobile] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const linkRef = useRef<HTMLAnchorElement>(null);

//   useEffect(() => {
//     // Avoid hydration styling errors by setting mobile in useEffect
//     if (isMobile) {
//       setMobile(true);
//     }
//   }, []);
//   useDetectOutsideClick(linkRef, () => setShowOverlay(false));

//   const handleItemClick = useCallback(
//     (event: MouseEvent<HTMLElement>) => {
//       if (mobile && !showOverlay) {
//         event.preventDefault();
//         setShowOverlay(!showOverlay);
//       }
//     },
//     [mobile, showOverlay],
//   );

//   return (
//     <a
//       className={classNames(
//         'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
//         {'opacity-0 hover:opacity-80': !mobile},
//         showOverlay ? 'opacity-80' : 'opacity-0',
//       )}
//       href={url}
//       onClick={handleItemClick}
//       ref={linkRef}
//       target="_blank">
//       <div className="relative h-full w-full p-4">
//         <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
//           <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
//           <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
//         </div>
//         <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
//       </div>
//     </a>
//   );
// });
