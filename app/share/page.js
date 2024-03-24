"use client"
import Login from '@/components/Login'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ShareTask = () => {
    const { data: session } = useSession()

    // get post 
    const [getData, setGetData] = useState([])


    // for get share post on body
    useEffect(() => {
        if (session) {
            const fetchData = async () => {
                const res = await axios.get('/api/shares')

                setGetData(res.data)
                console.log("res.dat.get data", res.data)
            }

            fetchData()
        }
    }, [session])


    if (session) {
        return <>
            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, <span className='text-orange-500'>{session?.user?.name}!</span></h1>

                            <p className="mt-1.5 text-md text-gray-500">Share your TODOs with your freinds!</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <Link
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-green-500 bg-green-200 px-5 py-3 text-orange-700 transition hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                                href="/share/createShare"
                            >
                                <span className="text-sm font-medium"> Create ShareTask </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>


                        </div>
                    </div>
                </div>
            </header>

            {/* card of share TODOs  */}
            <div className=' mt-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8'>


                {getData.map((item) => (
                    <div key={item._id}>
                        <div className=" mt-2 max-w-md rounded-lg bg-orange-100 shadow">
                            <div className="p-4 flex flex-col h-full"> {/* Use flexbox for column layout */}
                                <div className="mb-4"> {/* Add margin-bottom for spacing */}
                                    <p className="text-sm flex justify-between text-primary-500">{item?.userName}  <time>{item?.createdAt.substring(0, 10)}</time></p>
                                    <h3 className="text-xl font-medium text-rose-900">{item?.title}</h3>
                                </div>
                                <div className="flex-grow"> {/* Allow description to expand */}
                                    <p className="text-gray-500 overflow-y-auto">{item?.description}</p> {/* Make description scrollable */}
                                </div>
                                <div className='mt-2'>
                                    <p className=' text-green-600 text-sm text-right'>Complete By: {item?.completedAt.substring(0, 10)}</p>
                                </div>
                                <div className="mt-4 flex justify-between ">


                                    <div className='flex gap-2'>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-600">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            </svg>
                                            <span className=' text-md'>{item?.selectedItems.length}</span>
                                        </span>


                                        {item?.isImportant && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-600">
                                                Important
                                            </span>
                                        )}
                                    </div>

                                    <div className=' flex gap-2'>

                                        <Link className='inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600' href={`/share/delete/` + item._id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    }
    return <>
        <Login />
    </>
}

export default ShareTask