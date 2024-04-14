"use server";

const { ContactData } = require("@/DB/Model/FetchDataSchema");
const { default: dbConnect } = require("@/DB/dbconnect");

const submitContact = async (data) => {
  try {
    await dbConnect();
    await ContactData.create(data);
    return { status: 200, message: "Data submitted successfully" };
  } catch (error) {
    return { status: 500, message: "Error submitting data" };
  }
};

export default submitContact;
