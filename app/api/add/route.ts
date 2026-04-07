import { connectToDb } from "../db";

export async function POST(request) {
    const { db } = await connectToDb();
    const newChar = await request.json();

    const result = await db.collection("characters").insertOne(newChar)
    return new Response(
        "Character added successfully with id " + result.insertedId,
        {
            status: 201,
        }
    )
}