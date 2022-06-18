import {z} from 'zod';

export const getBookByIdParam = z.object({
  params: z.object({
    id: z.string().refine((id) => parseInt(id) > 0, '"id should be > 0"'),
  }),
});

export type getBookById = z.infer<typeof getBookByIdParam>;
