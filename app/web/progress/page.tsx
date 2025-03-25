"use client";
import React, { useEffect, useState } from "react";
import { WebBar } from "../WebBar";
import { Card, CardContent } from "@/app/components/ui/card";
import { firebaseAuth } from "@/lib/utils";

interface User {
  _id: string;
  uid: string;
  email: string;
  name: string;
  lcUsername: string | null;
  gfgUsername: string | null;
  linkedIn: string | null;
  courseraname: string | null;
  createdAt: string;
  updatedAt: string;
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
}

interface GFGStats {
  info: {
    userName: string;
    fullName: string;
    institute: string;
    profilePicture: string;
    instituteRank: number;
    currentStreak: number;
    maxStreak: number;
    codingScore: number;
    monthlyScore: number;
    totalProblemsSolved: number;
  };
  solvedStats: {
    easy?: { count: number; questions: Array<{ question: string; questionUrl: string }> };
    medium?: { count: number; questions: Array<{ question: string; questionUrl: string }> };
    hard?: { count: number; questions: Array<{ question: string; questionUrl: string }> };
  };
}

const LeetCodeProgress = () => {
  const [user, setUser] = useState<User>();
  const [leetcodeData, setLeetcodeData] = useState<UserStats>();
  const [gfgData, setGfgData] = useState<GFGStats>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserDetails = async (): Promise<void> => {
    let idToken = localStorage.getItem("idToken");
    if (!idToken) {
      alert("Please log in");
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/user/", {
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
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    void fetchUserDetails();
  }, []);

  // Fetch LeetCode data
  useEffect(() => {
    if (!user?.lcUsername) return;
    const fetchLeetCodeData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://leet-scrape.vercel.app/${user.lcUsername}`
        );
        if (!response.ok) throw new Error("LeetCode User not found");
        const result = await response.json();
        setLeetcodeData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    void fetchLeetCodeData();
  }, [user?.lcUsername]);

  // Fetch GFG data
  useEffect(() => {
    if (!user?.gfgUsername) return;
    const fetchGFGData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://geeks-for-geeks-api-alpha.vercel.app/${user.gfgUsername}`
        );
        if (!response.ok) throw new Error("GFG User not found");
        const result = await response.json();
        setGfgData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    void fetchGFGData();
  }, [user?.gfgUsername]);

  const calculateRealisticProgress = (easy: any, medium: any, hard: any) => {
    const easyWeight = 1,
      mediumWeight = 2,
      hardWeight = 3;
    const totalWeight =
      easy * easyWeight + medium * mediumWeight + hard * hardWeight;
    const maxPossible = 600;
    return Math.min((totalWeight / maxPossible) * 100, 100).toFixed(2);
  };

  const calculateTotalSolvedProblems = () => {
    if (!gfgData?.solvedStats) return 0;
    return Object.values(gfgData.solvedStats).reduce((total, level) => total + level.count, 0);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#ff3131] to-[#ff914d]">
      <WebBar />
      <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative text-center">
          <h2 className="text-xl font-bold text-black">Coding Platforms Progress</h2>
          {error && <p className="text-red-500 mt-2 font-bold">{error}</p>}
        </div>
  
        {/* LeetCode Card */}
        {leetcodeData && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <Card className="w-full bg-orange-100 text-red-600">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold text-[#ff3131]">
                  LeetCode: {user?.lcUsername}
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className="font-bold">Ranking: {leetcodeData.ranking ?? "N/A"}</p>
                    <p className="font-bold">Reputation: {leetcodeData.reputation ?? "N/A"}</p>
                    <p className="font-bold">
                      Acceptance Rate:{" "}
                      {leetcodeData.acceptanceRate
                        ? `${leetcodeData.acceptanceRate.toFixed(2)}%`
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Total Solved: {leetcodeData.totalSolved ?? "N/A"}</p>
                    <p className="font-bold">Total Questions: {leetcodeData.totalQuestions ?? "N/A"}</p>
                    <p className="font-bold">
                      Easy: {leetcodeData.easySolved ?? "N/A"} / {leetcodeData.totalEasy ?? "N/A"}
                    </p>
                    <p className="font-bold">
                      Medium: {leetcodeData.mediumSolved ?? "N/A"} / {leetcodeData.totalMedium ?? "N/A"}
                    </p>
                    <p className="font-bold">
                      Hard: {leetcodeData.hardSolved ?? "N/A"} / {leetcodeData.totalHard ?? "N/A"}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 mt-2 relative">
                  <div
                    className="bg-[#ff3131] text-white h-6 rounded-full text-xs flex items-center justify-center font-bold"
                    style={{
                      width: `${calculateRealisticProgress(
                        leetcodeData.easySolved,
                        leetcodeData.mediumSolved,
                        leetcodeData.hardSolved
                      )}%`,
                    }}
                  >
                    {calculateRealisticProgress(
                      leetcodeData.easySolved,
                      leetcodeData.mediumSolved,
                      leetcodeData.hardSolved
                    )}
                    %
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
  
        {/* GFG Card */}
        {gfgData && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <Card className="w-full bg-green-100 text-green-600">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={gfgData.info.profilePicture}
                    alt="GFG Profile"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-green-700">
                      {gfgData.info.fullName}
                    </h2>
                    <p className="text-green-600">@{gfgData.info.userName}</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-bold">Institute Rank: {gfgData.info.instituteRank ?? "N/A"}</p>
                    <p className="font-bold">Coding Score: {gfgData.info.codingScore ?? "N/A"}</p>
                    <p className="font-bold">Current Streak: {gfgData.info.currentStreak ?? "N/A"}</p>
                  </div>
                  <div>
                    <p className="font-bold">Total Solved: {calculateTotalSolvedProblems()}</p>
                    {Object.entries(gfgData.solvedStats || {}).map(([level, data]) => (
                      <p key={level} className="font-bold capitalize">
                        {level}: {data.count}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
};
  
export default LeetCodeProgress;