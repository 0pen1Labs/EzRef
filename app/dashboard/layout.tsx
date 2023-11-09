import DashboardSideNav from '@/components/DashboardSideNav'
import DashboardTopNav from '@/components/DashboardTopNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="flex w-52 border-r border-foreground/20">
        <DashboardSideNav />
      </div>
      <div className="flex flex-grow flex-col">
        <div className="flex justify-end border-b border-foreground/20 px-10 py-4 drop-shadow-md">
          <DashboardTopNav />
        </div>
        <div className="h-screen">{children}</div>
      </div>
    </div>
  )
}
