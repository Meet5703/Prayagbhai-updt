import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";
import User from "@/DB/Model/userModel";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Find the user by email
    const existingUser = await User.findOne({ email });

    // If user not found, return error response
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Send email with reset password link
    await sendEmail({
      email,
      emailType: "RESET",
      userId: existingUser._id
    });

    return NextResponse.json({
      message: "Password reset link sent successfully"
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
