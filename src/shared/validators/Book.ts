import {z} from 'zod';

export const getBookByIdParam = z.object({
  params: z.object({
    id: z.string().trim(),
  }),
});
