import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description1, description2} = aboutData;
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-5': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-2 flex justify-center">
              <Image alt="about-me-image" className="md:h-full md:w-full h-[60%] w-[60%]  object-cover" src={profileImageSrc} />
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col justify-center gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col  gap-y-5 md:ml-10">
            <h2 className="text-3xl font-bold text-gray">About me</h2>
            <p className="prose prose-sm text-gray-900 sm:prose-base md:text-xl">{description1}</p>
            <p className="prose prose-sm text-gray-900 sm:prose-base md:text-xl">{description2}</p>
            <p className="prose prose-sm text-gray-900 sm:prose-base md:text-xl">MUMIN aims to combine economic benefit and social impact in an innovative way, attracting users who want to support charity while investing in cryptocurrencies.</p>
          </div>
          
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
