import PaymentForm from "@/DB/Model/payment";
import { NextResponse } from "next/server";

const { dbConnect } = require("@/DB/dbconnect");

dbConnect();

export async function GET(request) {
  try {
    const { content } = request;
    const data = await PaymentForm.find();
    const userData = data.filter((item) => item.id == content.params.id);
    return NextResponse.json({
      message: "Form data fetched successfully",
      success: true,
      userData
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, content) {
  try {
    await dbConnect();

    const { id } = content.params;
    const payload = await request.json();
    console.log(payload);

    // Find the form data by ID
    const formData = await PaymentForm.findOne({ ID: id });
    console.log(formData);

    if (!formData) {
      return NextResponse.json(
        {
          success: false,
          msg: "Form data not found for the provided ID"
        },
        { status: 404 }
      );
    }

    // Update the status to "success"
    formData.status = "success";
    await formData.save();

    return NextResponse.json(
      {
        success: true,
        formData: formData
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating form data:", error);
    return NextResponse.json(
      {
        success: false,
        msg: "Error updating form data"
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, content) {
  try {
    await dbConnect();

    const { id } = content.params;

    // Find the form data by ID and remove it
    const deletedFormData = await PaymentForm.findOneAndDelete({ ID: id });

    if (!deletedFormData) {
      return NextResponse.json(
        { msg: "Form data not found for the provided ID", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "Data deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting form data:", error);
    return NextResponse.json(
      { msg: "Internal error", success: false },
      { status: 500 }
    );
  }
}
