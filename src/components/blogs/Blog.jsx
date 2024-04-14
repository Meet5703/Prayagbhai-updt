"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      console.log(data);
      setBlogs(data.blogs); // Assuming the fetched data has a "blogs" property
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center lg:ml-40 md:ml-20">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="col-span-1 w-[300px]">
              <Link href={`/blogs/${blog._id}`}>
                <Image
                  src={`/uploads/${blog.img}`}
                  alt="blog image"
                  width={300}
                  height={300}
                />
              </Link>
              <span>{blog.title}</span>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
