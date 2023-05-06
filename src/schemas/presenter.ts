import * as z from 'zod';
export const createPresenterSchema = z.object({
  email: z.string().min(5),
  name: z.string().min(5),
});
