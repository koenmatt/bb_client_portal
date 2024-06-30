import React from 'react'
import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    DocumentDuplicateIcon,
    QuestionMarkCircleIcon,
    Cog6ToothIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
import { useAppSelector } from '@/store';
  
  const actions = [
    {
      title: 'Schedule a Demo',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      description: 'Schedule a live demo of Brainbase with Gokhan (Founder/CEO).'
    },
    {
      title: 'Contact Sales',
      href: '#',
      icon: DocumentDuplicateIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      description: 'Immediately talk to someone on our sales team.'
    },
    {
      title: 'Contact Engineering',
      href: '#',
      icon: Cog6ToothIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
      description: 'Ask a question, submit a feature request, etc.'
    },
    {
      title: 'Support',
      href: '#',
      icon: QuestionMarkCircleIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      description: 'Access educational tools and training modules.'
    },
  ];
  
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  
const url = 'https://calendly.com/usebrainbase/demo?month=2024-07'

const Dash = () => {
  // const authState = useAppSelector((state) => state.auth.isAuthenticated);
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {/* Hello you are {authState ? "Logged  In" : "Logged Out"} */}
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white',
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0 font-MessinaSans" aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm font-MessinaSans text-gray-500">
                    {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      )
    }

export default Dash