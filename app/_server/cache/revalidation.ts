"use server";

import { revalidatePath } from "next/cache";

export const revalidateFormIdPage = async () => {
  revalidatePath("/form/[id]", "page");
};
