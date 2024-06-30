import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';


interface NavigationItem {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    current: boolean;
  }

interface Props {
    navigation: NavigationItem[],
    teams: TeamItem[],
    selectItem: any,
    selectedItem: any
}

interface TeamItem {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }


  

const SideBar = (props: Props) => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }


    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-bbgray-900 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    className="h-7 w-auto"
                    src="bb_logo_white.svg"
                    alt="Your Company"
                  />
                  <span className='ml-2 mt-2 text-white text-lg font-nmbold'>Brainbase</span>
                  {/* <span className='ml-1 mt-2 text-white font-nm'>Partner Portal</span> */}

                  
                  {/* <span className='font-nm ml-1 text-white mt-2'> Partner Portal</span> */}
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {props.navigation.map((item: NavigationItem) => (          
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                // selected tab
                                  ? 'bg-bbgray-700 text-white'  
                                  : 'text-bbgray-200 hover:bg-bbgray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current ? 'text-bgray-100' : 'text-bgray-100 group-hover:text-white',
                                  'h-6 w-6 shrink-0',
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      {/* <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {props.teams.map((team: TeamItem) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-bbgray-300 text-white'
                                  : 'text-indigo-200 hover:bg-bbgray-300 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-bbgray-500 text-[0.625rem] font-medium text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul> */}
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
    )
}

export default SideBar