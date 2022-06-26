import {z} from 'zod';

const zCreateBookParams = z.object({
  title: z.string().trim(),
  description: z.string().trim(),
  author: z.string().trim(),
});
export const createBookParams = z.object({
  body: zCreateBookParams,
});

export type CreateBookParams = z.infer<typeof zCreateBookParams>;
