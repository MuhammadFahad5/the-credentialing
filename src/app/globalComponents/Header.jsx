'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import main_Logo from '../../../public/logo/the_credentialing_logo.svg'
import hame_burger_menu from '../../../public/logo/burger-menu.png'
import { FaAngleDown, FaInstagram, FaPhone, } from "react-icons/fa";
import { TiLocation, TiSocialLinkedin } from "react-icons/ti";
import { FaAngledown, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const [hoveredTab, setHoveredTab] = useState(false);

    const handleMouseEnter = () => {
        setHoveredTab(true);
    };

    const handleMouseLeave = () => {
        setHoveredTab(false);
    };
    const isActive = (path) => {

        return pathname === path ||
            pathname === path + '/commercial-insurance' ||
            pathname === path + '/government-insurance' ||
            pathname === path + '/aboutus' ||
            pathname === path + '/contactus' ? 'active-nav-tab' : ''
    }

    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileServicePages, setMobileServicePages] = useState(false)
    const [mobileCompanyPages, setMobileCompanyPages] = useState(false)
    const handleServiceClick = () => {
        setMobileServicePages(!mobileServicePages);
    };
    const handleMobileClick = () => {
        setMobileCompanyPages(!mobileCompanyPages)
    }

    return (
        <>
            <nav className="w-full fixed top-0 left-0 right-0 z-[100] bg-white border-b-[1px] border-[#00000008]">
                <div className='my-container'>
                    <div className='flex items-center w-full justify-between px-3'>
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
                            <button className=" flex items-center text-primary rounded-md ">
                                <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Hamberger menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                {/* <Image
                                    src={hame_burger_menu}
                                    width={250}
                                    height={48}
                                    alt="LOGO The Credentialing"
                                    className="w-full max-w-[55px]"
                                /> */}
                            </button>
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <ul className='flex ml-12 xl:ml-24'>
                                <li
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/')}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                ><Link href="/">Home</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list header-nav-list-service ${hoveredTab ? '' : isActive('/service')}`}>
                                    <Link href="#">Services</Link>

                                    <div className='header-service-inner-pages -ml-2'>
                                        <ul>
                                            <li className='header-nav-list-inner'><Link href="/service/commercial-insurance"> Commercial Insurance Credentialing</Link></li>
                                            <li className='header-nav-list-inner'><Link href="/service/government-insurance"> Government Insurance Credentialing</Link></li>
                                            <li className='header-nav-list-inner'><Link href="/service/ipa-enrollment"> IPA Enrollment Services</Link></li>
                                            <li className='header-nav-list-inner'><Link href="/service/insurance-contract-rate-negotiations"> Insurance Contract Rate Negotiations</Link></li>
                                            <li className='header-nav-list-inner rounded-[5px]'><Link href="/service/revalidation-and-recredentialing">Revalidation And Recredentialing</Link></li>
                                        </ul>

                                    </div>
                                </li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/pricing')}`}><Link href="/pricing">Pricing</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/forum')}`}><Link href="/forum">forum</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`header-nav-list ${hoveredTab ? '' : isActive('/blogs')}`}><Link href="/blogs">blogs</Link></li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    // className='header-nav-list header-nav-list-service'>
                                    className={`header-nav-list header-nav-list-service ${hoveredTab ? '' : isActive('')}`}>
                                    <Link href="#">company</Link>
                                    <div className='header-service-inner-pages -ml-2'>
                                        <ul>
                                            <li className='header-nav-list-inner'><Link href="/about-us">About Us</Link></li>
                                            <li className='header-nav-list-inner rounded-[5px]'><Link href="/contactus">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="hidden lg:flex flex-wrap sm:flex-nowrap items-center gap-1 px-2">
                            <FaFacebookF size={20} className=" cursor-pointer bg-white transition-all hover:bg-[#3b5a9a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                            <FaXTwitter size={20} className="cursor-pointe bg-white transition-all hover:bg-[#0073b2] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />

                            <TiSocialLinkedin size={20} className="cursor-pointer bg-white transition-all hover:bg-[#1aa9e1] rounded-full text-[#222] hover:text-white w-[32px] h-[32px] p-[6px]" />
                            <FaInstagram size={20} className="cursor-pointe bg-white transition-all hover:bg-[#7c4a3a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                        </div>

                        <div className="hidden lg:flex">
                            <div className='mx-2'>
                            </div>
                            <div>
                                <Link href='/signin'>
                                    <button className='bg-primary hover:bg-[#00a1f2] text-white rounded-[4px] px-[15px] py-[9px] text-[14px] font-medium'>Sign In</button>
                                </Link>
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
                        <li className='header-nav-list-mobile'><Link href="/">Home</Link></li>
                        <li className={`header-nav-list-mobile ${mobileServicePages ? '!pb-0 !border-b-0' : ''}`}>
                            <div
                                className='flex w-full justify-between items-center cursor-pointer'
                                onClick={() => setMobileServicePages(handleServiceClick)}
                            >
                                {/* <Link href="#">Services</Link><FaAngleDown size={15} className="text-primary mr-1" /> */}
                                <span>Services</span><FaAngleDown size={15} className="text-primary mr-1" />
                            </div>
                            {
                                mobileServicePages &&
                                <div className='header-service-inner-pages-mobile'>
                                    <ul>
                                        <li className='header-nav-list-inner'><Link href="/service/commercial-insurance"> Commercial Insurance Credentialing</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/government-insurance"> Government Insurance Credentialing</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/ipa-enrollment"> IPA Enrollment Services</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/insurance-contract-rate-negotiations"> Insurance Contract Rate Negotiations</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/service/revalidation-and-recredentialing">Revalidation And Recredentialing</Link></li>
                                    </ul>

                                </div>
                            }
                        </li>
                        <li className='header-nav-list-mobile'><Link href="/pricing">Pricing</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/forum">forum</Link></li>
                        <li className='header-nav-list-mobile'><Link href="/blogs">blogs</Link></li>
                        <li className={`header-nav-list-mobile ${mobileCompanyPages ? '!pb-0 !border-b-0' : ''}`}>
                            <div
                                className='flex w-full justify-between items-center cursor-pointer'
                                onClick={() => setMobileCompanyPages(handleMobileClick)}
                            >
                                {/* <Link href="#">Company</Link><FaAngleDown size={15} className="text-primary mr-1" /> */}
                                <span>Company</span><FaAngleDown size={15} className="text-primary mr-1" />
                            </div>
                            {
                                mobileCompanyPages &&
                                <div className='header-service-inner-pages-mobile'>
                                    <ul>
                                        <li className='header-nav-list-inner'><Link href="/about-us"> About US</Link></li>
                                        <li className='header-nav-list-inner'><Link href="/contactus"> Contact Us</Link></li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>

                </div>
                <div className="mt-auto">
                    <div className="pt-6">
                       
                        <a className="block m-1 bg-primary border border-gray-300 hover:bg-gray-100 text-gray-300  px-4 py-3 mb-3 text-sm text-center font-semibold rounded-md" href="/signin">
                            Sign in
                        </a>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1 justify-center">
                            <FaFacebookF size={20} className=" cursor-pointer bg-white transition-all hover:bg-[#3b5a9a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                            <FaXTwitter size={20} className="cursor-pointe bg-white transition-all hover:bg-[#0073b2] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />

                            <TiSocialLinkedin size={20} className="cursor-pointer bg-white transition-all hover:bg-[#1aa9e1] rounded-full text-[#222] hover:text-white w-[32px] h-[32px] p-[6px]" />
                            <FaInstagram size={20} className="cursor-pointe bg-white transition-all hover:bg-[#7c4a3a] rounded-full text-[#222] hover:text-white w-[28px] h-[28px] p-[6px]" />
                        </div>

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






