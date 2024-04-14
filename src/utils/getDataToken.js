import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataToken = (req) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    if (!token) {
      throw new Error("Token not found");
    }
    console.log("Token:", token); // Log the token value
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Decoded Token:", decodedToken);
    return decodedToken.id;
  } catch (error) {
    console.error("Error in getDataToken:", error);
    throw new Error(error.message);
  }
};
