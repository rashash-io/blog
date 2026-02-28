"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './theme-toggle'

const NavBar = () => {
    return (
        <>
            <nav className=' flex items-center justify-between px-8 py-2 sticky top-0 z-10 border-b-4 bg-background/80 backdrop-blur-sm'>
                <Image src="/redLogo.png" alt="RA$HASH Logo" width={72} height={72} />
                <ul className='flex justify-center items-center space-x-4 font-bold text-lg'>
                    <li className=''>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className='buttons flex items-center space-x-2'>
                        <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
                        <Link href={"/signup"} className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar