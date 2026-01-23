'use client';
import { deleteEntry } from '@/app/entries/actions';

export default function DeleteButton({ entryId }: { entryId: number }) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this entry?')) {
      await deleteEntry(entryId);
    }
  };
  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
}
