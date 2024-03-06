"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Modal = ({
    _id,
    title: existingTitle,
    description: existingDescription,
    date: existingDate,
    isImportant: existingIsImportant,
    isCompleted: existingIsCompleted,

}) => {

    const [redirect, setRedirect] = useState(false)

    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [date, setDate] = useState(existingDate || '');
    const [isImportant, setIsImportant] = useState(existingIsImportant || false);
    const [isCompleted, setIsCompleted] = useState(existingIsCompleted || false);
    const router = useRouter()



    // send the data to db 
    async function createProduct(e) {
        e.preventDefault();





        // Now you can make the API request to save the product
        const data = {
            title,
            description,
            date,
            isImportant,
            isCompleted,
        };

        if (_id) {
            await axios.put('/api/tasks', { ...data, _id })
            router.back()
        }

        else {
            await axios.post('/api/tasks', data);
            setRedirect(true)
        }


    }

    if (redirect) {
        router.push('/task')
        return null
    }


    return <>

        <form onSubmit={createProduct} className='mx-auto max-w-screen-sm'>
            {/* Title  */}
            <div className='mx-auto my-4'>
                <div>
                    <label htmlFor="example1" className="mb-1 block text-lg font-medium text-gray-700 py-1">Title</label>
                    <input type="text" id="example1" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                        placeholder="Product Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>


            {/* Description  */}
            <div className='mx-auto my-4'>
                <div>
                    <label htmlFor="example1" className="mb-1 block text-lg font-medium text-gray-700 py-1">Description</label>
                    <textarea rows={5} type="text" id="example1" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3" placeholder=" Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>

            {/* date  */}


            <div className="mx-auto my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* is completed and isimportant */}
            <div className="mx-auto my-4">
                <input
                    type="checkbox"
                    id="isImportant"
                    name="isImportant"
                    checked={isImportant}
                    onChange={(e) => setIsImportant(e.target.checked)}
                    className="mr-2"
                />
                <label className="text-gray-700 text-sm font-bold" htmlFor="isImportant">Important</label>
            </div>
            <div className="mx-auto my-4">
                <input
                    type="checkbox"
                    id="isCompleted"
                    name="isCompleted"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                    className="mr-2"
                />
                <label className="text-gray-700 text-sm font-bold" htmlFor="isCompleted">Completed</label>
            </div>

            {/* upload button */}
            <div className='mx-auto my-4'>
                <button className="group relative inline-block focus:outline-none focus:ring w-full" type='submit'>
                    <span
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 w-full"
                    ></span>

                    <span
                        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75 w-full"
                    >
                        Save Product
                    </span>
                </button>
            </div>



        </form>
    </>
}

export default Modal






// <div className="mb-4">
// <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date:</label>
// <input
//     type="date"
//     id="date"
//     name="date"
//     value={date}
//     onChange={(e) => setDate(e.target.value)}
//     required
//     className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
// />
// </div>


