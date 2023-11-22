'use client'

import { FaLinkedin } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import FormField from '@/components/FormField'
import Modal from '@/components/Modal'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setFavorite, setName } from '@/redux/slices/FormSlice'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { Button, Divider } from '@nextui-org/react'
import { useState } from 'react'
import { Snippet } from '@nextui-org/react'
export default function Form() {
  const formStructure = useSelector(
    (state) => state.rootReducer.form.formStructure,
  )
  const name = useSelector((state) => state.rootReducer.form.name)
  const isFavorite = useSelector((state) => state.rootReducer.form.isFavorite)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const shareUrlDomain = useSelector(
    (state) => state.rootReducer.referralLink.domain,
  )
  const shareUrlEndDomain = useSelector(
    (state) => state.rootReducer.referralLink.linkCode,
  )
  const linkName = useSelector((state) => state.rootReducer.referralLink.name)
  const dispatch = useDispatch()

  const shareLink = `https://${shareUrlDomain}/forms/${shareUrlEndDomain}`
  const formFieldLength = formStructure.length

  const handleAction = () => {
    // saveFormAndFinish(formData, formStructure)
    console.log('button clicked')
    setIsModalOpen(!isModalOpen)
  }

  return (
    <form className="flex h-full w-full flex-col">
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
              type="button"
              className="rounded text-black"
              endContent={<ShareIcon className="h-10 w-4 text-black" />}
              onClick={() => handleAction()}
            >
              Share
            </Button>
          </div>
        </div>
        <Divider />
      </div>
      <div className="flex flex-grow items-start justify-center">
        <div className="flex h-full w-2/4 flex-col items-center justify-start gap-4 bg-foreground/5  px-8 py-4">
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
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
          title={`Share ${linkName} with...`}
        >
          <div className="flex w-96 flex-col items-start justify-start">
            <div className="text-sm font-thin text-foreground/60">
              Share it on
            </div>
            <div className="flex-col-row mt-2 flex items-center space-x-2 p-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-foreground/80">
                <FaLinkedin />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-foreground/80">
                <FaXTwitter />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-foreground/80">
                <FaInstagram />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-transparent text-foreground/80">
                <FaWhatsapp />
              </div>
            </div>

            <div className="mt-2 text-sm font-thin text-foreground/60">
              or copy link
            </div>
            <Snippet
              symbol="@"
              variant="bordered"
              className="mt-2 w-full"
              size="sm"
              radius="sm"
            >
              {shareLink}
            </Snippet>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </form>
  )
}
