"use client";
import React, { useEffect, useState } from "react";
import { WebBar } from "../WebBar";
import { Card, CardContent } from "@/app/components/ui/card";
import { firebaseAuth } from "@/lib/utils";
interface SubmissionCalendar {
  [timestamp: string]: number;
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
  const [data, setData] = useState<UserStats>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<User>();
  const [formData, setFormData] = useState({
    lcUsername: "",
    linkedIn: "",
    courseraname: "",
  });
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
      setFormData({
        lcUsername: data.user.lcUsername || "",
        linkedIn: data.user.linkedIn || "",
        courseraname: data.user.courseraname || "",
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    void fetchUserDetails();
  }, []);

  useEffect(() => {
    if (!user?.lcUsername) return;
    const fetchData = async () => {
      if (!user?.lcUsername) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://leet-scrape.vercel.app/${user.lcUsername}`
        );
        if (!response.ok) throw new Error("User not found");
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [user?.lcUsername]);

  const calculateRealisticProgress = (easy: any, medium: any, hard: any) => {
    const easyWeight = 1,
      mediumWeight = 2,
      hardWeight = 3;
    const totalWeight =
      easy * easyWeight + medium * mediumWeight + hard * hardWeight;
    const maxPossible = 600;
    return Math.min((totalWeight / maxPossible) * 100, 100).toFixed(2);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#ff3131] to-[#ff914d]">
      <WebBar />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative">
          
          <div className=" text-center">
            <h2 className="text-xl font-bold text-black">
              LeetCode Progress Tracker
            </h2>
          </div>

          {error && (
            <p className="text-white mt-2 text-center font-bold">{error}</p>
          )}
          {data && (
            <div className="mt-6 w-full flex flex-wrap gap-4 justify-center">
              <Card className="w-full bg-orange-100 text-red-600">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-[#ff3131]">
                    LeetCode: {user?.lcUsername}
                  </h2>
                  <p className=" font-bold">Ranking: {data.ranking ?? "N/A"}</p>
                  <p className=" font-bold">
                    Reputation: {data.reputation ?? "N/A"}
                  </p>
                  <p className=" font-bold">
                    Acceptance Rate:{" "}
                    {data.acceptanceRate
                      ? `${data.acceptanceRate.toFixed(2)}%`
                      : "N/A"}
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full bg-orange-100">
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#ff3131]">Solved Questions</h3>
                  <p className=" font-bold">
                    Total Solved: {data.totalSolved ?? "N/A"}
                  </p>
                  <p className="font-bold">Easy: {data.easySolved ?? "N/A"}</p>
                  <p className=" font-bold">
                    Medium: {data.mediumSolved ?? "N/A"}
                  </p>
                  <p className=" font-bold">Hard: {data.hardSolved ?? "N/A"}</p>
                </CardContent>
              </Card>
              <Card className="w-full bg-orange-100">
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#ff3131]">Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-6 mt-2 relative">
                    <div
                      className="bg-[#ff3131] h-6 rounded-full  text-xs flex items-center justify-center font-bold"
                      style={{
                        width: `${calculateRealisticProgress(
                          data.easySolved,
                          data.mediumSolved,
                          data.hardSolved
                        )}%`,
                      }}
                    >
                      {calculateRealisticProgress(
                        data.easySolved,
                        data.mediumSolved,
                        data.hardSolved
                      )}
                      %
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
