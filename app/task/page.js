"use client"
import Card from '@/components/Card'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [post, setPost] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get('/api/tasks')
            setPost(res.data)
            console.log(res.data, "res.data")
        }
        fetchData()
    }, [])


    return <>
        <div>
            <header className="bg-gray-50 ">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">ALL TASKS</h1>

                            <p className="mt-1.5 text-sm text-gray-500">Lets create a new task 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">


                            <Link
                                href="/task/createTask"
                                className="block rounded-lg bg-indigo-600 p-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                Create task
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className=' mt-4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8'>
                {post.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
        </div>

    </>
}

export default Page