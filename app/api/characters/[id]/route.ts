import { ObjectId } from "mongodb";
import { connectToDb } from "../../db";

export async function GET(request, {params}) {
    const { db } = await connectToDb();
    const { id } = await params;

    const currentChar = await db.collection("characters").findOne({_id: new ObjectId(id)});
    if (!currentChar) {
        return new Response("Character not found", { status: 404 });
    }

    return new Response(JSON.stringify(currentChar), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
} 