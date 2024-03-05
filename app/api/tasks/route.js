
import mongooseConnect from "@/lib/mongoose";
import Task from "@/models/Task";
import { getAuthSession } from "@/utils/auth";

import { NextResponse } from "next/server";



export async function POST(req) {
    const session = await getAuthSession()
    console.log("session", session?.user.email)



    // Ensure session exists
    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }


    await mongooseConnect()
    console.log("mongodb connect")

    const { title, description, date, isCompleted, isImportant } = await req.json()

    Task.create({
        title,
        description,
        date,
        isCompleted,
        isImportant,
        userEmail: session?.user.email,
        userName: session?.user.name,

    });



    return NextResponse.json({ message: "task created" }, { status: 201 })

}

export async function GET(req) {

    await mongooseConnect()

    const session = await getAuthSession()

    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    try {
        const tasks = await Task.find({ userEmail: session?.user.email });
        return NextResponse.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }


}