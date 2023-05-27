"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSearchContext } from "@/context/search";

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
        <Image src="/logo.svg" alt="Logo" width={192} height={40} />
      </Link>
      <nav className="relative flex flex-wrap items-center justify-between px-3 py-3 bg-white mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <Image src="/search.svg" alt="Bars" width={25} height={25} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                className="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white bg-gray-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src="/bars.svg" alt="Bars" width={25} height={25} />
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item px-2 mt-2 mb-2 lg:mb-0 lg:mt-0">
                <Link href={"/tags/email"}>E-Mail</Link>
              </li>
              <li className="nav-item px-2  mb-2 lg:mb-0">
                <Link href={"/tags/numbers"}>Numbers</Link>
              </li>
              <li className="nav-item px-2  mb-2 lg:mb-0">
                <Link href={"/tags/strings"}>Strings</Link>
              </li>
              <li className="nav-item px-2  mb-2 lg:mb-0">
                <Link href={"/tags/date-time"}>Date/Time</Link>
              </li>
              <li className="nav-item px-2  mb-2 lg:mb-0">
                <Link href={"/tags/uk"}>UK</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

import React from "react";
