import { Bars3Icon, BellIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

interface DashHeaderProps {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function DashHeader({ setSidebarOpen }: DashHeaderProps) {
  const router = useRouter();

  async function handleLogOut() {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      router.push('/');
    } else {
      const body = await response.json();
      alert(body.message);
    }
  }

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-bbgray-200 bg-white shadow-sm px-4 sm:gap-x-6 sm:px-6 lg:px-8 dark:bg-bbgray-800">
      <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden dark:text-bbgray-400" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">Search</label>
          <MagnifyingGlassIcon className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
          <input id="search-field" className="block h-full w-full bg-white dark:bg-bbgray-800 border-0 py-0 pl-8 pr-0 text-gray-900 dark:text-bbgray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:text-bbgray-300 dark:hover:text-bbgray-100">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />
          <button onClick={handleLogOut} className="flex items-center">
            <span className='font-MessinaSans text-black dark:text-white'>Log out</span>
            <ArrowRightIcon className='h-4 inline ml-1 text-black dark:text-white'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
