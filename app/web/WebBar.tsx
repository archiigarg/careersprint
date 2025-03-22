import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import homeIcon from '@/public/homeicon.svg';
import sectionsIcon from '@/public/sectionsicon.svg';
import progressIcon from '@/public/progressicon.svg';
import profileIcon from '@/public/profileicon.svg';
import moreIcon from '@/public/moreicon.svg';

export const WebBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = (path: string) => {
    void router.push(path);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r-2 border-gray-300 transition-all duration-300 ${isExpanded ? 'w-72' : 'w-24'} font-mono`} 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col items-center py-10 h-full gap-8 ">
        {/* Logo */}
        {isExpanded && <button className='text-2xl font-bold text-orange-500 ' >CareerSprint</button>}
        
        {/* Menu Items */}
        <nav className="flex flex-col items-center w-full gap-6 px-6 ">
          {[
            { icon: homeIcon, label: 'Home', path: '/web/home' },
            { icon: sectionsIcon, label: 'Sections', path: '#' },
            { icon: progressIcon, label: 'Progress', path: '#' },
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
        
        {/* User Profile */}
        <div className="mt-auto flex items-center w-full px-6 pb-8">
          <Image src={profileIcon} alt="User" className="h-16 w-16 rounded-full" />
          {isExpanded && <span className="ml-4 text-lg font-medium">Your Name</span>}
        </div>
      </div>
    </aside>
  );
};