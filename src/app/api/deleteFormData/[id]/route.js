import { ContactData } from "@/DB/Model/FetchDataSchema";
import dbConnect from "@/DB/dbconnect";
import { NextRequest, NextResponse, userAgent } from "next/server";
import mongoose from "mongoose";

export async function DELETE(req, res) {
  const { MONGODB_URI } = process.env;
  await mongoose.connect(MONGODB_URI);
  const Formdata = await ContactData.findOneAndDelete();
  return NextResponse.json(Formdata);
}
