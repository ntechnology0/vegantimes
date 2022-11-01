import { z } from "zod"

export const profileSettingsSchema = z.object({
  fullname: z.string().min(4),
  username: z.string().min(4),
})
