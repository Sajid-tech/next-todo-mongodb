"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const ShareTask = () => {
    const { session } = useSession()
    const [share, setShare] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [selectedItemToAdd, setSelectedItemToAdd] = useState('')


    const [getData, setGetData] = useState([])



    // for post 

    const [title, setTitle] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/users')

            setShare(res.data)

        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/shares')

            setGetData(res.data)
            console.log("res.dat.get data", res.data)
        }

        fetchData()
    }, [])

    const handleSelectChange = (event) => {
        setSelectedItemToAdd(event.target.value);
    };

    const handleAddItemClick = () => {
        if (selectedItemToAdd && !selectedItems.includes(selectedItemToAdd)) {
            const selectedItemName = share.find(item => item._id === selectedItemToAdd)?.name;
            if (selectedItemName) {
                setSelectedItems([...selectedItems, selectedItemName]);
            }
        }
        setSelectedItemToAdd('');
    };

    const handleRemoveItemClick = (itemName) => {
        setSelectedItems(selectedItems.filter(item => item !== itemName));
    };

    console.log("selecteditems", selectedItems)



    // post the data on share 
    const createProduct = async () => {



        const data = { title, selectedItems }
        await axios.post('/api/shares', data)

    }
    return <>
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Lets write a new blog post! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> Share Task </span>

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
                        </button>


                    </div>
                </div>
            </div>
        </header>

        {/* <div>
            {share.map((item) => (
                <div key={item._id}>
                    {item?.name}
                </div>
            ))}
        </div> */}

        {/* <div className="mt-8 mx-auto max-w-screen-lg">
            <select
                multiple
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                value={selectedItems}
                onChange={(e) => handleCheckboxChange(e.target.value)}
            >
                {share.map((item) => (
                    <option key={item._id} value={item._id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="mt-4 mx-auto max-w-screen-lg">
            <h2 className="text-lg font-semibold">Selected Items:</h2>
            <ul>
                {selectedItems.map((itemId) => (
                    <li key={itemId}>
                        {share.find((item) => item._id === itemId)?.name}
                    </li>
                ))}
            </ul>
        </div> */}

        <form onSubmit={createProduct} className='border border-r-2 border-red-500 p-4'>
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
            <div className='mt-4'>
                <div className="mt-8 mx-auto max-w-screen-lg">
                    <label htmlFor="example1" className="mb-1 block text-lg font-medium text-gray-700 py-1">Select Category</label>
                    <select
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                        value={selectedItemToAdd}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select User</option>
                        {share

                            .map((item) => (
                                !selectedItems.includes(item.itemName) && (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                )
                            ))
                        }
                    </select>
                    {selectedItemToAdd && (
                        <button
                            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleAddItemClick}
                        >
                            Add
                        </button>
                    )}
                </div>

                <div className="mt-4 mx-auto max-w-screen-lg">
                    <h2 className="text-lg font-semibold">Selected Items:</h2>
                    <ul>
                        {selectedItems.map((itemId) => (
                            <li key={itemId} className="flex items-center justify-between">
                                <span>{share.find((item) => item._id === itemId)?.name}</span>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => handleRemoveItemClick(itemId)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* upload button */}
            <div className="mx-auto my-4 ">
                <button
                    className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="#"
                >
                    <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                        save share task
                    </span>
                </button>
            </div>
        </form>


        <div className='mt-10'>


            {getData.map((item) => (
                <div key={item._id}>
                    {item?.title}
                </div>
            ))}
        </div>
    </>
}

export default ShareTask