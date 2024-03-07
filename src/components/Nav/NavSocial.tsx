import Link from 'next/link';
import { IconFacebook, IconInstagram, IconYoutube } from '../Icons/Icons';

export default function NavSocial() {
  return (
    <nav>
      <ul className="flex gap-9">
        <li>
          <Link
            href={'https://www.instagram.com/'}
            rel="noopener noreferrer"
            target="_blank">
            <IconInstagram />
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.facebook.com/'}
            rel="noopener noreferrer"
            target="_blank">
            <IconFacebook />
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.youtube.com'}
            rel="noopener noreferrer"
            target="_blank">
            <IconYoutube />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
