'use client'

import { Tabs, Tab, Divider } from '@nextui-org/react'
import { useState } from 'react'
import LinkInputEzref from './LinkInputEzref'

function GenerateNewLinkCard() {
  const [selectedTab, setSelectedTabs] = useState<string>('ezref')

  return (
    <div className="flex w-full flex-col rounded-md bg-gradient-to-t from-[#797979]/10 to-background p-10 dark:bg-gradient-to-t dark:from-[#121212]/30 dark:to-background">
      <div className="text-2xl font-normal text-foreground/80">
        Generate new referral
      </div>
      <form className="mt-4 flex flex-col space-y-2">
        <input
          type="text"
          name="title"
          placeholder="Name your referral (optional)"
          className="mb-3 w-4/12 rounded-md border border-foreground/20 bg-gray-50 px-4 py-2 text-base font-thin text-foreground outline-none placeholder:text-foreground/30 hover:border-foreground/50 focus:border-foreground/50 dark:bg-foreground/5"
        />
        <Tabs
          aria-label="options"
          variant="underlined"
          color="primary"
          disabledKeys={['custom']}
        >
          <Tab key={'ezref'} title={'EzRef Domain'}>
            <LinkInputEzref />
          </Tab>
          <Tab
            key={'custom'}
            title={
              <div className="flex flex-row items-center space-x-2">
                <div>Custom Domain</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 stroke-foreground/80"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
              </div>
            }
          ></Tab>
        </Tabs>
      </form>
    </div>
  )
}

export default GenerateNewLinkCard
