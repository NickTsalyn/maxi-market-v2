import { IconMainLogo } from '../components/Icons/Icons';
import NavLinks from '../components/Nav/NavLinks';
import NavSocial from '../components/Nav/NavSocial';
import { NAVBARS } from '@/global/vars';

export default function Footer() {
  return (
    <footer className='bg-tertiary body-1 px-4 py-10 flex flex-col items-center gap-5 md:gap-10 md:py-16 md:px-10 xl:flex-row xl:justify-between xl:p-20 2xl:px-[200px] 2xl:pt-[60px] 2xl:pb-[180px]'>
      <div className='flex flex-col gap-5 items-center md:gap-10 lg:items-start xl:gap-16'>
        <div className='w-[100px] h-12'>
          <IconMainLogo />
        </div>
        <NavSocial />
      </div>
      <div className='w-full flex flex-col gap-2 md:flex-row md:justify-between lg:max-w-[945px]'>
        {NAVBARS.map((nav, i) => (
          <NavLinks key={i} {...nav} />
        ))}
      </div>
    </footer>
  );
}
