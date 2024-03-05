"use client"
import Card from '@/components/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImportantTask = () => {

    const [important, setImportant] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get('/api/important')
            setImportant(res.data)
            console.log(res.data, "res.data important")
        }
        fetchData()
    }, [])


    return <>

        <div className='mt-4 p-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
            {important.map((item) => (
                <Card item={item} key={item._id} />
            ))}
        </div>

    </>
}

export default ImportantTask