import { z } from 'zod';

export const createEntrySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  tag: z.string().min(1, 'Tag is required'),
});

export const updateEntrySchema = createEntrySchema.extend({
  id: z.number().int(),
});
