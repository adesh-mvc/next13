"use client"

import React, { useEffect, useState } from 'react';
import '@/public/assets/plugins/global/plugins.bundle.css';
import '@/public/assets/css/style.bundle.css';



// import OtherElements from './component/OtherElements';

import Script from 'next/script';
import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [themeMode, setThemeMode] = useState('light');
  useEffect(() => {
    setThemeMode('light')
  })
  var hostUrl = process.env.APP_URI;
  return (
    <html lang="en" data-bs-theme={themeMode}>

      <head />

      <Script src={`assets/plugins/global/plugins.bundle.js`} />
      <Script src={`assets/js/scripts.bundle.js`} />
      <body >




        {children}

      </body>

    </html >
  )
}
