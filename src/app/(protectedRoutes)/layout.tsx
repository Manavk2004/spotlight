import { onAuthenticateUser } from '@/actions/auth'
import  Sidebar from '../../components/ReusableComponents/LayoutComponents/Sidebar'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import Header from '../../components/ReusableComponents/LayoutComponents/Header'

type Props = {
    children: React.ReactNode
}

async function Layout({ children }: Props) {

    const userExist = await onAuthenticateUser()

    if(!userExist.user){
        redirect('/sign-in')
    }

    return (
        <div className='flex w-full min-h-screen'>
            
            <Sidebar />
            <div className='flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx-auto'>
                <Header />
                {children}
            </div>
            
        </div>
    )
}

export default Layout