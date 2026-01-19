'use server';
import prisma from '@/lib/prismaClient.ts';
import { redirect } from 'next/navigation';

export async function deleteEntry(entryId: number) {
  if (!Number.isInteger(entryId)) {
    throw new Error('Invalid entry ID');
  }

  const entry = await prisma.entry.findUnique({
    where: { id: entryId },
  });

  if (!entry) {
    throw new Error('Entry not found');
  }

  await prisma.entry.delete({
    where: { id: entryId },
  });

  redirect('/entries');
}
