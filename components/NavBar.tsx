import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <nav className='border flex items-center justify-between m-6 p-10'>
                <Image src="/redLogo.png" alt="RA$HASH Logo" width={72} height={72} />
                <ul className='flex justify-center space-x-4 border'>
                    <li className='mx-10 border border-amber-500'>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className='h-12'>NavBar</div>
        </>
    )
}

export default NavBar