'use client';
import { deleteEntry } from '@/app/entries/actions.ts';

export default function DeleteButton({ entryId }: { entryId: number }) {
  return (
    <button type="button" onClick={() => deleteEntry(entryId)}>
      Delete
    </button>
  );
}
