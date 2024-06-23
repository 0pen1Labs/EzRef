import { PaginationProps } from '@/Types/Link'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { on } from 'events'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

function Pagination({
  className,
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  onPageClick,
}: PaginationProps) {
  return (
    <div
      className={cn(
        'flex flex-row items-center justify-center space-x-4 border py-3',
      )}>
      <Button
        variant="ghost"
        size={'sm'}
        onClick={onPrevious}
        disabled={currentPage === 1}>
        <ChevronLeftIcon className="size-4" /> Prev
      </Button>
      <div className="flex flex-nowrap items-center space-x-4">
        {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => (
          <div
            key={i}
            onClick={() => onPageClick(i + 1)}
            className={`flex flex-row items-center px-1 text-sm font-thin text-foreground/50 ${
              currentPage === i + 1 ? 'border-b-2 text-foreground/80 ' : ''
            }`}>
            {i + 1}
          </div>
        ))}
        <div
          className={`${
            totalPages > 5 ? '' : 'hidden'
          } font-thin text-foreground/50`}>
          ...
        </div>
      </div>
      <Button
        variant="ghost"
        size={'sm'}
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex flex-row items-center">
        Next <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default Pagination
