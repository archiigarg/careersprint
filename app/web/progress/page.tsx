"use client";
import React, { useState } from "react";
import { WebBar } from "../WebBar";
import { Card, CardContent } from "@/app/components/ui/card";
interface SubmissionCalendar {
  [timestamp: string]: number;
}

interface UserStats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: SubmissionCalendar;
}

const LeetCodeProgress = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<UserStats>();
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
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateRealisticProgress = (easy:any, medium:any, hard:any) => {
    const easyWeight = 1, mediumWeight = 2, hardWeight = 3;
    const totalWeight = easy * easyWeight + medium * mediumWeight + hard * hardWeight;
    const maxPossible = 600;
    return Math.min((totalWeight / maxPossible) * 100, 100).toFixed(2);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#ff3131] to-[#ff914d]">
      <WebBar />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <div className="h-24 w-24 bg-[#ff3131] rounded-full flex items-center justify-center">
              <div className="bg-white h-20 w-20 rounded-full"></div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-xl font-bold text-white">LeetCode Progress Tracker</h2>
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
              className="px-5 py-2 bg-[#ff3131] text-white rounded-lg hover:bg-[#ff914d] transition w-full font-bold"
              disabled={loading}
            >
              {loading ? "Fetching..." : "Get Progress"}
            </button>
          </div>
          {error && <p className="text-white mt-2 text-center font-bold">{error}</p>}
          {data && (
            <div className="mt-6 w-full flex flex-wrap gap-4 justify-center">
              <Card className="w-full bg-orange-100 text-red-600">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-[#ff3131]">LeetCode: {username}</h2>
                  <p className=" font-bold">Ranking: {data.ranking ?? "N/A"}</p>
                  <p className=" font-bold">Reputation: {data.reputation ?? "N/A"}</p>
                  <p className=" font-bold">Acceptance Rate: {data.acceptanceRate ? `${data.acceptanceRate.toFixed(2)}%` : "N/A"}</p>
                </CardContent>
              </Card>
              <Card className="w-full bg-orange-100">
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#ff3131]">Solved Questions</h3>
                  <p className=" font-bold">Total Solved: {data.totalSolved ?? "N/A"}</p>
                  <p className="font-bold">Easy: {data.easySolved ?? "N/A"}</p>
                  <p className=" font-bold">Medium: {data.mediumSolved ?? "N/A"}</p>
                  <p className=" font-bold">Hard: {data.hardSolved ?? "N/A"}</p>
                </CardContent>
              </Card>
              <Card className="w-full bg-orange-100">
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#ff3131]">Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-6 mt-2 relative">
                    <div
                      className="bg-[#ff3131] h-6 rounded-full  text-xs flex items-center justify-center font-bold"
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
