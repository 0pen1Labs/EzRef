'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@nextui-org/react'
import { Divider } from '@nextui-org/react'
import { RateFace } from '@/utils/RateFace'
import Image from 'next/image'

type Props = {
  userId: string
}

export default function Feedback({ userId }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [senderEmail, setSenderEmail] = useState<string>()
  const [feedback, setFeedback] = useState<string>()
  const [rating, setRating] = useState<number>()
  const [selected, setSelected] = useState<number>()

  const handleOnclick = (event: any) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  const handleRateFaceClick = (index: number) => {
    setSelected(index)
    setRating(index + 1)
  }

  return (
    <Popover placement="bottom" radius="sm" shadow="sm">
      <PopoverTrigger>
        <Button radius="sm" size="sm" variant="bordered">
          Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[320px] flex-col items-center justify-center rounded-lg border border-foreground/20 bg-background p-2">
        <form
          autoComplete="off"
          className="w-full flex-col space-y-2"
          action={handleOnclick}
        >
          <input
            required
            className="text-md w-full rounded-md border border-foreground/20 bg-transparent px-2 py-1 text-foreground/50 outline-none hover:border-foreground/50 focus:border-foreground/50"
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <textarea
            rows={4}
            placeholder="Your feedback..."
            className="text-md w-full rounded-md border border-foreground/20 bg-transparent p-2 text-foreground/50 outline-none hover:border-foreground/50 focus:border-foreground/50"
          />

          <Divider className="my-2" />
          <div className="flex w-full justify-between">
            <div className="flex flex-row">
              {RateFace.map((item, index) => (
                <div
                  key={index}
                  className={`flex h-6 w-6 items-center justify-center rounded-full p-1 ${
                    index == selected
                      ? 'hover bg-purple/80'
                      : 'hover:bg-purple/80'
                  } `}
                  onClick={() => handleRateFaceClick(index)}
                >
                  <Image
                    width={0}
                    height={0}
                    className="h-5 w-5"
                    src={item}
                    alt="rate face"
                  />
                </div>
              ))}
            </div>
            <Button type="submit" variant="solid" radius="sm" size="sm">
              Send
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
