"use client"
import { Button } from "@/app/components/ui/button";
import { WebBar } from "../WebBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-orange-50 text-gray-900">
      <WebBar/>
      <section className="text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-100 text-orange-700 px-4 py-2 inline-block rounded-full text-sm mb-4">
            Take Full Control of Your Task
          </div>
          <h1 className="text-4xl font-bold mb-4">Empowering Teams, One Task at a Time, Every Day</h1>
          <p className="text-gray-600 mb-6">
            Mondai was created to meet the need for a fast, intuitive, and flexible task management platform that helps teams achieve maximum productivity.
          </p>
          <div className="space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Download App</Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-12 px-6 bg-white shadow-md max-w-5xl mx-auto rounded-lg">
        <div>
          <h2 className="text-2xl font-bold">2015+</h2>
          <p className="text-gray-600">Product release</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">1500+</h2>
          <p className="text-gray-600">People building</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">500+</h2>
          <p className="text-gray-600">Countries use Mondai</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">300K+</h2>
          <p className="text-gray-600">Customers rely on us</p>
        </div>
      </section>
    </div>
  );
}
