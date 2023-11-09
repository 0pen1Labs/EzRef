export type DashboardMenu = {
  name: string
  path: string
  icon: string
}

export const DashboardMenuList: DashboardMenu[] = [
  {
    name: 'Home',
    path: '/dashboard/home',
    icon: '/home.svg',
  },
  {
    name: 'Links',
    path: '/dashboard/link',
    icon: '/links.svg',
  },
  {
    name: 'Responses',
    path: '/dashboard/response',
    icon: '/gear.svg',
  },
]
