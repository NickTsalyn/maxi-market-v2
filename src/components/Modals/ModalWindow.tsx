'use client';

import { useSearchParams } from 'next/navigation';
import Backdrop from './Backdrop';
import Modal from './Modal';

export default function ModalWindow() {
  const searchParams = useSearchParams();
  const modalContent = searchParams.get('modalContent');

  if (modalContent) {
    return (
      <Backdrop>
        <Modal />
      </Backdrop>
    );
  }

  return null;
}
