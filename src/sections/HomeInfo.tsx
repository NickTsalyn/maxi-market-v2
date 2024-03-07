import { IconBasketBlue, IconSellsy } from '@/components/Icons/Icons';
import Button from '@/components/UI/Button';

export default function HomeInfo() {
  return (
    <section className='bg-grey-bg-1 py-10 lg:py-20'>
      <div className='container flex flex-col justify-between gap-10 text-center lg:flex-row lg:text-left lg:gap-6'>
        <section className='flex flex-col items-center lg:items-start lg:max-w-[628px]'>
          <div className='w-10 h-10 mb-4 md:mb-6 lg:mb-8'>
            <IconSellsy />
          </div>
          <h2 className='header-1 mb-6'>Хочете продавати у нас просто?</h2>
          <p className='body-1 mb-6'>
            Створіь сторінку своєї компанії та збільшіть свої продажі за допомогою нашого маркетплейсу
          </p>
          <Button type='button' style='secondary'>
            Докладніше
          </Button>
        </section>
        <section className='flex flex-col items-center lg:items-start lg:max-w-[628px]'>
          <div className='w-10 h-10 mb-4 md:mb-6 lg:mb-8'>
            <IconBasketBlue />
          </div>
          <h2 className='header-1 mb-6'>Купуйте серед тисячі пропозицій - це легко!</h2>
          <p className='body-1 mb-6'>
            Купуйте саме те, що вам треба по кращій ціні. Вся історія ваших покупок в одному місці - це зручно
          </p>
          <Button type='button' style='secondary'>
            Докладніше
          </Button>
        </section>
      </div>
    </section>
  );
}
