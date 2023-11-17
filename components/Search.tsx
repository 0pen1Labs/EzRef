'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Kbd } from '@nextui-org/react'

type Props = {
  onSearchClick: () => void
}

function Search({ onSearchClick }: Props) {
  return (
    <div className="group w-60" onClick={() => onSearchClick()}>
      <div className="flex flex-row items-center justify-between space-x-3 rounded-md bg-foreground/10 px-4 py-1 group-hover:cursor-pointer">
        <MagnifyingGlassIcon className="h-4 w-4 text-foreground opacity-40" />
        <div className="flex-grow text-sm font-extralight text-foreground/50">
          Search...
        </div>
        <Kbd keys={['ctrl']}>K</Kbd>
      </div>
    </div>
  )
}

export default Search
