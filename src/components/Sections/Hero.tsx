// import {ChevronDownIcon} from '@heroicons/react/24/outline';
// import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import LandingCoins from '../Sections/Extra/LandingIcon'
// import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, logoGreenSrc, name,} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center bg-[#F7DCD3]">
        
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover blur-sm"
          // placeholder="blur"
          priority
          src={imageSrc}
        />

        <div className='flex justify-center flex-col text-center md:flex-row  items-center absolute z-25 w-full h-full gap-y-10 gap-x-20 max-w-screen-lg'>
          <div className='pt-10'>
            <p  className='sub-heading md:text-2xl text-lg'>Be With Me !</p>
            <h1 className='moomin-heading md:text-[70px] text-[50px]'>I'm $MUMIN</h1>
            <p  className='sub-heading md:text-2xl  text-lg'>Embrace the blockchain magic of Moominvalley </p> <br/>
            <div className=''> 
              <a className='mr-10 text-xl text-center font-bold text-[#fff] bg-[#c72727] shadow-md shadow-black cursor-pointer p-3 hover:transition-shadow hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fff] sm:hover:shadow-lg sm:hover:shadow-black '
                href='/whitepaper.pdf'>
                WHITEPAPER
              </a>
              <a className=' text-xl text-center font-bold text-[#fff] bg-[#c72727] shadow-md shadow-black cursor-pointer p-3 hover:transition-shadow hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fff] sm:hover:shadow-lg sm:hover:shadow-black '
                href='/MUMIN-BASE-AUDIT-DRAFT.pdf'>
                AUDIT DOCUMENT
              </a>
              <LandingCoins/>
            </div>
          </div>

          <div>
            <Image
              alt={`${name}-image`}
              className="md:h-[21rem] md:w-[20rem] w-full h-full object-cover "
              // placeholder="blur"
              priority
              src={logoGreenSrc}
            />
            {/* <h1 className='moomin-heading text-5xl'>MOOMIN COIN</h1> */}
            {/* <p  className='sub-heading text-2xl'>Magic of Moomin Valley</p> */}
          </div>

        </div>
        {/* <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div> */}
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
