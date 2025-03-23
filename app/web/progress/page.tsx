"use client";
import React, { useState } from "react";
import { WebBar } from "../WebBar";
import { Card, CardContent } from "@/app/components/ui/card";

const LeetCodeProgress = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://leet-scrape.vercel.app/${username}`);
      if (!response.ok) throw new Error("User not found");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateRealisticProgress = (easy, medium, hard) => {
    const easyWeight = 1, mediumWeight = 2, hardWeight = 3;
    const totalWeight = easy * easyWeight + medium * mediumWeight + hard * hardWeight;
    const maxPossible = 600;
    return Math.min((totalWeight / maxPossible) * 100, 100).toFixed(2);
  };

  return (
    <div className="min-h-screen flex">
      <WebBar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <div className="h-24 w-24 bg-[#ff3131] rounded-full flex items-center justify-center">
              <div className="bg-white h-20 w-20 rounded-full"></div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold">LeetCode Progress Tracker</h2>
          </div>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Enter LeetCode Username"
              className="p-3 border rounded-lg w-full mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={fetchData}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full"
              disabled={loading}
            >
              {loading ? "Fetching..." : "Get Progress"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          {data && (
            <div className="mt-6 w-full flex flex-wrap gap-4 justify-center">
              <Card className="w-full">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold text-red-500">LeetCode: {username}</h2>
                  <p><strong>Ranking:</strong> {data.ranking ?? "N/A"}</p>
                  <p><strong>Reputation:</strong> {data.reputation ?? "N/A"}</p>
                  <p><strong>Acceptance Rate:</strong> {data.acceptanceRate ? `${data.acceptanceRate.toFixed(2)}%` : "N/A"}</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-500">Solved Questions</h3>
                  <p> Total Solved: {data.totalSolved ?? "N/A"}</p>
                  <p> Easy: {data.easySolved ?? "N/A"}</p>
                  <p> Medium: {data.mediumSolved ?? "N/A"}</p>
                  <p> Hard: {data.hardSolved ?? "N/A"}</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-500">Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-6 mt-2 relative">
                    <div
                      className="bg-red-500 h-6 rounded-full text-white text-xs flex items-center justify-center"
                      style={{ width: `${calculateRealisticProgress(data.easySolved, data.mediumSolved, data.hardSolved)}%` }}
                    >
                      {calculateRealisticProgress(data.easySolved, data.mediumSolved, data.hardSolved)}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeetCodeProgress;
