'use server';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createEntry(formData: FormData) {
  'use server';

  const title = formData.get('title') as string;
  const tag = formData.get('tag') as string;

  if (!title || !tag) {
    throw new Error('Title and Tag are required');
  }

  await prisma.entry.create({
    data: { title, tag },
  });

  redirect('/entries'); // after creation, go back to entries list
}

export async function updateEntry(formData: FormData) {
  'use server';
  const id = Number(formData.get('id'));
  const title = formData.get('title') as string;
  const tag = formData.get('tag') as string;

  if (!Number.isInteger(id) || !title || !tag)
    throw new Error('invalid update payload');

  await prisma.entry.update({
    where: { id: id },
    data: { title, tag },
  });

  redirect('/entries');
}

export async function deleteEntry(entryId: number) {
  if (!Number.isInteger(entryId)) throw new Error('Invalid entry ID');

  await prisma.entry.delete({
    where: { id: entryId },
  });

  redirect('/entries');
}
