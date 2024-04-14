"use server";

import { dbConnect } from "@/DB/dbconnect";

const { ContactData } = require("@/DB/Model/FetchDataSchema");

const submitContact = async (data) => {
  try {
    await dbConnect();
    await ContactData.create(data);
    console.log("Data submitted successfully", data);
    return { status: 200, message: "Data submitted successfully" };
  } catch (error) {
    return { status: 500, message: "Error submitting data" };
  }
};

export default submitContact;
