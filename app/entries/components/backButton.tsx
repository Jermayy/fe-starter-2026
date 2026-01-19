'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const routher = useRouter();

  return (
    <button type="button" onClick={() => routher.push('/entries')}>
      Back to Entries
    </button>
  );
}
