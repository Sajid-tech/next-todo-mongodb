import mongooseConnect from "@/lib/mongoose";
import Share from "@/models/Share";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {

    const { id } = params

    const session = await getAuthSession()

    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    try {

        await mongooseConnect()
        await Share.findByIdAndDelete(id)


        return NextResponse.json({ message: "task deleted" }, { status: 200 })

    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });

    }
}