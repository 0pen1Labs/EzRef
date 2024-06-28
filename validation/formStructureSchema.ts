import { FieldType } from '@/Types/Link'
import { z } from 'zod'

export const formTitleFieldSchema = z.object({
  title: z.string().min(0).max(50),
  description: z.string().min(0).max(150),
})

export const formFieldSchema = z.object({
  type: z.nativeEnum(FieldType),
  question: z.string().min(0).max(100),
  description: z.string().min(0).max(150),
})

export const formStructureSchema = z
  .tuple([formTitleFieldSchema])
  .rest(formFieldSchema)
