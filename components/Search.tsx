'use client'

import SearchSvg from '@/public/search.svg'
import Image from 'next/image'

type Props = {
  onSearchClick: Function
}

function Search({ onSearchClick }: Props) {
  return (
    <div className="group" onClick={() => onSearchClick()}>
      <div className="flex flex-row items-center space-x-3 rounded-md bg-foreground/10 py-1 pl-4 pr-20 group-hover:cursor-pointer ">
        <Image
          src={SearchSvg}
          alt="Search Icon"
          className="h-4 w-4 opacity-40"
        />
        <div className="text-sm font-normal tracking-wide text-foreground/50">
          Search...
        </div>
      </div>
    </div>
  )
}

export default Search
