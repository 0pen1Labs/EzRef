import PublicResponseForm from "@/components/PublicResponseForm"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import { auth } from "@clerk/nextjs"
import { notFound } from "next/navigation"

type Params = {
  params: {
    id: string
  }
}

const getForm = async (formCode: string) => {
  const { getToken } = auth()
  const token = await getToken()

    const res = await fetch(`${process.env.BASE_URL}/v1/api/form/getformbyformcode/${formCode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })

    if(res.ok) {
      const resData = await res.json()
      console.log(resData.data)
      return resData.data
    } 
    else {
      return false
    }
}

async function page({ params }: Params) {

  const publicForm = await getForm(params.id)

  if(!publicForm){
    return notFound()
  }

  //TODO make a store to save public form data to show it to the user
  //TODO using that form structure present in the public form page and use proper validation for each field.
  //TODO for each user create a unique id using system config to redirect data duplication
  //TODO call save response API to save response.

  return (
  <div>
    <HeroHighlight containerClassName="w-full h-screen ">
      <PublicResponseForm formStructure={publicForm.Form.formFields}/>
    </HeroHighlight>
  </div>)
}

export default page
