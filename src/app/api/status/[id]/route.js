import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { dbConnect } from "@/DB/dbconnect";
import PaymentForm from "@/DB/Model/payment";

async function updateFormDataStatus(merchantId, transactionId, status) {
  try {
    await dbConnect();
    await PaymentForm.findOneAndUpdate(
      { merchantId, transactionId },
      { status },
      { new: true }
    );
  } catch (error) {
    console.error("Error updating form data status:", error);
    // Handle error appropriately, e.g., return an error response
    return NextResponse.json(
      { error: "Error updating form data status" },
      { status: 500 }
    );
  }
}

export async function POST(req, res) {
  try {
    // Parse form data
    const data = await req.formData();

    // Extract necessary data from form
    const code = data.get("code");
    const merchantId = data.get("merchantId");
    const transactionId = data.get("transactionId");

    // Generate checksum for verification
    const st = `/pg/v1/status/${merchantId}/${transactionId}099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
    const checksum = sha256(st) + "###" + "1";

    // Configure API request options
    const options = {
      method: "GET",
      url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId
      }
    };

    // Make API request
    const response = await axios.request(options);

    // Update form data status based on payment status
    const status =
      response.data.code === "PAYMENT_SUCCESS" ? "success" : "failed";
    await updateFormDataStatus(merchantId, transactionId, status);

    // Redirect user based on payment status
    const redirectUrl = status === "success" ? "/success" : "/failure";
    return NextResponse.redirect(`https://dataskillshub.com${redirectUrl}`, {
      status: 301
    });
  } catch (error) {
    console.error("Error in /api/payment:", error);
    // Handle error appropriately, e.g., return an error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
