import { dbConnect } from "@/DB/dbconnect";
import { NextResponse } from "next/server";
import User from "@/DB/Model/userModel";

import { getDataToken } from "@/utils/getDataToken";
dbConnect();

export async function POST(request) {
  const userId = await getDataToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");
  return NextResponse.json({ message: "user Found", user });
}

export async function GET(request) {
  const userId = await getDataToken(request);
  const user = await User.findOne({ _id: userId });
  return NextResponse.json({ message: "user Found", user });
}
