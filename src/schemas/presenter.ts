import * as z from 'zod';

export const createPresenterSchema = z.object({
  email: z.string().min(5),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  subject: z.string().min(10),
});
