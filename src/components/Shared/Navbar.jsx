"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/CoverPhoto/Mr._Coffee.svg";
import { signOut } from "next-auth/react";

const navbarMenu = () => {
  return (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/ourmenu"}>Our Collection</Link>
      </li>
      <li>
        <Link href={"/dashboard/admin"}>Admin</Link>
      </li>
      <li>
        <Link href={"/dashboard/user"}>User</Link>
      </li>
    </>
  );
};

const Navbar = ({ session }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navbarMenu()}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-accent rounded-full py-4 text-2xl">
          <Image src={logo} width={100} height={50} alt="logo"></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarMenu()}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              src={
                session?.user?.image ||
                "https://www.freepik.com/free-photos-vectors/avatar"
              }
              width={500}
              height={500}
              alt="picture"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <Link
          href="/blogs/create"
          className="btn btn-accent rounded-full text-white px-5"
        >
          Post Blog
        </Link>
        {session?.user ? (
          <Link
            href="/login"
            onClick={() => signOut()}
            className="btn btn-accent  text-white rounded-full px-5"
          >
            Log Out
          </Link>
        ) : (
          <Link
            href="/login"
            className="btn btn-accent  text-white rounded-full px-5"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
