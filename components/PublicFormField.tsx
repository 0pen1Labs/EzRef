import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'
import { FieldType } from '@/Types/Link'

type Params = {
  className?: string
  question?: string
  type: FieldType
  description?: string
  currentIndex: number
  totalItems: number
  onNext: () => void
  onBack: () => void
  onSubmit: () => void
}
function PublicFormField({
  className,
  question,
  type,
  description,
  currentIndex,
  totalItems,
  onNext,
  onBack,
  onSubmit,
}: Params) {
  const FieldInput = {
    [FieldType.short]: <Input type="text" className="bg-background" />,
    [FieldType.long]: <Input type="text" className="bg-background" />,
    [FieldType.number]: <Input type="number" className="bg-background" />,
    [FieldType.date]: <Input type="date" className="bg-background" />,
    [FieldType.file]: <Input type="file" className="bg-background" />,
  }

  function handleNextAndSubmitClick() {
    if (currentIndex === totalItems - 1) {
      onSubmit()
    } else {
      onNext()
    }
  }

  return (
    <div
      className={cn(
        'flex w-4/5 flex-col items-center justify-center space-y-8 md:w-1/2',
        className,
      )}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{question}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>{FieldInput[type]}</CardContent>
      </Card>
      <div className="flex w-full flex-row items-center justify-between px-6">
        <Button
          variant="outline"
          className="text-foreground/60"
          onClick={onBack}
          disabled={currentIndex === 0}
        >
          {' '}
          Back{' '}
        </Button>
        <div className="relative flex flex-row items-center justify-center">
          <span className="text-xs text-foreground/50">{currentIndex + 1}</span>
          <Separator className="mt-2 w-4 -rotate-45" />
          <span className="mt-4 text-xs text-foreground/50">{totalItems}</span>
        </div>
        <Button
          className="text-foreground"
          variant="outline"
          onClick={handleNextAndSubmitClick}
        >
          {currentIndex === totalItems - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default PublicFormField
