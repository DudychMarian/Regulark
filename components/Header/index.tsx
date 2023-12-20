"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {useSearchContext} from "@/context/search";

import styles from "./Header.module.scss";

export const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [_, setValue] = useSearchContext();

	const handleInputChange = (e: any) => {
		setValue(e.target.value);
	};

	return (
		<header className={styles.header}>
			<Link href="/">
				<Image src="/logo.svg" alt="Logo" width={192} height={40}/>
			</Link>
			<nav className="relative flex flex-wrap items-center justify-between px-3 py-3 bg-white mb-3">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<div className="relative w-full flex items-center">
						  <span
							  className="absolute z-10 h-full leading-snug text-slate-300 text-center bg-transparent rounded text-base flex items-center justify-center w-8 pl-3 py-3">
						    <Image src="/search.svg" alt="Bars" width={25} height={25}/>
						  </span>
							<input
								type="text"
								placeholder="Search..."
								onChange={handleInputChange}
								className="relative w-full pl-10 py-3 pr-3 text-sm bg-white border rounded placeholder-slate-400 text-slate-600 focus:outline-none focus:ring shadow"
							/>
						</div>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<Image src="/bars.svg" alt="Bars" width={25} height={25}/>
						</button>
					</div>
					<div className={`lg:flex flex-grow items-center ${navbarOpen ? "flex" : "hidden"}`}
					     id="example-navbar-danger">
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item px-2 mb-2 lg:mb-0 border-b lg:border-b-0 hover:bg-gray-100 w-full lg:w-auto">
								<Link href="/tags/email">E-Mail</Link>
							</li>
							<li className="nav-item px-2 mb-2 lg:mb-0 border-b lg:border-b-0 hover:bg-gray-100 w-full lg:w-auto">
								<Link href="/tags/numbers">Numbers</Link>
							</li>
							<li className="nav-item px-2 mb-2 lg:mb-0 border-b lg:border-b-0 hover:bg-gray-100 w-full lg:w-auto">
								<Link href="/tags/strings">Strings</Link>
							</li>
							<li className="nav-item px-2 mb-2 lg:mb-0 border-b lg:border-b-0 hover:bg-gray-100 w-full lg:w-auto">
								<Link href="/tags/uk">UK</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

