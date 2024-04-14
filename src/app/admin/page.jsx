"use client";
import AdminPage from "@/components/admin";
import NavbarByMe from "@/components/navbar";
import React from "react";

const Admin = () => {
  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <AdminPage />
    </>
  );
};

export default Admin;
