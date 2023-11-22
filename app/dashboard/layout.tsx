import DashboardSideNav from '@/components/DashboardSideNav'
import DashboardTopNav from '@/components/DashboardTopNav'
import PathBreadCrumb from '@/components/PathBreadCrumb'
import { Divider } from '@nextui-org/react'
import { ScrollShadow } from '@nextui-org/react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-screen flex-row space-x-1">
      <div className="flex w-52">
        <DashboardSideNav />
      </div>
      <Divider orientation="vertical" />
      <div className="flex flex-grow flex-col space-y-1">
        <div className="flex w-full items-center justify-between px-10 py-4">
          <PathBreadCrumb />
          <DashboardTopNav />
        </div>
        <Divider />
        <ScrollShadow className="h-screen overflow-hidden overflow-y-scroll scroll-smooth">
          {children}
        </ScrollShadow>
      </div>
    </div>
  )
}
