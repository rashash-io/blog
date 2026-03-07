"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './theme-toggle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const NavBar = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100);
        setTimeout(() => {
            setProgress(100)
        }, 700);


    }, [pathname])

    useEffect(() => {
        setProgress(0);
    }, [])


    return (
        <>
            <nav className=' flex items-center justify-between px-8 py-2 sticky top-0 z-10 border-b-4 bg-background/80 backdrop-blur-sm'>
                <LoadingBar
                    color="#db2777"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
                <Link href="/" >
                    <Image src="/redLogo.png" alt="RA$HASH Logo" width={72} height={72} />
                </Link>
                <ul className='w-full hidden md:flex md:justify-end justify-center items-center space-x-4 font-bold text-lg'>
                    <li className=''>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="https://portfolio.rashash.dev">Portfolio</Link>
                    </li>

                </ul>
                <div className='flex items-center gap-2 mx-2'>
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <div className='md:hidden'>
                                <HamburgerMenuIcon className='size-6' />
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>

                                    <ul className='p-6 w-full justify-center items-center space-x-4 font-bold text-lg'>
                                        <li className=''>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="https://portfolio.rashash.dev">Portfolio</Link>
                                        </li>
                                    </ul>


                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>


        </>
    )
}

export default NavBar