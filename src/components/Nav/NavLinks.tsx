"use client";
import { useState } from "react";
import Link from "next/link";
import { NavBar } from "@/types/types";

export default function NavLinks(props: NavBar) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white body-1 px-[6px] py-3 border-b-[1px] md:border-none">
      <div className="grid grid-cols-2 justify-between">
        <h3 className="subtitle-2 mb-4 md:mb-8">{props.heading}</h3>
        <button
          className={`w-6 h-6 justify-self-end md:hidden ${isOpen ? "rotate-180" : ""}`}
          type="button"
          onClick={handleClick}
        >
          <svg className="h-6 w-6 fill-white md:hidden">
            <use href="/assets/icons.svg#icon-chewron_down" />
          </svg>
        </button>
      </div>

      <ul
        className={`flex flex-col gap-2 md:gap-4 ${isOpen ? "md:flex" : "hidden"} md:flex`}
      >
        {props.links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} onClick={handleClick}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
