import { ChevronRightIcon } from '@heroicons/react/20/solid';

const accounts = [
  {
    name: 'Sales Agent',
    description: 'Automated lead generation & discovery calls.',
    role: 'Sales',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Slack Worker',
    description: 'Automated Slack monitoring, responses, and actions.',
    role: 'Community',
    imageUrl: 'slack.png',
    href: '#',
    lastSeen: '2 days ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Invoice Parser',
    description: 'Automated parsing of invoices in 50+ file types, agentic actions, and tuned LLM.',
    role: 'Automation',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
];

export default function DemoAccounts() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <header className="font-MessinaSans text-2xl mb-5">Demo Accounts</header>
      </div>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-bbgray-700">
        {accounts.map((account) => (
          <li key={account.name} className="relative flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-bbgray-300">
                  <a href={account.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {account.name}
                  </a>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500 dark:text-bbgray-400">
                  <a className="relative truncate ">
                    {account.description}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-bbgray-300">{account.role}</p>
                {account.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-bbgray-400">
                    Last deployed <time dateTime={account.lastSeenDateTime}>{account.lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500 dark:text-bbgray-400">Online</p>
                  </div>
                )}
              </div>
              <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400 dark:text-bbgray-500" aria-hidden="true" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}