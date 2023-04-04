"use client"

import React, { useEffect, useState } from 'react';
import ClientProviders from '@/lib/apollo-client';
import '@/public/assets/plugins/global/plugins.bundle.css';
import '@/public/assets/css/style.bundle.css';



// import KTApp from '@/public/assets/js/KTApp';
// console.log('KTApp:', KTApp)


import Header from './component/Header';

import Footer from './component/Footer';
// import OtherElements from './component/OtherElements';

import Script from 'next/script';
import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export default function AdminLayout({ children }) {

  const [themeMode, setThemeMode] = useState(null);
  useEffect(() => {
    setThemeMode('light');

  }, []);

  return (
    <>
      <Script src={`/assets/plugins/global/plugins.bundle.js`} />
      <Script src={`/assets/js/scripts.bundle.js`} />


      <ClientProviders>

        <div id="kt_body" className="header-extended header-fixed header-tablet-and-mobile-fixed" data-bs-theme={themeMode}>
          {/*begin::Main*/}
          {/*begin::Root*/}
          <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="page d-flex flex-row flex-column-fluid">
              {/*begin::Wrapper*/}
              <div
                className="wrapper d-flex flex-column flex-row-fluid"
                id="kt_wrapper"
              >

                <Header />
                {/*    <Toolbar /> */}
                {children}
                <Footer />
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
          </div>
          {/*end::Root*/}
          {/*  <OtherElements /> */}
        </div>
      </ClientProviders>

      {/* <Script src={`${process.env.NEXTAUTH_URL}/assets/plugins/custom/datatables/datatables.bundle.js`} /> */}

      {/* <Script src={`${process.env.THEME_JS}plugins/custom/fullcalendar/fullcalendar.bundle.js`} /> */}
      {/* <Script src={`assets/plugins/custom/datatables/datatables.bundle.js`} /> */}
      {/*begin::Custom Javascript(used for this page only)*/}
      {/* <Script src={`assets/js/widgets.bundle.js`}></Script> */}
      {/*       <Script src={`assets/js/custom/widgets.js`}></Script>
      <Script src={`assets/js/custom/apps/chat/chat.js `}></Script> */}
      {/* <Script src={'assets/js/custom/utilities/modals/upgrade-plan.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/create-campaign.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/create-app.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/users-search.js'}></Script> */}
      {/*end::Custom Javascript*/}
    </>
  )
}

