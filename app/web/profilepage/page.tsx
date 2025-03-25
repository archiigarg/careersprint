"use client";
import React, { useEffect, useState } from "react";
import { WebBar } from "../WebBar";
import { firebaseAuth } from "@/lib/utils";
interface ApiResponse {
  message: string;
  user: User;
}

interface User {
  _id: string;
  uid: string;
  email: string;
  name: string;
  lcUsername: string | null;
  courseraname: string | null;
  linkedIn: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    void fetchUserDetails();
  }, []);

  async function fetchUserDetails() {
    let idToken = localStorage.getItem("idToken");
    if (!idToken) {
      // logout();
      // return;
      alert("login");
    }

    try {
      const userResponse = await fetch("http://localhost:5500/user/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      if (userResponse.status === 401) {
        console.warn("Token expired, refreshing...");
        idToken = await firebaseAuth.currentUser!.getIdToken(true); // Refresh token
        if (!idToken) return;
        return fetchUserDetails(); // Retry with new token
      }

      const userData: ApiResponse = await userResponse.json();

      setUser(userData.user);

      // userInfoElement.innerText = JSON.stringify(userData, null, 2);
    } catch (error) {
      console.error("Error fetching user:", error);
      // userInfoElement.innerText = "Error: " + error.message;
    }
  }
  async function attachLeetCode() {
    const leetcodeUsername = document.getElementById("leetcodeProfile").value;
    const attachResponse = document.getElementById("attachResponse");

    if (!leetcodeUsername) {
      attachResponse.innerText = "Please enter a LeetCode username.";
      return;
    }

    let idToken = localStorage.getItem("idToken");
    if (!idToken) {
      // logout();
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/user/attachLc", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lcUsername: leetcodeUsername }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      attachResponse.innerText = "LeetCode profile attached successfully!";
      setTimeout(() => window.location.reload(), 1000); // Reload page on success
    } catch (error) {
      console.error("Error attaching LeetCode profile:", error);
      attachResponse.innerText = "Error: " + error.message;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 ">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-4xl ">
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
            { platform: "LinkedIn", url: "/linkedin/username" },
            { platform: "LeetCode", url: "/leetcode/username" },
            { platform: "Coursera", url: "/coursera/account" },
          ].map((item) => (
            <div
              key={item.platform}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 hover:border-orange-600 transition"
            >
              <input
                type="text"
                id="leetcodeProfile"
                placeholder="Enter LeetCode Username"
              />
              <button onClick="attachLeetCode()">Attach </button>
              <p id="attachResponse"></p>
              <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                {item.url}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
