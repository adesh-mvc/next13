
import '@/public/assets/plugins/global/plugins.bundle.css';
import '@/public/assets/css/style.bundle.css';



// import OtherElements from './component/OtherElements';

import Script from 'next/script';



export default function RootLayout({ children }) {


  // useEffect(() => {
  //   setThemeMode('light')
  // })

  return (
    <html lang="en">

      <head />

      <Script src={`assets/plugins/global/plugins.bundle.js`} />
      <Script src={`assets/js/scripts.bundle.js`} />
      <body >
        {children}

      </body>

    </html >
  )
}
