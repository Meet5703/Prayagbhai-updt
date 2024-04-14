"use client";
import NavbarByMe from "@/components/navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BlogId = () => {
  const [blog, setBlog] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`, blog);
        console.log(response.data);
        setBlog(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Fetch data whenever the ID changes

  return (
    <div>
      <NavbarByMe />
      <div>
        <h1>This is Blog Page</h1>
        {blog && (
          <>
            <p className="text-3xl text-center">{blog.title}</p>
            <img src={`/uploads/${blog.coverImg}`} alt="blog" />
            <p>{blog.content}</p>
            <br />

            <p>{blog.heading1}</p>
            <p>{blog.description1}</p>
            <br />
            <p>{blog.heading2}</p>
            <p>{blog.description2}</p>
            <br />
            <p>{blog.heading3}</p>
            <p>{blog.description3}</p>
            <br />
            <p>{blog.heading4}</p>
            <p>{blog.description4}</p>
            <br />
            <p>{blog.heading5}</p>
            <p>{blog.description5}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogId;
