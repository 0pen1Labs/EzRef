'use client'

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import HomeIcon from '@/public/home.svg'
import Link from 'next/link'
import Image from 'next/image'

function PathBreadCrumb() {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  const handleOnPress = (item: string) => {}

  return (
    <Breadcrumbs className="item-center" underline="active" separator=">">
      {pathNames.map((item, index) => {
        let href = `/${pathNames.slice(0, index + 1).join('/')}`
        let pathItem = item[0].toLocaleUpperCase() + item.slice(1, item.length)
        return (
          <BreadcrumbItem
            key={item}
            isCurrent={paths === href}
            onPress={() => handleOnPress(item)}
          >
            <Link href={`/${item}`}>
              {pathItem.toLocaleLowerCase() === 'dashboard' ? (
                <Image
                  src={HomeIcon}
                  alt="Dashboard Home Tag"
                  width={0}
                  height={0}
                  className={`h-4 w-4  ${paths !== href && 'opacity-50'}`}
                />
              ) : (
                pathItem
              )}
            </Link>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumbs>
  )
}

export default PathBreadCrumb
