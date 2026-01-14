import { redirect } from 'next/navigation';
import prisma from '@/lib/prismaClient.ts';

export default async function NewEntryPage() {
  async function createEntry(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const tag = formData.get('tag') as string;

    if (!title || !tag) throw new Error('Title and Tag are required');

    await prisma.entry.create({
      data: { title, tag },
    });

    redirect('/entries'); // after creation, go back to entries list
  }

  return (
    <form action={createEntry}>
      <input name="title" placeholder="Title" />
      <input name="tag" placeholder="Tag" />
      <button type="submit">Create Entry</button>
    </form>
  );
}
