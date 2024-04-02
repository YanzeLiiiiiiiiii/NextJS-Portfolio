"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const RoutMap = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];
export default function Navbar() {
    const [isNavBarShow, setNavBar] = useState(false)
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="md:text-5xl text-white font-semibold"
                >
                    <span className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-400'>Portfolio</span>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!isNavBarShow ? (
                        <button
                            onClick={() => setNavBar(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-[#d6c776] hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavBar(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                        {RoutMap.map((link, index) => (
                            <li key={index}>
                                <Navlink path={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isNavBarShow ? <MenuOverlay links={RoutMap} /> : null}
        </nav>
    )
}
