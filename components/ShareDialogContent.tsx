'use client'

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6'
import { Button } from './ui/button'
import {
  CheckCircledIcon,
  ClipboardCopyIcon,
  Link2Icon,
} from '@radix-ui/react-icons'
import { useState } from 'react'

type Props = {
  domain: string
  formCode: string
}

function ShareDialogContent({ domain, formCode }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const shareLink = `https://${domain}/forms/${formCode}`

  const copyToClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (err) {
      setIsCopied(false)
    }
  }

  return (
    <div className="flex w-96 flex-col items-start justify-start">
      <div className="text-sm font-thin text-foreground/30">Share it on</div>
      <div className="flex-col-row mt-2 flex items-center space-x-2 p-1">
        <Button
          aria-label="LinkedIn"
          className="h-8 w-8 items-center rounded-full border border-foreground/10 bg-transparent text-foreground/80 opacity-80 hover:bg-inherit hover:opacity-100"
          size={'icon'}
        >
          <FaLinkedin />
        </Button>
        <Button
          aria-label="Twitter"
          className="h-8 w-8 items-center rounded-full border border-foreground/10 bg-transparent text-foreground/80 opacity-80 hover:bg-inherit hover:opacity-100"
          size={'icon'}
        >
          <FaXTwitter />
        </Button>
        <Button
          aria-label="Instagram"
          className="h-8 w-8 items-center rounded-full border border-foreground/10 bg-transparent text-foreground/80 opacity-80 hover:bg-inherit hover:opacity-100"
          size={'icon'}
        >
          <FaInstagram />
        </Button>
        <Button
          aria-label="Whatsapp"
          className="h-8 w-8 items-center rounded-full border border-foreground/10 bg-transparent text-foreground/80 opacity-80 hover:bg-inherit hover:opacity-100"
          size={'icon'}
        >
          <FaWhatsapp />
        </Button>
      </div>

      <div className="mt-2 text-sm font-thin text-foreground/30">
        Share link
      </div>
      <div className="flex w-full flex-row items-center space-x-2 rounded-md border border-foreground/20 px-2">
        <Link2Icon className="mr-2 h-6 w-6" />
        <div className="w-full text-sm font-thin text-foreground/70">
          {shareLink}
        </div>
        <Button
          variant={'link'}
          size="icon"
          className="animate-in"
          onClick={() => copyToClipBoard(shareLink)}
        >
          {isCopied ? <CheckCircledIcon /> : <ClipboardCopyIcon />}
        </Button>
      </div>
    </div>
  )
}

export default ShareDialogContent
