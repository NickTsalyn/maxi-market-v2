'use client';

import { IconAccount, IconFavouriteWhite, IconMainLogo } from '@/components/Icons/Icons';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/?modalContent=auth');
  };

  return (
    <header className='bg-secondary'>
      <div className='container flex md:gap-5 justify-between items-center flex-wrap md:flex-nowrap py-2 md:py-6'>
        <div className='shrink-0 w-[42px] h-5 md:w-24 md:h-12'>
          <Link href={'/'}>
            <IconMainLogo />
          </Link>
        </div>
        <div className='flex flex-nowrap order-last lg:max-w-[644px] 2xl:max-w-[702px] w-full md:order-none h-10 md:h-12'>
          <Input style='search' type='text' />
          <Button style='primary-input' type='button'>
            Знайти
          </Button>
        </div>
        <div className='flex gap-1'>
          <Button style='header' type='button'>
            <IconFavouriteWhite />
            <span className='hidden lg:block'>Обране</span>
          </Button>
          <Button onClick={handleLogin} style='header' type='button'>
            <IconAccount />
            <span className='hidden lg:block'>Увійти</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
