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
import { FieldResponse, FieldType } from '@/Types/Link'
import { Textarea } from './ui/textarea'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setResponse } from '@/redux/slices/FormResponseSlice'

type Params = {
  fieldId: string
  className?: string
  question?: string
  type: FieldType
  description?: string
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  totalItems: number
}
function PublicFormField({
  fieldId,
  className,
  question,
  type,
  description,
  currentIndex,
  setCurrentIndex,
  totalItems,
}: Params) {
  const fieldResponse: Array<FieldResponse> = useSelector(
    (state) => state.rootReducer.formResponse,
  )
  const [inputValue, setInputValue] = useState<string>('')
  const dispatch = useDispatch()

  const FieldInput = {
    [FieldType.short]: (
      <Input
        name={`sort_${currentIndex}`}
        type="sort"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-background"
      />
    ),
    [FieldType.long]: (
      <Textarea
        name={`long_${currentIndex}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-background"
      />
    ),
    [FieldType.number]: (
      <Input
        name={`number_${currentIndex}`}
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-background"
      />
    ),
    [FieldType.date]: (
      <Input
        name={`date_${currentIndex}`}
        type="date"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-background"
      />
    ),
    [FieldType.file]: (
      <Input
        name={`file_${currentIndex}`}
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) setInputValue(file.name)
        }}
        className="bg-background"
      />
    ),
  }

  useEffect(() => {
    const fieldIndexInStore = fieldResponse.findIndex(
      (field) => field.fieldId === fieldId,
    )
    if (fieldIndexInStore !== -1) {
      setInputValue(fieldResponse[fieldIndexInStore].value)
    } else {
      setInputValue('')
    }
  }, [fieldId])

  function handleBack() {
    if (currentIndex > 0) {
      console.log('going back')
      setCurrentIndex((prev) => prev - 1)
    }
  }

  function handleNext() {
    if (currentIndex < totalItems - 1) {
      if (inputValue !== '') {
        console.log('going next')
        const payload = {
          fieldId,
          value: inputValue,
          type,
        }
        dispatch(setResponse(payload))
        setCurrentIndex((prev) => prev + 1)
      }
    }
  }

  function handleSubmit() {
    console.log('submitted')
  }

  function handleNextAndSubmitClick() {
    if (currentIndex === totalItems - 1) {
      handleSubmit()
    } else {
      handleNext()
    }
  }

  return (
    <div
      className={cn(
        'flex w-4/5 flex-col items-center justify-center space-y-8 md:w-1/2',
        className,
      )}>
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
          onClick={handleBack}
          disabled={currentIndex === 0}>
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
          onClick={handleNextAndSubmitClick}>
          {currentIndex === totalItems - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default PublicFormField
