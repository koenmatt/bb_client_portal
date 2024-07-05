import React from 'react';
import NavButton from './NavButton';

interface Props {
    navButton: boolean;
}

const NavBar = (props: Props) => {
    return (
        <header className="bg-bbgray-900">
            <nav className="flex items-center px-4 pt-5 sm:px-8 sm:py-5" aria-label="Global">
                <div className="flex items-center lg:flex-1">
                    <a href="/" className="-mt-1">
                        <span className="sr-only">Brainbase</span>
                        <img className="h-5 sm:h-7 w-auto" src="bb_logo_white.svg" alt="Logo" />
                    </a>
                    <div className="ml-2 sm:ml-3 text-white text-md sm:text-xl font-semibold">
                        <a href="/">
                            Brainbase
                            <span className="font-normal ml-1 hidden sm:inline">Partner Portal</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 justify-end -mr-2">
                    {props.navButton && <NavButton text="Create Account" href="/create" />}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
