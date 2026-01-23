'use client';
import { useRouter } from 'next/navigation';

export default function NewButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/entries/new')}>
      New Entry
    </button>
  );
}
