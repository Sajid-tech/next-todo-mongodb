/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Header = () => {

    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen)

    }

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a navigation link is clicked
    }

    if (session) {
        return <>
            {/* Hamburger menu icon for small screens */}
            <button className=" lg:hidden fixed text-blue-900 top-3 right-3" onClick={toggleNav}>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
            {/* max-w-72    p-[50px]  */}
            {/* {isOpen && (
                
            )} */}

            <header className={`bg-orange-100 fixed max-w-72 p-[50px] ${isOpen ? " " : "hidden lg:block  "} `}>
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className=" min-h-screen  flex flex-col items-center justify-between">
                        <div className="md:flex mt-4 md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <span className="sr-only">Home</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>


                            </a>
                        </div>

                        <div >
                            <nav aria-label="Global">
                                <ul className="flex items-center flex-col gap-6 text-md ">
                                    <li>
                                        <Link className="text-blue-500  transition hover:text-gray-500/75" onClick={handleLinkClick} href="/"> Dashboard </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" onClick={handleLinkClick} href="/task"> All Task  </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" onClick={handleLinkClick} href="/important"> Important </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" onClick={handleLinkClick} href="/completed"> completed </Link>
                                    </li>

                                    <li>
                                        <Link className="text-red-500 transition hover:text-gray-500/75" onClick={handleLinkClick} href="/share"> Task Share </Link>
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div className="mb-20 ">

                            <Link
                                onClick={handleLinkClick}
                                href="/setting"
                                className="rounded-md bg-teal-600  px-5 py-2.5 text-sm font-medium text-white shadow"

                            >
                                Setting
                            </Link>


                            {/* <Link
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                href="#"
                            >
                                Register
                            </Link> */}

                        </div>


                    </div>
                </div>

            </header >




        </>
    }




}

export default Header