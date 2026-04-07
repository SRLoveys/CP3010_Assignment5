import { connectToDb } from "../db";

export async function GET() {
    const { db } = await connectToDb();
    const characters = await db.collection("characters").find({}).toArray();
    console.log(characters);

    return new Response(JSON.stringify(characters), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

