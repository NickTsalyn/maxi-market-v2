import { MOCK_CATEGORIES, MOCK_PRODUCT_CARDS } from '@/global/vars';
import Categories from '@/sections/Categories';
import ProductsHome from '@/sections/ProductsHome';
import HomeInfo from '@/sections/HomeInfo';
import NewsSubscription from '@/sections/NewsSubscription';

export default function Home() {
  return (
    <>
      <Categories categories={MOCK_CATEGORIES} />
      <ProductsHome products={MOCK_PRODUCT_CARDS} />
      <HomeInfo />
      <NewsSubscription />
    </>
  );
}
