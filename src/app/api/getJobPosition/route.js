import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import getDatabase from "@/app/utils/mongoConnection";

export async function GET(request) {
  let searchQuery = request.nextUrl.searchParams.get("search") || "";

  noStore();
  try {
    const db = await getDatabase();
    const collection = db.collection("job-position");
    const filter = { position: new RegExp(searchQuery, "i") };

    const totalDocuments = await collection.countDocuments(filter);
    const data = await collection.find(filter).toArray();

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
    console.log(error);
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
}
