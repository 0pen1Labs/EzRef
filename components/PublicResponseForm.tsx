'use client'

import Logo from './Logo'
import PublicFormField from './PublicFormField'
import { useState } from 'react'
import Feedback from './Feedback'
import { ThemeSwitcher } from './ThemeSwitcher'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from './ui/button'
import Footer from './Footer'
import { FieldType, FormSchema } from '@/Types/Link'

type Params = {
  formStructure: Array<FormSchema>
}

function PublicResponseForm({ formStructure }: Params) {
  const fields = formStructure.slice(1)
  const [currentField, setCurrentField] = useState(0)
  const formTitle = formStructure[0].title
  const formDescription = formStructure[0].description

  function handleNext() {
    if (currentField < fields.length) {
      console.log('going next')
      setCurrentField((prev) => prev + 1)
    }
  }

  function handleSubmit() {
    console.log('submitted')
  }

  return (
    <div className="z-50 flex h-screen w-screen flex-col bg-transparent text-foreground">
      {/* TODO: put this in layout */}
      <div className="flex flex-row items-center justify-between px-10 py-4 pt-6 text-foreground md:px-32">
        <Logo />
        <div className="flex flex-row items-center space-x-4">
          <Link
            href="https://github.com/0pen1Labs/RefLink"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
      {/* --------------------------- */}
      <div className="flex h-full w-full flex-grow flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-light text-foreground/80">
            {formTitle}
          </div>
          <div className="mt-4 text-lg font-light text-foreground/50">
            {formDescription}
          </div>
        </div>
        <PublicFormField
          fieldId={fields[currentField].fid as string}
          className="mt-8 md:mt-14"
          question={fields[currentField].question}
          type={fields[currentField].type as FieldType}
          description={fields[currentField].description}
          currentIndex={currentField}
          setCurrentIndex={setCurrentField}
          totalItems={fields.length}
        />
      </div>
      <Footer className="bg-transparent" />
    </div>
  )
}

export default PublicResponseForm
