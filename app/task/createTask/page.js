
import Modal from '@/components/Modal'
import React from 'react'

const CreateTask = () => {

    return <>
        <section className="p-4 mt-6 lg:mt-0">
            <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center sm:text-left">
                    <p className="mt-1.5 text-lg text-red-500">
                        Fill all the fields to add a new task!
                    </p>
                </div>
            </div>

            <hr className="my-8 h-px border-0 bg-gray-300" />
            <div className="my-10 max-sm:my-12">
                <Modal />
            </div>

        </section>
    </>
}

export default CreateTask