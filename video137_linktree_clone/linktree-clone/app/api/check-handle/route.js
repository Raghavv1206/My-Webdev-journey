import clientPromise from "@/lib/mongobd";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const handle = searchParams.get("handle");

        if (!handle) {
            return Response.json({ exists: false, message: "No handle provided" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("bittree");
        const collection = db.collection("links");

        const doc = await collection.findOne({ handle: handle });

        if (doc) {
            return Response.json({ exists: true });
        } else {
            return Response.json({ exists: false });
        }
    } catch (error) {
        console.error("Error checking handle:", error);
        return Response.json({ exists: false, error: true, message: "Server error" }, { status: 500 });
    }
}
