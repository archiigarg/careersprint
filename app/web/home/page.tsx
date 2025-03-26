"use client";
import { Button } from "@/app/components/ui/button";
import { WebBar } from "../WebBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/"); 
  };

  return (
    <div className="min-h-screen text-gray-900 flex">
      {/* Sidebar */}
      <div className="w-16 md:w-20 lg:w-24 h-screen fixed left-0 top-0 z-20 bg-white shadow-md">
        <WebBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-20 lg:ml-24 relative">
        {/* Logout Button */}
        <div className="absolute top-6 right-6 z-50">
          <Button 
            className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:border-orange-500 hover:text-orange-500"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 z-0">
            <div 
              className="absolute right-0 top-0 w-full h-full opacity-50 bg-contain bg-right-top bg-no-repeat"
              style={{ backgroundImage: "url('https://www.proteen.com/wp-content/uploads/2023/09/new_home_09-2023-1.jpg')" }}
            ></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-screen px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                An Integrated, Intelligent, Data-Driven Solution For Every Career Counselling Need
              </h1>
              
              <div className="text-base text-gray-700 mb-6">
                <p>Career Guidance & Counselling | Psychometric Assessments |</p>
                <p>Personalised Reports | Career Demos |</p>
                <p>Powerful Dashboard & Analytics for Schools & Institutes | Counsellor Training</p>
              </div>
              
              <Button
                className="bg-orange-500 text-white px-6 py-3 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:border-orange-500 hover:text-orange-500"
                onClick={() => router.push("/web/profilepage")}
              >
                Get Started
              </Button>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
