'use client'

import FormField from '@/components/FormField'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setFavorite, setName } from '@/redux/slices/FormSlice'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { Button, Divider } from '@nextui-org/react'
import { useEffect } from 'react'
export default function Form() {
  const formStructure = useSelector(
    (state) => state.rootReducer.form.formStructure,
  )
  const name = useSelector((state) => state.rootReducer.form.name)
  const isFavorite = useSelector((state) => state.rootReducer.form.isFavorite)
  const dispatch = useDispatch()

  const formFieldLength = formStructure.length
  useEffect(() => {}, [])

  return (
    <form className="h-full w-full">
      <div className="sticky top-0 z-10 flex flex-col bg-background/70 px-4 opacity-75 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div className="flex flex-row items-center space-x-2">
            <DocumentTextIcon className="h-10 w-5 text-foreground" />
            <input
              onChange={(e) => dispatch(setName(e.target.value))}
              className="w-40 border-foreground bg-transparent p-1 text-xl font-bold text-foreground/80 outline-none placeholder:text-foreground/80 hover:border-b focus:border-b"
              value={name}
            />
            <StarIcon
              className={`h-6 w-6 text-foreground/50 hover:text-purple ${
                isFavorite ? 'fill-purple text-purple' : 'fill-none'
              }`}
              onClick={() => dispatch(setFavorite())}
            />
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              color="primary"
              size="sm"
              className="rounded text-black"
              endContent={<ShareIcon className="h-10 w-4 text-black" />}
              onPress={() => {
                console.log('clicked custum')
              }}
            >
              Share
            </Button>
          </div>
        </div>
        <Divider />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-screen w-2/4 flex-col items-center justify-start gap-4 bg-foreground/5 px-8 py-4">
          {formStructure.map((item, index) => (
            <FormField
              key={index}
              title={item.title}
              question={item.question}
              description={item.description}
              size={formFieldLength}
              index={index}
            />
          ))}
        </div>
      </div>
    </form>
  )
}
