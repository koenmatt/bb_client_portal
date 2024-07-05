import Link from 'next/link';
import React from 'react';

interface Props {
    text?: string;
    href: string;
}

const NavButton = (props: Props) => {
    return (
        <Link href={props.href}>
            <button
                type="button"
                className="py-1 px-2 me-2 mb-2 text-sm text-white focus:outline-none rounded-md border-gray-200 bg-blue-600 hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-700 dark:bg-bbgray-800 dark:text-bbgray-300 dark:hover:bg-bbgray-700"
            >
                <span className="font-MessinaSans">{props.text}</span>
            </button>
        </Link>
    );
};

export default NavButton;
