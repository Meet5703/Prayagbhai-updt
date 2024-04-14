import { dbConnect } from "@/DB/dbconnect";
import { NextResponse } from "next/server";
import User from "@/DB/Model/userModel";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/mailer";
dbConnect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password, number } = reqBody;
    console.log(reqBody);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      number,
      password: hashedPassword
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    //sendEmail

    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: savedUser._id
    });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 },
      savedUser
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
