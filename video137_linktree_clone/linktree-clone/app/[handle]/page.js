import Link from "next/link"
import clientPromise from "@/lib/mongobd";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle });
    if (!item) {
        return notFound();
    }

    return (
        <div className="relative min-h-screen flex justify-center items-start py-10 overflow-hidden">
            {/* 🔥 Background (blurred & zoomed user pic) */}
            <img
                src={item.pic}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 -z-10"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            {/* Content */}
            <div className="photo flex justify-center flex-col items-center gap-4 relative z-10">
                <img
                    src={item.pic}
                    alt=""
                    className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
                />
                <span className="font-bold text-xl text-white">@{item.handle}</span>
                <span className="desc w-80 text-center text-gray-100">{item.desc}</span>
                <div className="links w-full max-w-md">
                    {item.links.map((link, index) => (
                        <Link key={index} href={link.link}>
                            <div className="bg-white/90 z-1 hover:bg-white py-4 shadow-lg px-2 w-full flex justify-center rounded-md my-3 transition">
                                {link.linktext}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
