import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

function Loading() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex w-full flex-col items-start justify-start space-y-4 overflow-hidden">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-sm" />
          ))}
      </div>
    </div>
  )
}

export default Loading
