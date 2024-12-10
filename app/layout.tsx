import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Property Application | Find Your Dream Home',
    description: 'Find Your Dream Home',
    keywords: 'lease, rent , find home, find properties'
}

const MainLayout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <html>
            <body>
                <Navbar/>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout