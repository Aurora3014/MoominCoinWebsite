import Image from 'next/image';
import {FC, memo} from 'react';

import {coinLinks} from '../../../data/data'

const LandingCoin: FC = memo(() => {
  return (
    <div className='flex justify-around pt-10'>
        {coinLinks.map((link, index) => (
            <a className='' href={link.href} key={index} target="_blank">
                <Image
                    alt={`${link.label}-image`}
                    className="w-[3rem] h-[3rem] object-cover"
                    // placeholder="blur"
                    priority
                    src={link.Icon}
                />
            </a>
        ))}
    </div>
  );
});


export default LandingCoin;
