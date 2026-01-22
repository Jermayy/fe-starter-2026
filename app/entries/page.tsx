import prisma from '@/lib/prismaClient';
import { formatDate } from '@/lib/utils/formatDate.ts';
import EditButton from './components/editButton.tsx';
import DeleteButton from './components/deleteButton.tsx';
import NewButton from './components/newButton.tsx';

export default async function EntriesPage() {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Dev Journal</h1>
      <br />
      <NewButton />
      <br />
      {entries.length === 0 && <p>No entries yet. </p>}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} style={{ marginBottom: '1rem' }}>
            <h3>{entry.title}</h3>
            <p>{entry.tag}</p>
            <small>{formatDate(entry.createdAt)}</small>
            <br />
            <EditButton entryId={entry.id} />
            <br />
            <DeleteButton entryId={entry.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
