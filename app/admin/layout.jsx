import '../../public/assets/plugins/global/plugins.bundle.css';
import '../../public/assets/css/style.bundle.css';
import Header from './conpoments/Header';
import Toolbar from './conpoments/Breadcrumb';
import Footer from './conpoments/Footer';

import Script from 'next/script';
import { Inter } from '@next/font/google'
const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export default function RootLayout({ children }) {
  var hostUrl = process.env.APP_URI;
  return (
    <html lang="en" data-bs-theme="light">

      <head />
      <body id="kt_body" className={'header-extended header-fixed header-tablet-and-mobile-fixed'}>
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
              <Toolbar />
              {children}
              <Footer />
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Root*/}
      </body>

      <Script src={'assets/plugins/global/plugins.bundle.js'} />
      <Script src={'assets/js/scripts.bundle.js'} />
      <Script src={'assets/plugins/custom/datatables/datatables.bundle.js'} />
      <Script src={'assets/plugins/custom/fullcalendar/fullcalendar.bundle.js'} />

      {/*begin::Custom Javascript(used for this page only)*/}
      <Script src={'assets/js/widgets.bundle.js'}></Script>
      <Script src={'assets/js/custom/widgets.js'}></Script>
      <Script src={'assets/js/custom/apps/chat/chat.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/upgrade-plan.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/create-campaign.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/create-app.js'}></Script>
      <Script src={'assets/js/custom/utilities/modals/users-search.js'}></Script>
      {/*end::Custom Javascript*/}
    </html>
  )
}
