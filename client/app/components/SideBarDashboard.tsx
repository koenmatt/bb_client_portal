'use client';
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import SideBar from './SideBar'
import Dash from './Dash'
import { useRouter } from 'next/navigation';

import { logout } from '@/lib/cookies';


const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Demo Accounts', href: '#', icon: UsersIcon, current: false },
  { name: 'Sales Material', href: '#', icon: FolderIcon, current: false },
//   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Content Library', href: '#', icon: DocumentDuplicateIcon, current: false },
//   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

async function handleLogOut() {

  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    router.push('/')
  } else {
    const body = await response.json()
    alert(body.message)
    
  }

}

  return (
    <>
      <div>
        <Dialog className="relative z-50 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-white transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component */}
              <SideBar navigation={navigation} teams={teams}></SideBar>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component */}
          <SideBar navigation={navigation} teams={teams}></SideBar>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-bbgray-50 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1 " action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full bg-bbgray-50 border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />
                <button onClick={handleLogOut}>
                <span className='font-MessinaSans text-black'>Log out</span>
                 <ArrowRightIcon className='h-4 inline ml-1'/>
                </button>

              </div>
            </div>
          </div>

          <main className="py-10 bg-bbgray-50 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8">

            <Dash />

            </div>
          </main>
        </div>
      </div>
    </>
  )
}
