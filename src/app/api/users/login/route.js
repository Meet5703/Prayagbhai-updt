import { dbConnect } from "@/DB/dbconnect";
import { NextResponse } from "next/server";
import User from "@/DB/Model/userModel";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
dbConnect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    console.log(user);
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    const tokenData = {
      email: user.email,
      id: user._id,
      username: user.username
    };
    const token = Jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d"
    });

    const userResponse = NextResponse.json({ message: "Login successful" });
    userResponse.cookies.set("token", token);
    return userResponse;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
