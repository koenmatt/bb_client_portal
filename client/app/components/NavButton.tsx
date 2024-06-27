import Link from 'next/link';
import React from 'react';

interface Props {
    text?: string,
    href: string
}

const NavButton = (props: Props) => {
    return (
        <Link href={props.href}>
            <button 
            
            type="button" 
            className="py-1 px-2 me-2 mb-2 text-sm text-white focus:outline-none  rounded-md border 
            border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 
            focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
            dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700">
            
            <span className="font-MessinaSans">{props.text}</span>

             </button>
        </Link>
    )
}

export default NavButton