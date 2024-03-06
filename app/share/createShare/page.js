"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CreateShare = () => {
    const router = useRouter()

    // for user get category 
    const [share, setShare] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [selectedItemToAdd, setSelectedItemToAdd] = useState('')

    // for post 

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isImportant, setIsImportant] = useState(false)
    const [completedAt, setCompletedAt] = useState('')

    // for get the user for form
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/users')

            setShare(res.data)

        }

        fetchData()
    }, [])

    //category
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
    const createProduct = async (e) => {
        e.preventDefault();





        const data = { title, selectedItems, description, isImportant, completedAt }
        await axios.post('/api/shares', data)
        router.back()

    }


    return <>
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Create ShareTask TODOs</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Lets create a new ShareTask TODOs! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Link
                            href={"/share"}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-blue-300 px-5 py-3 text-black transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> All ShareTask</span>

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
        <section className="p-4 mt-6 lg:mt-0">
            <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center sm:text-left">
                    <p className="mt-1.5 text-lg text-red-500">
                        Fill all the fields to create a new ShareTask!
                    </p>
                </div>
            </div>

            <hr className="my-8 h-px border-0 bg-gray-300" />
            <div className="my-10 max-sm:my-12">
                <form onSubmit={createProduct} className='border border-r-2 border-green-500 p-4'>
                    {/* title  */}
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
                    {/* for select user category  */}
                    <div className=' mx-auto my-4'>
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
                                        !selectedItems.includes(item.name) && (
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
                                {selectedItems.map((itemName) => (
                                    <li key={itemName} className="flex items-center justify-between">
                                        <span>{itemName}</span>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                            onClick={() => handleRemoveItemClick(itemName)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* completedAt  */}

                    <div className="mx-auto my-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Compeleted By:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={completedAt}
                            onChange={(e) => setCompletedAt(e.target.value)}
                            required
                            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* is important  */}
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

                    {/* upload button */}
                    <div className="mx-auto my-4 flex justify-center">
                        <button
                            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="#"
                        >
                            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                                Save ShareTask
                            </span>
                        </button>
                    </div>
                </form>
            </div>

        </section>
    </>
}

export default CreateShare