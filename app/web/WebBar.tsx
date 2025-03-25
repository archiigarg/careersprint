import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import homeIcon from '@/public/homeicon.svg';
import sectionsIcon from '@/public/sectionsicon.svg';
import progressIcon from '@/public/progressicon.svg';
import profileIcon from '@/public/profileicon.svg';
import moreIcon from '@/public/moreicon.svg';
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

export const WebBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const navigate = (path: string) => {
    void router.push(path);
  };
  
  const [user, setUser] = useState<User>();
  const [formData, setFormData] = useState({
    lcUsername: "",
    linkedIn: "",
    courseraname: "",
    gfgUsername: "",
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
        gfgUsername: data.user.gfgUsername || "",
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(()=>{
    void fetchUserDetails();
  },[]);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r-2 border-gray-300 transition-all duration-300 ${isExpanded ? 'w-72' : 'w-24'} font-mono`} 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col items-center py-10 h-full gap-8 ">
        {isExpanded && <button className='text-2xl font-bold text-orange-500 ' >CareerSprint</button>}
        
        <nav className="flex flex-col items-center w-full gap-6 px-6 ">
          {[
            { icon: homeIcon, label: 'Home', path: '/web/home' },
            { icon: sectionsIcon, label: 'Sections', path: '/web/sections' },
            { icon: progressIcon, label: 'Progress', path: '/web/progress' },
            { icon: profileIcon, label: 'Profile', path: '/web/profilepage' },
            { icon: moreIcon, label: 'More', path: '#' },
          ].map(({ icon, label, path }, index) => (
            <button
              key={index}
              className='flex items-center gap-5 w-full text-gray-700  p-3 rounded-lg hover:text-white hover:bg-[#ff3131] '
              onClick={() => navigate(path)}
            >
              <Image alt={label} src={icon} className='h-10 w-10' />
              {isExpanded && <span className="text-lg font-medium ">{label}</span>}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col items-center w-full px-6 pb-8 text-center">
          <Image src={profileIcon} alt="User" className="h-16 w-16 rounded-full" />
          {isExpanded && <span className="mt-2 text-lg font-medium">{user?.name}</span>}
         </div>
      </div>
    </aside>
  );
};