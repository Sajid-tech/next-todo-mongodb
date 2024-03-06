import mongooseConnect from "@/lib/mongoose";
import Share from "@/models/Share";

import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    const session = await getAuthSession();

    // Ensure session exists
    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    await mongooseConnect();

    const { title, selectedItems, description, isImportant, completedAt } = await req.json();

    try {
        // Assuming selectedItems is an array of strings containing names
        const shareData = {
            title,
            selectedItems: [session?.user.name, ...selectedItems],
            userName: session?.user.name,
            description,
            isImportant,
            completedAt,

        };

        const newShare = new Share(shareData);
        await newShare.save();

        return NextResponse.json({ message: "task created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating share:", error);
        return NextResponse.json({ error: "Error creating share" }, { status: 500 });
    }





}


export async function GET(req) {

    await mongooseConnect()

    const session = await getAuthSession()

    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    try {
        const tasks = await Share.find({ selectedItems: { $in: [session?.user.name] } });

        return NextResponse.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }


}