import User from "@/DB/Model/userModel";
import { NextResponse } from "next/server";
const { dbConnect } = require("@/DB/dbconnect");

dbConnect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, number, courses, status } = reqBody;
    console.log(reqBody);

    const user = await User.findOneAndUpdate(
      { email },
      { number, courses, status }
    );
    const savedUser = await user.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 },
      savedUser
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
