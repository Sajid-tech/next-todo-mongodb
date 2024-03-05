import Link from 'next/link'
import React from 'react'

const Card = ({ item, key }) => {


    return <>
        <div key={item._id}>
            <div className=" mt-2 max-w-md rounded-lg bg-green-200 shadow">
                <div className="p-4 flex flex-col h-full"> {/* Use flexbox for column layout */}
                    <div className="mb-4"> {/* Add margin-bottom for spacing */}
                        <p className="text-sm text-primary-500">{item?.userName} • <time>{item?.createdAt.substring(0, 10)}</time></p>
                        <p>{item?.date.substring(0, 10)}</p>
                        <h3 className="text-xl font-medium text-gray-900">{item?.title}</h3>
                    </div>
                    <div className="flex-grow"> {/* Allow description to expand */}
                        <p className="text-gray-500 overflow-y-auto">{item?.description}</p> {/* Make description scrollable */}
                    </div>
                    <div className="mt-4 flex justify-between ">
                        {/* ... your existing code for badges ... */}

                        <div className='flex gap-2'>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"> InComplete </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-600"> important </span>
                        </div>

                        <div className=' flex gap-2'>
                            <Link className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600" href={`/task/edit/` + item._id} > Edit </Link>
                            <Link className='inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600' href={`/task/delete/` + item._id}>Delete</Link>
                            {/* <button onClick={handleDelete} className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600"> Delete </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </>
}

export default Card