import User from "@/DB/Model/userModel";
import { NextResponse } from "next/server";
const { dbConnect } = require("@/DB/dbconnect");

dbConnect();

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const payment = await User.findById(id);
    payment.status = "success";
    const result = await payment.save();
    console.log(result);
    return NextResponse.json({
      message: "Form data updated successfully",
      success: true,
      result
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const payment = await User.findById(id);
    return NextResponse.json({ payment });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
