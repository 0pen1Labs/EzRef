import DashboardSideNav from '@/components/DashboardSideNav'
import DashboardTopNav from '@/components/DashboardTopNav'
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
        <div className="flex justify-end px-10 py-4">
          <DashboardTopNav />
        </div>
        <Divider />
        <ScrollShadow className="h-screen overflow-hidden overflow-y-scroll">
          {children}
        </ScrollShadow>
      </div>
    </div>
  )
}
