'use client';
import { useModalStore } from '@/store/modalStore';
import { useEffect } from 'react';

export default function Overlay() {
  const isHamOpen = useModalStore((state) => state.isHamOpen);
  const isEnquireOpen = useModalStore((state) => state.isEnquireOpen);
  const isVideoOpen = useModalStore((state) => state.isVideoOpen);
  const closeAll = useModalStore((state) => state.closeAll);

  const isAnyOpen = isHamOpen || isEnquireOpen || isVideoOpen

  useEffect(() => {
    if (isAnyOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isAnyOpen]);

  return (
    <div
      className={`overlay ${isAnyOpen ? 'is-open' : ''}`}
      onClick={closeAll}
    />
  );
}