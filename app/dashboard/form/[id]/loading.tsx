import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

function loading() {
  return (
    <div className="flex flex-col items-center p-10">
      <Skeleton className="mt-10 h-80 w-4/6 rounded-md" />

      <Separator className="my-8" />

      <div className="flex w-4/6 flex-col items-start justify-normal">
        <Skeleton className="h-10 w-full" />
        <div className="flex w-full flex-col items-start justify-start overflow-hidden">
          {/* Change this to show list */}
          <Skeleton className="h-10 w-full rounded" />
          <Separator className="my-2" />
          <Skeleton className="h-10 w-full rounded" />
          <Separator className="my-2" />
          <Skeleton className="h-10 w-full rounded" />
          <Separator className="my-2" />
          <Skeleton className="h-10 w-full rounded" />
          <Separator className="my-2" />
          <Skeleton className="h-10 w-full rounded" />
          <Separator className="my-2" />
        </div>
      </div>
    </div>
  )
}

export default loading
