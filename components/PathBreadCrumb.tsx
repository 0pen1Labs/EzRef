'use client'

import { usePathname } from 'next/navigation'
import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

function PathBreadCrumb() {
  const paths = usePathname()
  const pathNames = paths
    .split('/')
    .filter((path) => path)
    .splice(0, 2)

  return (
    <Breadcrumb className="item-center" separator=">">
      <BreadcrumbList>
        {pathNames.map((item, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let pathItem =
            item[0].toLocaleUpperCase() + item.slice(1, item.length)
          return (
            <div key={index} className="flex flex-row items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${item}`}>
                    {pathItem.toLocaleLowerCase() === 'dashboard' ? (
                      <HomeIcon
                        className={`h-4 w-6 text-foreground hover:opacity-100 ${
                          paths !== href && 'opacity-50'
                        }`}
                      />
                    ) : (
                      pathItem
                    )}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator
                className={index === pathNames.length - 1 ? 'hidden' : ''}
              />
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default PathBreadCrumb
