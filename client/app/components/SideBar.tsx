import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ContactBox from './ContactBox';

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SideBarProps {
  currentNavItemName: string;
}

const SideBar = ({ currentNavItemName }: SideBarProps) => {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Demo Accounts', href: '/demo-accounts', icon: UsersIcon },
    { name: 'Sales Material', href: '/sales-material', icon: FolderIcon },
    { name: 'Content Library', href: '/content-library', icon: DocumentDuplicateIcon },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-bbgray-900 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-5 w-auto"
          src="https://usebrainbase.xyz/press-kit/bb_logo_text_white.svg"
          alt="Brainbase"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item: NavigationItem) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.name === currentNavItemName
                        ? 'bg-bbgray-700 text-white'
                        : 'text-bbgray-200 hover:bg-bbgray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.name === currentNavItemName ? 'text-bbgray-100' : 'text-bbgray-100 group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <div className='mt-auto'>
            <ContactBox />
          </div>
          <li className="">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-bbgray-200 hover:bg-bbgray-800 hover:text-white"
            >
              <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-bbgray-200 group-hover:text-white"
                aria-hidden="true"
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;