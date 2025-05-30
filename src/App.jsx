import './App.css'; 

import { useState } from 'react';
import SidebarMenu from './components/sidebar';
import MobileSidebar from './components/mobilesidebar';
import Header from './components/Header';
import Hero from './components/hero';
import Graphswiper from './components/swiper';
import Cardsgrid from './components/cardsgrid';
import Tabsbar from './components/navbar';

export default function App() {
  const [activeTab, setActiveTab] = useState('All posts');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex overflow-x-hidden">
      {/* Fixed Sidebar - only visible on large screens */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen z-10 overflow-y-auto">
        <SidebarMenu />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />

      {/* Main content area */}
      <div className="w-full min-h-screen flex flex-col bg-[#f5f5f5] lg:ml-[320px] lg:w-[calc(100vw-320px)]">
        {/* Header */}
        <div>
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        </div>

        {/* Hero Section */}
        <div className="p-4">
          <Hero />
        </div>

        {/* Swiper Section */}
        <div className="p-4">
          <div className="bg-white rounded-xl pb-10  shadow-md lg:ml-10 p-4">
            <div className="overflow-x-auto overflow-y-hidden">
              <div className="w-max">
                <Graphswiper />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for filtering cards */}
        <div className="mt-10">
          <Tabsbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Cards Grid */}
        <div>
          <Cardsgrid activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
