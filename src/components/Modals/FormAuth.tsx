'use client';

import { useRouter } from 'next/navigation';
import { IconClose } from '../Icons/Icons';
import Button from '../UI/Button';
import Input from '../UI/Input';

export default function FormAuth() {
  const router = useRouter();

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className='flex justify-end w-full h-10 md:mb-6'>
        <div onClick={handleClose} className='cursor-pointer'>
          <IconClose />
        </div>
      </div>
      <div className='2xl:p-12'>
        <h2 className='header-1 mb-2 text-center md:mb-4'>Авторизація</h2>
        <p className='body-1 mb-6 text-center md:mb-8'>
          Увійдіть, щоб додавати товари у Обране, писати продавцям і бачити свої замовлення
        </p>
        <div className='flex flex-col gap-2 mb-4 md:gap-8 md:mb-8'>
          <Input label='Ваш Email' placeholder='введіть Email' style='form' type='email' />
          <Input label='Ваш Пароль' placeholder='введіть Пароль' style='form' type='password' />
        </div>
        <p className='body-1 mb-4 md:mb-8'>Забули пароль?</p>
        <div className='mb-4 md:mb-8'>
          <Button style='wide-primary' type='submit'>
            Увійти
          </Button>
        </div>
        <p className='body-1 text-center'>
          Ще не зареєстровані <span className='text-secondary'>Зареєструватися</span>
        </p>
      </div>
    </form>
  );
}
