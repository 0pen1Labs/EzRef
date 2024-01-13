import * as z from 'zod'

export const refLinkSchema = z.object({
  name: z.preprocess(
    (arg) => (arg === '' ? undefined : arg),
    z.string().optional(),
  ),
  formCode: z.preprocess(
    (arg) => (arg === '' ? undefined : arg),
    z.string({
      required_error: 'Form code must be provided.',
    }),
  ),
  domain: z.preprocess(
    (arg) => (arg === '' ? undefined : arg),
    z.string({
      required_error: 'Domain must be provided.',
    }),
  ),
})
