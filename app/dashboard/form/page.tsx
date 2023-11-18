'use client'

import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { Button, Divider } from '@nextui-org/react'
export default function Form() {
  return (
    <form className="h-full w-full">
      <div className="sticky top-0 z-10 flex flex-col bg-background/70 px-4 opacity-75 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div className="flex flex-row items-center space-x-2">
            <DocumentTextIcon className="h-10 w-5 text-foreground" />
            <input
              className="w-80 border-foreground bg-transparent p-1 text-xl font-bold text-foreground/80 outline-none placeholder:text-foreground/80 hover:border-b focus:border-b"
              placeholder="Untitled form"
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
        <div className="flex h-screen w-2/4 flex-col bg-foreground/5"></div>
      </div>
    </form>
  )
}
