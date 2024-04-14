import { writeFile } from "fs";
import path from "path";
import BlogSchema from "@/DB/Model/blog";
import { NextResponse } from "next/server";
import { dbConnect } from "@/DB/dbconnect";

dbConnect();

// Function to ensure the directory exists

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  const file2 = data.get("file2");
  const title = data.get("title");
  const content = data.get("content");
  const heading1 = data.get("heading1");
  const heading2 = data.get("heading2");
  const heading3 = data.get("heading3");
  const heading4 = data.get("heading4");
  const heading5 = data.get("heading5");
  const description1 = data.get("description1");
  const description2 = data.get("description2");
  const description3 = data.get("description3");
  const description4 = data.get("description4");
  const description5 = data.get("description5");

  if (!file) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const bytData = await file.arrayBuffer();
  const buffer = Buffer.from(bytData);
  const fileName = file.name;
  const uploadsDir = "uploads";
  const filePath = path.resolve("public", uploadsDir, fileName);

  if (!file2) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const bytData2 = await file2.arrayBuffer();
  const buffer2 = Buffer.from(bytData2);
  const fileName2 = file2.name;
  const uploadsDir2 = "uploads";
  const filePath2 = path.resolve("public", uploadsDir2, fileName2);

  try {
    writeFile(filePath, buffer, async (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return NextResponse.json(
          { message: "Error uploading file" },
          { status: 500 }
        );
      }

      writeFile(filePath2, buffer2, async (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return NextResponse.json(
            { message: "Error uploading file" },
            { status: 500 }
          );
        }
      });
      const blog = {
        title,
        content,
        heading1,
        heading2,
        heading3,
        heading4,
        heading5,
        description1,
        description2,
        description3,
        description4,
        description5,
        coverImg: fileName2,
        img: fileName
      };
      console.log(blog);

      await dbConnect();
      const result = await BlogSchema.create(blog);

      return NextResponse.json(result, { status: 200 });
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { message: "Error uploading file" },
      { status: 500 }
    );
  }

  // Ensure a response is always returned
  return NextResponse.json({ message: "Processing request" }, { status: 200 });
}

// GET handler function

export async function GET() {
  try {
    // Retrieve all blog posts from the database
    const blogs = await BlogSchema.find({});

    // Map each blog to include the image URL
    const blogsWithImgUrls = blogs.map((blog) => ({
      ...blog.toJSON(),
      imgUrl: `/uploads/${blog.img}`,
      coverImgUrl: `/uploads/${blog.coverImg}`
    }));

    return NextResponse.json({ blogs: blogsWithImgUrls }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
