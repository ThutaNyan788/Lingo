import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
    children: React.ReactNode
}

export default function MarketingLayout({ children }: Props) {
    return (
        <div>
            <Header/>
            <main className='min-h-screen flex flex-col
            justify-center items-center'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
