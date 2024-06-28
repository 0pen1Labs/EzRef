import { FormSchema } from '@/Types/Link'
import FormField from './FormField'
import { ZodError, z } from 'zod'
import {
  formFieldSchema,
  formTitleFieldSchema,
} from '@/validation/formStructureSchema'
import { getErrorFromZod } from '@/lib/utils'

type Props = {
  formStructure: Array<FormSchema>
  formError:
    | ZodError<
        Array<
          z.infer<typeof formTitleFieldSchema> | z.infer<typeof formFieldSchema>
        >
      >
    | undefined
}
function FormPage({ formStructure, formError }: Props) {
  return (
    <div className="flex h-full w-2/4 flex-col items-center justify-start gap-4 bg-foreground/5  px-8 py-4">
      {formStructure.map((item, index) => (
        <FormField
          key={index}
          title={item.title}
          question={item.question}
          description={item.description}
          size={formStructure.length}
          type={item.type}
          index={index}
          isError={formError && getErrorFromZod(index, formError).isError}
          errorField={
            formError && getErrorFromZod(index, formError).errorFields
          }
        />
      ))}
    </div>
  )
}

export default FormPage
