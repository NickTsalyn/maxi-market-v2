import { useSearchParams } from 'next/navigation';
import FormAuth from './FormAuth';

export default function Modal() {
  const searchParams = useSearchParams();
  const modalContent = searchParams.get('modalContent');

  let modalFormComponent: React.ReactNode;

  switch (modalContent) {
    case 'auth':
      modalFormComponent = <FormAuth />;
      break;
    case 'register':
      modalFormComponent = 'form register';
    default:
      break;
  }

  return (
    <div className='p-4 pb-10 bg-white rounded w-full md:max-w-[662px] md:p-10 lg:p-8 lg:max-w-[652px] 2xl:max-w-[748px]'>
      {modalFormComponent}
    </div>
  );
}
