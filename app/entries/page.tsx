// app/entries/page.tsx
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils/formatDate';
import EditButton from './components/editButton';
import DeleteButton from './components/deleteButton';
import NewButton from './components/newButton';

export default async function EntriesPage() {
  const entries = await prisma.entry.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Dev Journal</h1>
      <NewButton />
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id} style={{ marginBottom: '1rem' }}>
              <h3>{entry.title}</h3>
              <p>{entry.tag}</p>
              <small>{formatDate(entry.createdAt)}</small>
              <EditButton entryId={entry.id} />
              <DeleteButton entryId={entry.id} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
