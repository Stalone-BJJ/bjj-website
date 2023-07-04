import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav className="sticky top-0 z-10 border-b-2 border-red-600 bg-black px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link className="flex items-center" href="/">
          <Image
            alt="BJJ Logo"
            className="absolute top-0 hidden border-red-600 lg:block"
            height={150}
            src="/images/thumbnail_stalone-logo-1.png"
            width={150}
          />
          <Image
            alt="BJJ Logo"
            className="absolute top-2 border-red-600 lg:hidden"
            height={100}
            src="/images/thumbnail_stalone-logo-1.png"
            width={100}
          />
          <span className="my-4 ml-36 self-center whitespace-nowrap text-3xl font-semibold dark:text-white lg:my-0 lg:ml-40">
            STALONE BJJ ACADEMY
          </span>
        </Link>
        <button
          aria-controls="navbar-default"
          aria-expanded="false"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
          data-collapse-toggle="navbar-default"
          onClick={() => setShowMenu(!showMenu)}
          type="button"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        {showMenu && (
          <div className="w-full lg:hidden" id="navbar-default">
            <ul className="mt-4 flex flex-col items-center justify-center text-center">
              <li className="mb-4">
                <Link
                  className={`text-xl ${
                    pathName === "/" ? "font-bold text-red-600" : "text-white"
                  }`}
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className={`text-xl ${
                    pathName === "/schedule"
                      ? "font-bold text-red-600"
                      : "text-white"
                  }`}
                  href="/schedule"
                >
                  SCHEDULE
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className={`text-xl ${
                    pathName === "/contact"
                      ? "font-bold text-red-600"
                      : "text-white"
                  }`}
                  href="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className={`text-xl ${
                    pathName === "/gallery"
                      ? "font-bold text-red-600"
                      : "text-white"
                  }`}
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 lg:mt-0 lg:flex-row lg:space-x-8 lg:font-medium">
            <li>
              <Link
                aria-current="page"
                className={`${
                  pathName === "/" ? "font-bold text-red-600" : "text-white"
                } block rounded py-2 pl-3 pr-4 hover:text-red-600 lg:border-0 lg:p-0`}
                href="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/gallery"
                    ? "font-bold text-red-600"
                    : "text-white"
                } block rounded py-2 pl-3 pr-4 hover:text-red-600 lg:border-0 lg:p-0`}
                href="/gallery"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/schedule"
                    ? "font-bold text-red-600"
                    : "text-white"
                } block rounded py-2 pl-3 pr-4 hover:text-red-600 lg:border-0 lg:p-0`}
                href="/schedule"
              >
                SCHEDULE
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathName === "/contact"
                    ? "font-bold text-red-600"
                    : "text-white"
                } block rounded py-2 pl-3 pr-4 hover:text-red-600 lg:border-0 lg:p-0`}
                href="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
