import { FormSchema } from '@/Types/Link'
import PublicResponseForm from '@/components/PublicResponseForm'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

const getForm = async (formCode: string) => {
  const form = await prisma.refLinks.findUnique({
    where: {
      formCode: formCode,
    },
    select: {
      id: true,
      domain: true,
      formCode: true,
      Form: true,
    },
  })

  if (form) {
    console.log(form)
    return form
  } else {
    return false
  }
}

async function page({ params }: Params) {
  const publicForm = await getForm(params.id)

  if (!publicForm) {
    return notFound()
  }

  //TODO make a store to save public form data to show it to the user
  //TODO using that form structure present in the public form page and use proper validation for each field.
  //TODO for each user create a unique id using system config to redirect data duplication
  //TODO call save response API to save response.

  return (
    <div>
      <HeroHighlight containerClassName="w-full h-screen ">
        <PublicResponseForm
          formStructure={publicForm.Form?.formFields as Array<FormSchema>}
        />
      </HeroHighlight>
    </div>
  )
}

export default page
