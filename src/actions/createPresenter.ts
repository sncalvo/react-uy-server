'use server'

import type { createPresenterSchema } from "@/schemas/presenter";
import * as z from "zod";

import { sql } from "@vercel/postgres";

export default async function createPresenter(presenter: z.infer<typeof createPresenterSchema>) {
  const { email, firstName, lastName, presentationDescription, companyName } = presenter;

  await sql`INSERT INTO "PresenterRequest" (email, "firstName", "lastName", "presentationDescription", "companyName") VALUES (${email}, ${firstName}, ${lastName}, ${presentationDescription}, ${companyName})`;
}
