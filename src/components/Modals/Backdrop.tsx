import { useRouter } from 'next/navigation';

type Props = {
  children?: React.ReactNode;
};

export default function Backdrop(props: Props) {
  const router = useRouter();

  const handleHideModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('backdrop')) {
      router.push('/');
    }
  };

  return (
    <div
      onClick={handleHideModal}
      className='backdrop flex justify-center items-center fixed top-0 left-0 w-full h-screen z-10 bg-[#1B1D1F]'
    >
      {props.children}
    </div>
  );
}
