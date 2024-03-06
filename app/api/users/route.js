import mongooseConnect from "@/lib/mongoose";
import User from "@/models/User";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(req) {

    await mongooseConnect()

    const session = await getAuthSession()

    if (!session) {
        return NextResponse.json({ error: "User session not found" }, { status: 401 });
    }

    try {

        const tasks = await User.find();
        console.log("share user", tasks)
        return NextResponse.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }


}