import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import './app.css';
import './Font-Awesome-4.7.0/css/font-awesome.css'

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
