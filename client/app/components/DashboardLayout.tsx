'use client';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import MobileSidebar from '../components/MobileSideBar';
import DashHeader from '../components/DashHeader';

export type NavItem = "Dashboard" | "Demo Accounts" | "Sales Material" | "Content Library";

export default function DashboardLayout({ children, currentNavItemName }: { children: React.ReactNode, currentNavItemName: NavItem }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentNavItemName={currentNavItemName} />
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-bbgray-50 dark:bg-bbgray-800">
          <SideBar currentNavItemName={currentNavItemName}></SideBar>
        </div>
        <div className="lg:pl-72">
          <DashHeader setSidebarOpen={setSidebarOpen}></DashHeader>
          <main className="py-10 bg-white dark:bg-bbgray-900 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
