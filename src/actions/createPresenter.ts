'use server'

import type { createPresenterSchema } from "@/schemas/presenter";
import * as z from "zod";
import prisma from "@/lib/db";

export default async function createPresenter(presenter: z.infer<typeof createPresenterSchema>) {
  return prisma.presenter.create({ data: presenter });
}
