import { redirect } from 'next/navigation';
import prisma from '@/lib/prismaClient.ts';
import BackButton from '@/app/entries/components/backButton.tsx';

export default async function NewEntryPage() {
  async function createEntry(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const tag = formData.get('tag') as string;

    if (!title || !tag) {
      redirect('/entries/new');
      throw new Error('Title and Tag are required');
    }

    await prisma.entry.create({
      data: { title, tag },
    });

    redirect('/entries'); // after creation, go back to entries list
  }

  return (
    (
      <body>
        <p>New Entry</p>
        <ul>
          <li>
            <BackButton />
          </li>
        </ul>
      </body>
    ),
    (
      <form action={createEntry}>
        <input name="title" placeholder="Title" defaultValue="" />
        <input name="tag" placeholder="Tag" defaultValue="" />
        <button type="submit">Create Entry</button>
      </form>
    )
  );
}
