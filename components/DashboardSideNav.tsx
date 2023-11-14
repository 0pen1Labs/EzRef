'use client'

import { DashboardMenuList } from '@/utils/DashboardNavMenu'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { useState } from 'react'
import { User } from '@nextui-org/react'
import Link from 'next/link'
import { Divider } from '@nextui-org/react'

export default function DashboardSideNav() {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  const handleMenuClick = (index: number) => {
    setSelectedItem(index)
  }
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-start p-4">
        <Logo />
      </div>
      <nav className="ms-4 mt-6 flex-grow">
        <ul>
          {DashboardMenuList.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              path={item.path}
              icon={item.icon}
              selected={index == selectedItem}
              onMenuClick={() => handleMenuClick(index)}
            />
          ))}
        </ul>
      </nav>
      <Divider />
      <div className="flex flex-row items-center p-4 ">
        <Link
          href={'/profile'}
          className="flex w-full items-center rounded-md p-2 hover:bg-purple/10"
        >
          <User
            name={'Profile'}
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
          {/* <Image src={''} alt={''} />
          <div className="flex justify-between">
            Profile <span>&#10148;</span>
          </div> */}
        </Link>
      </div>
    </div>
  )
}
