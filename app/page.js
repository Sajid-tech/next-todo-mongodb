"use client"
import Login from "@/components/Login"
import axios from "axios"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Home() {

  const { data: session } = useSession()
  const [totalTask, setTotalTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const [important, setImportant] = useState([])
  const [shares, setShares] = useState([])

  useEffect(() => {
    if (session) {
      axios.get("/api/tasks").then((response) => {
        setTotalTask(response.data);
      });
      axios.get("/api/completed").then((response) => {
        setCompletedTask(response.data);
      });
      axios.get("/api/important").then((response) => {
        setImportant(response.data);
      });
      axios.get("/api/shares").then((response) => {
        setShares(response.data);
      });
    }
  }, [session]);




  if (session) {
    return <>
      <header className="bg-gray-50 ">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, <span className="text-green-700">{session?.user?.name}</span></h1>

              <p className="mt-1.5 text-md text-gray-500 max-w-md">View the statistics about your business. Also manage and add products. 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                href={'/task'}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-500 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> Create Task </span>

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

              <button
                onClick={() => signOut()}
                target="_blank"
                className=" inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-500  px-5 py-3 text-sm font-medium text-orange-500 transition hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium">Logout</span>

              </button>
            </div>
          </div>
        </div>
      </header>

      <div className=" mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-green-200 flex items-center justify-center">
          <article
            className="flex max-md:flex-col items-end justify-between rounded-lg gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">Total Task</p>

              <p className="text-2xl font-medium text-gray-900">{totalTask?.length}</p>
            </div>


          </article>
        </div>
        <div className="h-32 rounded-lg bg-green-200 flex items-center justify-center">
          <article
            className="flex max-md:flex-col items-end justify-between rounded-lg gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">Completed Task</p>

              <p className="text-2xl font-medium text-gray-900">{completedTask?.length}</p>
            </div>

          </article>
        </div>
        <div className="h-32 rounded-lg bg-green-200 flex items-center justify-center">
          <article
            className="flex max-md:flex-col items-end justify-between rounded-lg gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">Inmportant Task</p>

              <p className="text-2xl font-medium text-gray-900">{important?.length}</p>
            </div>

          </article>
        </div>
        <div className="h-32 rounded-lg bg-green-200 flex items-center justify-center">
          <article
            className="flex max-md:flex-col items-end justify-between rounded-lg gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">Share Task</p>

              <p className="text-2xl font-medium text-gray-900">{shares?.length}</p>
            </div>

          </article>

        </div>
      </div>


    </>
  }


  return <>

    <Login />
  </>

}