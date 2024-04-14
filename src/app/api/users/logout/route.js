import { dbConnect } from "@/DB/dbconnect";
import { NextResponse } from "next/server";
import User from "@/DB/Model/userModel";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
dbConnect();

export async function GET(request) {
  try {
    const userResponse = NextResponse.json({
      message: "Logout successful",
      success: true
    });
    userResponse.cookies.set("token", "", { expires: new Date(0) });
    return userResponse;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
