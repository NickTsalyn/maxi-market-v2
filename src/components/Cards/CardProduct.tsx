import { ProductCard } from '@/types/interfaces';
import Image from 'next/image';
import { IconFavouriteBlack } from '../Icons/Icons';
import Button from '../UI/Button';

export default function CardProduct(props: ProductCard) {
  return (
    <article className='border-[1px] flex flex-col border-grey-stroke rounded w-full min-w-[213px] max-w-[362px]'>
      <div className='h-[230px] overflow-hidden relative'>
        <div className='absolute z-10 right-2 top-2'>
          <Button style='favourite' type='button'>
            <IconFavouriteBlack />
          </Button>
        </div>
        <Image src={props.imgUrl} alt={props.name} width={400} height={400} />
      </div>
      <div className='my-4 px-2 flex-auto flex flex-col justify-between'>
        <h3 className='subtitle-1 mb-6'>{props.name}</h3>
        <p className='body-2 mb-6'>{props.description}</p>
        <div>
          <h4 className='subtitle-2 mb-4'>{props.price} грн</h4>
          <Button style='primary-card'  type='button'>
            Детальніше
          </Button>
        </div>
      </div>
    </article>
  );
}
