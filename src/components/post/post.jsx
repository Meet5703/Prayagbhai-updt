"use client";
import React, { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [img, setImg] = useState();
  const [coverImg, setCoverImg] = useState();
  const [heading1, setHeading1] = useState();
  const [heading2, setHeading2] = useState();
  const [heading3, setHeading3] = useState();
  const [heading4, setHeading4] = useState();
  const [heading5, setHeading5] = useState();
  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();
  const [description3, setDescription3] = useState();
  const [description4, setDescription4] = useState();
  const [description5, setDescription5] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("file", img); // Use "file" instead of "img"
    data.append("file2", coverImg);
    data.append("heading1", heading1);
    data.append("heading2", heading2);
    data.append("heading3", heading3);
    data.append("heading4", heading4);
    data.append("heading5", heading5);
    data.append("description1", description1);
    data.append("description2", description2);
    data.append("description3", description3);
    data.append("description4", description4);
    data.append("description5", description5);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        console.log("Data submitted successfully", response);
        // Reset form fields after successful submission
        setTitle("");
        setContent("");
        setImg(null);
        setCoverImg(null);
        setHeading1("");
        setHeading2("");
        setHeading3("");
        setHeading4("");
        setHeading5("");
        setDescription1("");
        setDescription2("");
        setDescription3("");
        setDescription4("");
        setDescription5("");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center bg-gray-500">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="bg-blue-300 border border-blue-700" htmlFor="title">
          Title
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="title"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="bg-blue-300 border border-blue-700" htmlFor="content">
          Content
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="content"
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <label className="bg-blue-300 border border-blue-700" htmlFor="img">
          Image
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="img"
          type="file"
          name="img"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="coverImg"
        >
          Cover Image
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="coverImg"
          type="file"
          name="coverImg"
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="heading1"
        >
          Heading 1
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="heading1"
          type="text"
          name="heading1"
          onChange={(e) => setHeading1(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="heading1"
        >
          Heading 2
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="heading2"
          type="text"
          name="heading2"
          onChange={(e) => setHeading2(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="heading3"
        >
          Heading 3
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="heading3"
          type="text"
          name="heading3"
          onChange={(e) => setHeading3(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="heading4"
        >
          Heading 4
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="heading4"
          type="text"
          name="heading4"
          onChange={(e) => setHeading4(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="heading5"
        >
          Heading 5
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="heading5"
          type="text"
          name="heading5"
          onChange={(e) => setHeading5(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="description1"
        >
          Description 1
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="description1"
          type="text"
          name="description1"
          onChange={(e) => setDescription1(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="description2"
        >
          Description 2
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="description2"
          type="text"
          name="description2"
          onChange={(e) => setDescription2(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="description3"
        >
          Description 3
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="description3"
          type="text"
          name="description3"
          onChange={(e) => setDescription3(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="description4"
        >
          Description 4
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="description4"
          type="text"
          name="description4"
          onChange={(e) => setDescription4(e.target.value)}
        />
        <label
          className="bg-blue-300 border border-blue-700"
          htmlFor="description5"
        >
          Description 5
        </label>
        <input
          className="bg-blue-300 border border-blue-700"
          id="description5"
          type="text"
          name="description5"
          onChange={(e) => setDescription5(e.target.value)}
        />

        <button type="submit" className="bg-blue-500 p-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
