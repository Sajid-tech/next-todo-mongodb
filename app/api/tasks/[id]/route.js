import mongooseConnect from "@/lib/mongoose";
import Task from "@/models/Task";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {

    const { id } = params

    try {

        await mongooseConnect()
        await Task.findByIdAndDelete(id)


        return NextResponse.json({ message: "task deleted" }, { status: 200 })

    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });

    }
}