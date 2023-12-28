"use client"

import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light" >

      <head />

      <body id="kt_body" className='header-extended header-fixed header-tablet-and-mobile-fixed' data-kt-drawer-header-menu="on" data-kt-drawer="on">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
