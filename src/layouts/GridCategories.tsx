type Props = {
  children?: React.ReactNode;
};

export default function GridCategories(props: Props) {
  return (
    <div className='grid gap-4 justify-center grid-cols-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4'>{props.children}</div>
  );
}
