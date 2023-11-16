'use client'

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { HomeIcon } from '@heroicons/react/24/outline'
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
                <HomeIcon
                  className={`h-4 w-6 text-foreground ${
                    paths !== href && 'opacity-50'
                  }`}
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
