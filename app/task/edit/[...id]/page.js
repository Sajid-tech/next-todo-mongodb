"use client"
import Modal from '@/components/Modal'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'


import React, { useEffect, useState } from 'react'



const EditTask = () => {
    const param = useParams()
    const { id } = param
    console.log("edit id", id)

    const [taskInfo, setTaskInfo] = useState(null)

    useEffect(() => {
        axios.get(`/api/tasks/${id}`)
            .then(response => {
                setTaskInfo(response.data)
                console.log("settaskinfo", response.data)
            })

    }, [id])

    return <>
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Edit the Task</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Edit Your created Task! </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Link
                            href={"/task"}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> All Task </span>

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
        <div className="max-sm:p-4 mt-6 lg:mt-0">

            <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center sm:text-left">
                    <p className="my-4 flex flex-col items-center gap-2 ">

                        <span className="text-green-600">{taskInfo?.title} </span>
                        <span className='text-red-600 '>Date: {taskInfo?.date.substring(0, 10)}</span>
                    </p>
                </div>
            </div>
            <hr className="my-8 h-px border-0 bg-gray-300" />
            <div className="my-10 max-sm:my-12">
                {taskInfo && (
                    <Modal  {...taskInfo} />
                )}
            </div>
        </div>
    </>
}

export default EditTask