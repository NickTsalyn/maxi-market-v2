import { Category } from '@/types/interfaces';
import Image from 'next/image';

export default function CardCategory(props: Category) {
  return (
    <div className='p-4 min-w-36 max-w[362px] w-full rounded bg-white'>
      <div className='mb-4 overflow-hidden relative h-[100px] md:h-[155px] xl:h-[270px] '>
        <Image
          className='absolute max-w-fit w-60 md:w-[357px] xl:w-[657px] 2xl:w-[863px] -left-4 -top-4 md:-left-12 md:-top-8 xl:top-0 2xl:-left-2'
          src={props.imgUrl}
          alt={props.categoryName}
          width={400}
          height={400}
        />
      </div>
      <h3 className='subtitle-1 text-center'>{props.categoryName}</h3>
    </div>
  );
}
