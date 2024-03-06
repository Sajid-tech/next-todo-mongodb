"use client"
import Card from '@/components/Card'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const ImportantTask = () => {
    const { data: session } = useSession()

    const [important, setImportant] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get('/api/important')
            setImportant(res.data)
            console.log(res.data, "res.data important")
        }
        fetchData()
    }, [])


    if (session) {
        return <>

            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Important Todos</h1>

                            <p className="mt-1.5 text-sm text-gray-500">See your important task and complete it first!</p>
                        </div>


                    </div>
                </div>
            </header>

            <div className='mt-4 p-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
                {important.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>

        </>
    }
}

export default ImportantTask