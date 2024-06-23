import { FormSchema } from '@/Types/Link'
import FormField from './FormField'

type Props = {
  formStructure: Array<FormSchema>
}
function FormPage({ formStructure }: Props) {
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
        />
      ))}
    </div>
  )
}

export default FormPage
