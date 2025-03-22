"use client";
import React from "react";
import { WebBar } from "../WebBar";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-6">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-4xl">
        <div className="relative bg-gradient-to-r from-[#ff7b00] to-[#ffaf40] h-40"></div>
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 border-4 border-white rounded-full">
          <div className="h-24 w-24 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
            <div className="bg-white h-20 w-20 rounded-full"></div>
          </div>
        </div>
        <WebBar />
        <div className="mt-16 text-center pb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Yashita Puri</h2>
          <p className="text-gray-500 mt-1">Vellore Institute of Technology, Vellore</p>
        </div>
        <div className="px-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">PROGRESS</span>
            <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
              VIEW DETAILS
            </span>
          </div>
          <div className="mt-2 bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#ff7b00] to-[#ffaf40] h-full rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
        <div className="mt-6 px-8 space-y-3">
          {[
            { platform: "LinkedIn", url: "/linkedin/username" },
            { platform: "LeetCode", url: "/leetcode/username" },
            { platform: "Coursera", url: "/coursera/account" },
            { platform: "Other", url: "/other/account" },
          ].map((item) => (
            <div
              key={item.platform}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 hover:border-orange-600 transition"
            >
              <span className="text-gray-700 font-medium">{item.platform}</span>
              <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                {item.url}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center pb-6 px-6">
          <p className="text-gray-600 italic">
            CURRENT STATUS: “FOCUSING ON TECHNICAL SKILLS” OR “IMPROVING NETWORK”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
