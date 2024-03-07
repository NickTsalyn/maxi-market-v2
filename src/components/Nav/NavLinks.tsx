import { NavBar } from '@/types/types';
import Link from 'next/link';

export default function NavLinks(props: NavBar) {
  return (
    <nav className="text-white body-1 px-[6px] py-3 border-b-[1px] md:border-none">
      <h3 className="subtitle-2 mb-4 md:mb-8">{props.heading}</h3>
      <ul className="flex flex-col gap-2 md:gap-4">
        {props.links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
