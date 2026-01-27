'use server';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { createEntrySchema, updateEntrySchema } from '@/lib/validation/entry';

function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function createEntry(formData: FormData) {
  'use server';

  const parsedData = createEntrySchema.safeParse(formDataToObject(formData));

  if (!parsedData.success) {
    throw new Error(parsedData.error.issues[0].message);
  }

  await prisma.entry.create({
    data: parsedData.data,
  });

  redirect('/entries'); // after creation, go back to entries list
}

export async function updateEntry(formData: FormData) {
  'use server';

  const rawData = formDataToObject(formData);
  const parsedData = updateEntrySchema.safeParse({
    ...rawData,
    id: Number(rawData.id),
  });

  if (!parsedData.success) {
    throw new Error(parsedData.error.issues[0].message);
  }

  const { id, ...data } = parsedData.data;

  await prisma.entry.update({
    where: { id: id },
    data,
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
