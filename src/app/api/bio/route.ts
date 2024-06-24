
import connectMongoDB from "@/lib/mongoose";
import Bio from "@/models/bio";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { bio } = await req.json();
  const { userId } = getAuth(req);

  await connectMongoDB();
  await Bio.create({ bio, userId });
  return NextResponse.json({ message: "Bio Created" }, { status: 201 });
}



export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  await connectMongoDB();
  const bios = await Bio.find({ userId });
  return NextResponse.json({ bios });
}



export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const { userId } = getAuth(req);

  await connectMongoDB();
  const bio = await Bio.findOneAndDelete({ _id: id, userId });
  if (bio) {
    return NextResponse.json({ message: "Bio deleted" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Bio not found" }, { status: 404 });
  }
}
