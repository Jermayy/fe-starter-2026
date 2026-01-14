import prisma from '@/lib/prismaClient.ts';
import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';

async function updateEntry(formData: FormData) {
  'use server';
  const id = Number(formData.get('id'));
  const title = formData.get('title') as string;
  const tag = formData.get('tag') as string;

  console.log([...formData.entries()]); // delete later

  if (!id || !title || !tag) throw new Error('Missing fields');

  await prisma.entry.update({
    where: { id: id },
    data: { title, tag },
  });

  redirect('/entries');
}

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
  );
}
