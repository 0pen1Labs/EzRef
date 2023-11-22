'use client'

import { Tabs, Tab } from '@nextui-org/react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { Key, useEffect, useState } from 'react'
import LinkInputEzref from './LinkInputEzref'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setLinkCode, setName } from '@/redux/slices/GenerateLinkSlice'
import { useRouter } from 'next/navigation'
import { addReferralLink } from '@/actions/ReferralLinkAction'

function GenerateNewLinkCard() {
  const router = useRouter()
  const name = useSelector((state) => state.rootReducer.referralLink.name)
  const dispatch = useDispatch()
  const [selectedTab, setSelectedTabs] = useState<Key>('ezref')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    router.push('/dashboard/form')
  }

  return (
    <div className="flex w-full flex-col rounded-md bg-gradient-to-t from-[#797979]/10 to-background p-10 dark:bg-gradient-to-t dark:from-[#121212]/30 dark:to-background">
      <div className="text-2xl font-normal text-foreground/80">
        Generate new referral
      </div>
      <form
        autoComplete="off"
        className="mt-4 flex flex-col space-y-2"
        action={addReferralLink}
      >
        <input
          type="text"
          name="title"
          placeholder="Name your referral (optional)"
          value={name}
          onChange={(e) => {
            dispatch(setName(e.target.value))
          }}
          className="mb-3 w-4/12 rounded-md border border-foreground/20 bg-gray-50 px-4 py-2 text-base font-thin text-foreground outline-none placeholder:text-foreground/30 hover:border-foreground/50 focus:border-foreground/50 dark:bg-foreground/5"
        />
        <Tabs
          aria-label="options"
          variant="underlined"
          color="primary"
          selectedKey={selectedTab}
          onSelectionChange={setSelectedTabs}
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
