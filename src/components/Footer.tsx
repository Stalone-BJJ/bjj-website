import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-red-600 bg-black shadow">
      <div className="container mx-auto w-full p-4 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <Link className="hover:underline" href="/">
            Stalone BJJ Academy
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link className="mx-4 hover:underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="mx-4 hover:underline" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="mx-4 hover:underline" href="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="mx-4 hover:underline" href="/terms-and-conditions">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
