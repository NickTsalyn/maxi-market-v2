import CardProduct from '@/components/Cards/CardProduct';
import GridProductsCards from '@/layouts/GridProductsCards';
import { ProductCard } from '@/types/interfaces';

type Props = {
  products: ProductCard[];
};

export default function ProductsHome(props: Props) {
  return (
    <section className='py-10 md:py-20'>
      <div className='container'>
        <h2 className='header-1 mb-4 text-center md:text-left md:mb-6'>Акційні товари</h2>
        <GridProductsCards>
          {props.products.map((card, i) => (
            <CardProduct key={i} {...card} />
          ))}
        </GridProductsCards>
      </div>
    </section>
  );
}
