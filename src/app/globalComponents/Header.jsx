'use client'
import React, { useState } from 'react'
// import ThemeSwitch from '../themeHelpers/themeSwitch'
import Image from 'next/image'
import Link from 'next/link'
import main_Logo from '../../../public/logo/the_credentialing_logo.svg'
import { TiSocialFacebook } from "react-icons/ti";
import { Button } from "antd";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <nav className="fixed w-full top-0 z-[100] bg-white">
                <div className='my-container'>
                    <div className='my-row justify-between'>
                    <Link href="#">
                        <Image
                            src={main_Logo}
                            width={250}
                            height={48}
                            alt="LOGO The Credentialing"
                            className="w-full max-w-[250px]"
                        />
                    </Link>
                    <div className="lg:hidden" onClick={() => setMobileMenu(true)}>
                        <button className="navbar-burger flex items-center text-primary border-2 border-primary rounded-md p-1" id="navbar_burger">
                            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Hamberger menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex justify-center items-center">
                        <ul className='flex '>
                            <li className='header-nav-list'><Link href="#">Home</Link></li>
                            <li className='header-nav-list'><Link href="#">Services</Link></li>
                            <li className='header-nav-list'><Link href="#">Pricing</Link></li>
                            <li className='header-nav-list'><Link href="#">forum</Link></li>
                            <li className='header-nav-list'><Link href="#">blogs</Link></li>
                            <li className='header-nav-list'><Link href="#">company</Link></li>
                        </ul>

                    </div>
                    
                    <div className="hidden lg:flex">
                        <div className='mx-2'>
                        </div>
                        <div>
                            <Button type="primary" size='large'>Sign in</Button>
                        </div>

                    </div>
                    </div>
                </div>
            </nav>

            
            <div className={`fixed z-[999] inset-0 bg-gray-800 opacity-50 ${mobileMenu ? '' : 'hidden'}`} onClick={() => setMobileMenu(false)} />
            <nav className={`transition-all fixed z-[1000] bg-white top-0 ${mobileMenu ? 'left-0' : 'left-[-100%]'} bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto`}>
                <div className="flex items-center justify-between mb-8">
                <Link href="#">
                        <Image
                            src={main_Logo}
                            width={250}
                            height={48}
                            alt="LOGO The Credentialing"
                        className="w-full max-w-[250px]"
                        />
                    </Link>
                    <button className="navbar-close" onClick={() => setMobileMenu(false)}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className=" ">
                <ul className='flex flex-col'>
                            <li className='header-nav-list-mobile'><Link href="#">Home</Link></li>
                            <li className='header-nav-list-mobile'><Link href="#">Services</Link></li>
                            <li className='header-nav-list-mobile'><Link href="#">Pricing</Link></li>
                            <li className='header-nav-list-mobile'><Link href="#">forum</Link></li>
                            <li className='header-nav-list-mobile'><Link href="#">blogs</Link></li>
                            <li className='header-nav-list-mobile'><Link href="#">company</Link></li>
                        </ul>
                    
                </div>
                <div className="mt-auto">
                    <div className="pt-6">
                        <div className='mb-3'>
                        </div>

                        <a className="block m-1 bg-primary border border-gray-300 hover:bg-gray-100 text-gray-300  px-4 py-3 mb-3 text-sm text-center font-semibold rounded-md" href="/login">
                            Sign in
                        </a>
                        
                    </div>
                    <p className="my-4 text-xs text-center text-gray-400">
                        <span>The Credentialing Copyright © 2024</span>
                    </p>
                </div>
            </nav>


        </>
    )
}

export default Header
