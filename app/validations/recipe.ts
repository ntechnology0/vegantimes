import { z } from "zod"

export const recipeSchema = z.object({
  title: z.string().min(3).max(128).optional(),
  content: z.any().optional(),
})
