'use client';
import { useRouter } from 'next/navigation';

export default function EditButton({ entryId }: { entryId: number }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(`/entries/${entryId}/edit`)}
    >
      Edit
    </button>
  );
}
