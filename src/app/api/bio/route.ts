import connectMongoDB from "@/lib/mongoose";
import Bio from "@/models/bio";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { bio } = await request.json();
  await connectMongoDB();
  await Bio.create({ bio });
  return NextResponse.json({ message: "Bio Created" }, { status: 201 });
}


export async function GET(){
    await connectMongoDB();
    const bio = await Bio.find();
    return NextResponse.json({bio});
}