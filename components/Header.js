/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { FaTasks } from "react-icons/fa";




const Header = () => {

    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);


    const toggleNav = () => {
        setIsOpen(!isOpen)

    }

    if (session) {
        return <>
            {/* Hamburger menu icon for small screens */}
            <button className=" lg:hidden absolute top-4 right-4" onClick={toggleNav}>
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
                                {/* <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58:7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                    </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>

                                {/* <FaTasks size={32} /> */}

                            </a>
                        </div>

                        <div >
                            <nav aria-label="Global">
                                <ul className="flex items-center flex-col gap-6 text-md ">
                                    <li>
                                        <Link className="text-blue-500  transition hover:text-gray-500/75" href="/"> Dashboard </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" href="/task"> All Task  </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" href="/important"> Important </Link>
                                    </li>

                                    <li>
                                        <Link className="text-green-500 transition hover:text-gray-500/75" href="/completed"> completed </Link>
                                    </li>

                                    <li>
                                        <Link className="text-red-500 transition hover:text-gray-500/75" href="/share"> Task Share </Link>
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div className="mb-20 ">

                            <button
                                className="rounded-md bg-teal-600  px-5 py-2.5 text-sm font-medium text-white shadow"
                                onClick={() => signOut()}
                            >
                                Logout
                            </button>


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