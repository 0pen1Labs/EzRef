'use client'

import { Tabs, Tab, Divider } from '@nextui-org/react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
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
                  <LockClosedIcon className="h-4 w-4 text-foreground" />
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
