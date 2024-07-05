import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SideBar from './SideBar';
import { Dispatch, SetStateAction } from 'react';
import { NavItem } from './DashboardLayout';

interface MobileSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    currentNavItemName: NavItem;
}

function MobileSidebar({ sidebarOpen, setSidebarOpen, currentNavItemName }: MobileSidebarProps) {
  return (
    <Dialog className="relative z-50 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-bbgray-800 bg-opacity-75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full dark:bg-bbgray-900"
        >
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button type="button" className="-m-2.5 p-2.5 text-bbgray-300 hover:text-bbgray-100" onClick={() => setSidebarOpen(false)}>
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <SideBar currentNavItemName={currentNavItemName} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default MobileSidebar;

