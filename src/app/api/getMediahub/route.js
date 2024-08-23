import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import getDatabase from "@/app/utils/mongoConnection";

export async function GET(request) {
  let entries = parseInt(request.nextUrl.searchParams.get("entries")) || 10;
  let page = parseInt(request.nextUrl.searchParams.get("page")) || 1;
  let searchQuery = request.nextUrl.searchParams.get("search") || "";
  let startDate = request.nextUrl.searchParams.get("dateFrom") || null;
  let endDate = request.nextUrl.searchParams.get("dateTo") || null;
  let lazyLoading = request.nextUrl.searchParams.get("lazyLoading") || null;
  noStore();
  try {
    const db = await getDatabase();
    const collection = await db.collection("mediahub");
    const filter = {
      $or: [
        { title: new RegExp(searchQuery, "i") },
        { description: new RegExp(searchQuery, "i") },
      ],
    };
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const totalDocuments = await collection.countDocuments(filter);
    const data = await collection
      .find(filter)
      .sort({ date: -1 })
      .limit(lazyLoading ? entries * page : entries)
      .skip(lazyLoading ? 0 : entries * (page - 1))
      .toArray();

    //-------Update datestring to dateObject
    // const data = await collection.updateMany(
    //   { date: { $exists: true } }, // Match documents that have the stringDate field
    //   [
    //     {
    //       $set: {
    //         date: {
    //           $dateFromString: {
    //             dateString: {
    //               $concat: [
    //                 { $substr: ["$date", 6, 4] },
    //                 "-", // Year
    //                 { $substr: ["$date", 3, 2] },
    //                 "-", // Month
    //                 { $substr: ["$date", 0, 2] }, // Day
    //               ],
    //             },
    //             format: "%Y-%m-%d", // Specify the input date format
    //           },
    //         },
    //       },
    //     },
    //   ]
    // );

    return NextResponse.json(
      {
        data: {
          data: data,
          totalDocs: totalDocuments,
          totalPage: totalDocuments / entries,
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
