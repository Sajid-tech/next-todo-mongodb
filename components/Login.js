/* eslint-disable @next/next/no-img-element */
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className="flex flex-col  min-h-screen justify-center items-center  max-w-4xl m-auto">
            <h1 className=" text-4xl font-bold max-w-lg text-center">Welcome to the Task Manager website</h1>
            <p className="font-medium my-4">An account is needed to view this page
            </p>

            <button
                onClick={() => signIn()}
                className="inline-block rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
            >
                Sign In With Google
            </button>
            <div className=" flex gap-2 mt-2">
                <Link href={"https://github.com/Sajid-tech"} target="no_blank" className="border border-r-2 border-blue-300 rounded-md px-2.5 py-1.5 text-green-600  hover:text-orange-600 font-bold">Github</Link>
                <Link href={"https://www.linkedin.com/in/sajid-h-8300a11ab"} target="no_blank" className="border border-r-2 border-blue-300 rounded-md px-2.5 py-1.5 text-green-600  hover:text-orange-600 font-bold">Linkedin</Link>
            </div>

        </div>

    )
}

export default Login