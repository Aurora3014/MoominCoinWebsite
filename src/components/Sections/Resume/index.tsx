import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import profileImageSrc from '../../../images/tokenomics.png'
import Section from '../../Layout/Section';

const Resume: FC = memo(() => {
  const description1 = `50% of the tokens were sold in pre-sell and 37% were added to the liquidity pool, LP tokens are burnt, and contract is renounced. 3.855% magical tokens were left with contract. The remaining 9.145% of the supply is being used for Charity.`;
  const description2 = `There is a 7.77% sell/buy tax fee which is distributed as a whole to holders in ETH.`;

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-5': !!profileImageSrc})}>
        
        <div className={classNames('col-span-1 flex flex-col justify-center gap-y-6', {'md:col-span-2': !!profileImageSrc})}>
          <div className="flex flex-col  gap-y-5 md:ml-10">
            <h2 className="text-3xl font-bold text-gray">Tokenomics</h2>
            <p className="prose prose-sm text-gray-900 sm:prose-base md:text-xl">{description1}</p>
            <p className="prose prose-sm text-gray-900 sm:prose-base md:text-xl">{description2}</p>
          </div>
          
        </div>

        {!!profileImageSrc && (
          <div className="col-span-3 justify-center">
              <Image alt="about-me-image" className="md:h-[100%] md:w-[100%] h-[100%] w-[100%] " src={profileImageSrc} />
          </div>
        )}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
