'use client'

import Pagination from '@/components/Pagination'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NoDataSvg from '@/public/nodata.svg'
import { Suspense, useEffect, useState } from 'react'
import AllLinksField from '@/components/AllLinksField'
import { LinkItem } from '@/Types/Link'
import { ScrollArea } from '@/components/ui/scroll-area'
import Loader from './loader'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog'
import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'

export default function Link() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [links, setLinks] = useState<Array<LinkItem>>([])

  useEffect(() => {
    fetchLinks()
  }, [currentPage])

  function handleOnNext() {
    if (currentPage < totalPages) {
      console.log('Next clicked')
      setCurrentPage((prev) => prev + 1)
    }
  }

  function handleOnPrevious() {
    if (currentPage > 1) {
      console.log('Previous clicked')
      setCurrentPage((prev) => prev - 1)
    }
  }

  async function fetchLinks() {
    const links = await fetch('/api/v1/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page: currentPage }),
    })

    const data = await links.json()
    console.log('data', data)
    setLinks(data.links)
    setTotalPages(data.totalPage)
  }

  const noData = (
    <div className="mt-8 flex w-full flex-col items-center justify-center">
      <Image
        width={200}
        height={200}
        src={NoDataSvg}
        className="opacity-50"
        alt="No data found image"
      />
      <div className="text-xl font-light text-foreground/80">No data</div>
      <div className="text-sm font-light text-foreground/50">
        No links found or something went wrong!
      </div>
    </div>
  )

  const listView = (
    <div className="mt-3 flex w-full flex-col items-start justify-start overflow-hidden">
      {links.map((item: any) => {
        return <AllLinksField item={item} key={item.id} />
      })}
    </div>
  )

  return (
    <div className="flex h-full w-full flex-col space-y-6 p-4">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="text-base font-normal text-foreground/80 ">
          Referral links
        </div>
        <div className="flex flex-row items-center space-x-6">
          <span className="text-sm font-light text-foreground/50">
            Page {currentPage} of {totalPages}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size={'sm'}>
                New Link
              </Button>
            </DialogTrigger>
            <DialogContent className="px-0 py-2">
              <div className="flex flex-col items-center justify-center md:w-full">
                <GenerateNewLinkCard />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <ScrollArea className="w-full flex-grow">
        <Suspense fallback={<Loader />}>
          <div className="flex w-full flex-grow flex-col items-start justify-start">
            {links.length != 0 ? listView : noData}
          </div>
        </Suspense>
      </ScrollArea>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleOnNext}
        onPrevious={handleOnPrevious}
        onPageClick={setCurrentPage}
      />
    </div>
  )
}
