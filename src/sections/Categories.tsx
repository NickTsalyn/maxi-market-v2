import CardCategory from '@/components/Cards/CardCategory';
import Button from '@/components/UI/Button';
import GridCategories from '@/layouts/GridCategories';
import { Category } from '@/types/interfaces';

type Props = {
  categories: Category[];
};

export default function Categories(props: Props) {
  return (
    <section className='bg-grey-bg-2 py-10 md:py-20'>
      <div className='container'>
        <h2 className='header-1 text-center mb-4 md:text-left md:mb-6'>Категорії товарів</h2>
        <GridCategories>
          {props.categories.map((category, i) => (
            <CardCategory key={i} {...category} />
          ))}
        </GridCategories>
        <div className='flex justify-center mt-8'>
          <Button style='secondary' type='button'>
            Дивитися більше
          </Button>
        </div>
      </div>
    </section>
  );
}
