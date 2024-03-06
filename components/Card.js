
import Link from 'next/link'
import React from 'react'

const Card = ({ item, key }) => {

    return <>
        <div key={item._id}>
            <div className=" mt-2 max-w-md rounded-lg bg-green-100 shadow">
                <div className="p-4 flex flex-col h-full"> {/* Use flexbox for column layout */}
                    <div className="mb-4"> {/* Add margin-bottom for spacing */}
                        <p className="text-sm flex justify-between text-primary-500">{item?.userName}  <time>{item?.createdAt.substring(0, 10)}</time></p>
                        <h3 className="text-xl font-medium text-rose-900">{item?.title}</h3>
                    </div>
                    <div className="flex-grow"> {/* Allow description to expand */}
                        <p className="text-gray-500 overflow-y-auto">{item?.description}</p> {/* Make description scrollable */}
                    </div>
                    <div className='mt-2'>
                        <p className=' text-orange-600 text-sm text-right'>Complete By: {item?.date.substring(0, 10)}</p>
                    </div>
                    <div className="mt-4 flex justify-between ">
                        {/* ... your existing code for badges ... */}

                        <div className='flex gap-2'>

                            {/* {item.isCompleted ? ( // Single conditional expression
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                    Completed
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-gray-500">
                                    Incomplete
                                </span>
                            )} */}

                            <button className={`inline-flex items-center gap-1 rounded-full bg-${item.isCompleted ? 'green' : 'blue'}-50 px-2 py-1 text-xs font-semibold text-${item.isCompleted ? 'green' : 'gray'}-600`}>
                                {item.isCompleted ? 'Completed' : 'Incomplete'}
                            </button>
                            {item?.isImportant && ( // Show important badge only if isImportant is true
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-red-600">
                                    Important
                                </span>
                            )}
                        </div>

                        <div className=' flex gap-2'>
                            <Link className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600" href={`/task/edit/` + item._id} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                            </Link>
                            <Link className='inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600' href={`/task/delete/` + item._id}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>




    </>
}

export default Card