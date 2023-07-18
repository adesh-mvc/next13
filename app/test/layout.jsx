"use client"

import React, { useEffect, useState } from 'react';
import ClientProviders from '@/lib/apollo-client';


export default function TestLayout({ children }) {


    return (
        <>



            <ClientProviders>
                {/*    <Toolbar /> */}
                {children}
            </ClientProviders>

        </>
    )
}

