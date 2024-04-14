import { dbConnect } from "@/DB/dbconnect";
import PaymentForm from "@/DB/Model/payment";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, course, number, status } = data;

    const payment = new PaymentForm({
      name,
      email,
      number,
      course,
      status
    });
    const result = await payment.save();
    return NextResponse.json({
      message: "Form data saved successfully",
      success: true,
      result
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id } = await request.json();
    const payment = await PaymentForm.findById(id);
    payment.status = "success";
    const result = await payment.save();
    return NextResponse.json({
      message: "Form data updated successfully",
      success: true,
      result
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
