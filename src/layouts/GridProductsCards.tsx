type Props = {
  children?: React.ReactNode;
};

export default function GridProductsCards(props: Props) {
  return <div className='grid gap-4 justify-center md:grid-cols-3 md:gap-6 xl:grid-cols-4'>{props.children}</div>;
}
