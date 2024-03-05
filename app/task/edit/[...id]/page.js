"use client"
import Modal from '@/components/Modal'
import axios from 'axios'
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
        <div className="max-sm:p-4 mt-6 lg:mt-0">

            <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center sm:text-left">
                    <p className="my-4 flex flex-col items-center gap-2 ">
                        <span className=' text-red-500 text-xl'>Editing </span>
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