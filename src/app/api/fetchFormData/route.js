import { ContactData } from "@/DB/Model/FetchDataSchema";
import dbConnect from "@/DB/dbconnect";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";
const { MONGODB_URI } = process.env;

export async function GET(req, res) {
  await mongoose.connect(MONGODB_URI);
  const Formdata = await ContactData.find();
  return NextResponse.json(Formdata);
}

export async function POST(req, res) {
  try {
    const data = await req.formData(); // Parse the incoming request as FormData

    // Access form fields from the FormData object
    const name = data.get("name");
    const email = data.get("email");
    const number = data.get("number");
    const message = data.get("message");
    const time = data.get("time");

    // Create a new document in the database with the form data
    const newdata = await ContactData.create({
      name,
      email,
      number,
      message,
      date: new Date(),
      time
    });

    // Send a success response back to the client
    return NextResponse.json({
      msg: "Form data saved successfully",
      success: true,
      result: newdata
    });
  } catch (error) {
    // Handle errors and send an error response back to the client
    console.error("Error saving form data:", error);
    return NextResponse.json({
      msg: "Failed to save form data",
      success: false
    });
  }
}
