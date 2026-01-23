import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { updateEntry } from '@/app/entries/actions';
import BackButton from '@/app/entries/components/backButton';

export default async function EditEntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const entryId = Number(id);

  if (!Number.isInteger(entryId)) {
    return notFound();
  }

  const entry = await prisma.entry.findUnique({
    where: { id: entryId },
  });

  if (!entry) {
    return notFound();
  }

  return (
    (
      <>
        <head>
          <p>Editing {entry.title}</p>
          <ul>
            <li>
              <BackButton />
            </li>
          </ul>
        </head>
      </>
    ),
    (
      <form action={updateEntry}>
        <input type="hidden" name="id" value={entry.id} />
        <h1>Edit Entry</h1>

        <input
          type="text"
          name="title"
          defaultValue={entry.title}
          placeholder="Title"
          required
        />
        <input name="tag" defaultValue={entry.tag} placeholder="Tag" required />

        <button type="submit">Save</button>
      </form>
    )
  );
}
