import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import getDatabase from "@/app/utils/mongoConnection";

export async function GET(request) {
  let searchQuery = request.nextUrl.searchParams.get("search") || "";

  noStore();
  try {
    const db = await getDatabase();
    const collection = await db.collection("financial-report");
    const filter = { title: new RegExp(searchQuery, "i") };

    const totalDocuments = await collection.countDocuments(filter);

    const data = await collection.find(filter).sort({ date: -1 }).toArray();

    return NextResponse.json(
      {
        data: {
          data: data,
          totalDocs: totalDocuments,
        },
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
}
