"use client";
import React, { useEffect, useState } from "react";

import { WebBar } from "../WebBar";
import { firebaseAuth } from "@/lib/utils";

interface User {
  _id: string;
  uid: string;
  email: string;
  name: string;
  lcUsername: string | null;
  courseraname: string | null;
  linkedIn: string | null;
  gfgUsername: string | null;
  createdAt: string;
  updatedAt: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({
    lcUsername: "",
    linkedIn: "",
    courseraname: "",
    gfgUsername: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  async function fetchUserDetails() {
    let idToken = localStorage.getItem("idToken");
    if (!idToken) {
      alert("Please log in");
      return;
    }

    try {
      const response = await fetch("https://career-sprint-backend.vercel.app/user/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        console.warn("Token expired, refreshing...");
        idToken = await firebaseAuth.currentUser!.getIdToken(true);
        if (!idToken) return;
        return fetchUserDetails();
      }

      const data = await response.json();
      setUser(data.user);
      setFormData({
        lcUsername: data.user.lcUsername || "",
        linkedIn: data.user.linkedIn || "",
        courseraname: data.user.courseraname || "",
        gfgUsername: data.user.gfgUsername || "",
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  async function updateUserDetails() {
    const idToken = localStorage.getItem("idToken");
    if (!idToken) return;

    try {
      const response = await fetch("https://career-sprint-backend.vercel.app/user/attachLC", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setMessage("Profile updated successfully!");
      setUser((prev) => (prev ? { ...prev, ...formData } : null));
      setEditMode({});
    } catch (error: any) {
      console.error("Error updating profile:", error);
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-4xl">
        <div className="relative bg-gradient-to-r from-[#ff7b00] to-[#ffaf40] h-20"></div>

        <WebBar />
        <div className="mt-10 text-center pb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>
          <p className="text-gray-500 mt-1">
            Vellore Institute of Technology, Vellore
          </p>
        </div>

        <div className="mt-6 px-8 space-y-3 mb-10">
          {[
            { platform: "LinkedIn", key: "linkedIn" },
            { platform: "LeetCode", key: "lcUsername" },
            { platform: "Coursera", key: "courseraname" },
            { platform: "GeeksforGeeks", key: "gfgUsername" },
          ].map(({ platform, key }) => (
            <div
              key={platform}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 hover:border-orange-600 transition"
            >
              {editMode[key] ? (
                <input
                  type="text"
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-orange-600 text-black"
                  placeholder={`Enter your ${platform} username`}
                />
              ) : (
                <span className="text-gray-700">
                  {formData[key as keyof typeof formData] || `No ${platform} linked`}
                </span>
              )}

              <button
                onClick={() => {
                  if (editMode[key]) updateUserDetails();
                  setEditMode({ ...editMode, [key]: !editMode[key] });
                }}
                className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-lg"
              >
                {editMode[key] ? "Save" : "Edit"}
              </button>
            </div>
          ))}
        </div>

        {message && (
          <div className="text-center text-green-600 font-semibold mt-4">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;