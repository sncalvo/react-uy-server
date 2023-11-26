'use server'

import type { createPresenterSchema } from "@/schemas/presenter";
import * as z from "zod";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

import { v4 as uuidv4 } from "uuid";

export default async function createPresenter(presenter: z.infer<typeof createPresenterSchema>) {
  const { email, firstName, lastName, subject } = presenter;

  const name = `${firstName} ${lastName}`
  const id = uuidv4();

  await sql`INSERT INTO "Presenter" (id, email, name, subject) VALUES (${id}, ${email}, ${name}, ${subject})`;

  redirect('/?success=true');
}
