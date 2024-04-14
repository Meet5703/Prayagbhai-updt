import BlogSchema from "@/DB/Model/blog";
import { NextResponse } from "next/server";
import { dbConnect } from "@/DB/dbconnect";

// Function to fetch all blog data
export const DataList = async () => {
  await dbConnect(); // Ensure database connection
  return await BlogSchema.find({}); // Return the data directly
};

// GET handler for the dynamic route
export async function GET(request, content) {
  try {
    // Fetch all blog data
    const data = await DataList();

    // Extract the blog post with the matching id
    console.log(content.params.id);
    // Find the blog post with the matching id
    const userData = data.find((item) => item.id === content.params.id);

    // If blog post not found, return 404
    if (!userData) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }

    // Construct the image URL for the blog post
    const coverImgUrl = `/uploads/${userData.coverImg}`;

    // Return the user data along with the image URL
    return NextResponse.json(
      { ...userData.toJSON(), coverImgUrl },
      { status: 200 }
    );
  } catch (error) {
    // Return 500 response for any error during data retrieval
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
