'use client';
import { deleteEntry } from '@/app/entries/actions';
import { useTransition } from 'react';

export default function DeleteButton({ entryId }: { entryId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      type="button"
      onClick={() => startTransition(() => deleteEntry(entryId))}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
