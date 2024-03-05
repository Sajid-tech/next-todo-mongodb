import mongooseConnect from "@/lib/mongoose";
import Task from "@/models/Task";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";




export async function GET(req) {

    await mongooseConnect()

    const session = await getAuthSession()

    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    try {
        const tasks = await Task.find({ userEmail: session?.user.email, isCompleted: true });
        return NextResponse.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }


}