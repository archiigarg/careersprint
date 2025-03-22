"use client"
import React from 'react';
import { WebBar } from '../WebBar';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white ml-24 shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="relative">
          <div className="bg-gray-200 h-48 rounded-t-lg"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <div className="h-24 w-24 bg-[#ff3131] rounded-full flex items-center justify-center">
              <div className="bg-white h-20 w-20 rounded-full"></div>
            </div>
          </div>
        </div>
        <WebBar/>
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold">Yashita Puri</h2>
          <p className="text-gray-600 mt-2">Vellore Institute of Technology, Vellore</p>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">PROGRESS</span>
            <span className="text-red-500">VIEW PROGRESS DETAILS</span>
          </div>
          <div className="mt-2 bg-gray-200 h-4 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] h-full rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 bg-gray-200 rounded-full hover:border hover:border-red-600">/linkedin/username</div>
          <span className="px-4 py-2 bg-gray-200 rounded-full hover:border hover:border-red-600">/leetcode/username</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full hover:border hover:border-red-600">/coursera/account</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full hover:border hover:border-red-600">/other/account</span>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">CURRENT STATUS EG. “FOCUSING ON TECHNICAL SKILLS” OR “IMPROVING NETWORK”</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;