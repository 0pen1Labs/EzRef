'use client'
import { useDispatch } from '@/hooks/useReduxHooks'
import {
  addField,
  deleteField,
  setDescription,
  setQuestion,
  setTitle,
  setType,
} from '@/redux/slices/FormSlice'
import { getEnum, getEnumKeys } from '@/utils/util'
import { Bars4Icon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { FieldType } from '@/Types/Link'

type Props = {
  title?: string
  question?: string
  description?: string
  size: number
  index: number
  type?: number
}

function FormField({ question, title, description, index, size, type }: Props) {
  const dispatch = useDispatch()
  const typeList = getEnumKeys(FieldType)

  return (
    <div className="flex w-full flex-row items-end gap-2">
      <Card className="flex w-full flex-col border border-foreground/30 bg-background p-4">
        <CardContent>
          <div
            className={`flex w-full flex-col ${
              title === undefined && 'hidden'
            }`}>
            <input
              name="title"
              value={title}
              onChange={(e) =>
                dispatch(setTitle({ index: index, data: e.target.value }))
              }
              className="bg-transparent p-2 text-2xl font-light text-foreground outline-none"
              placeholder="Untitled"
            />
            <Separator className="my-1" />
          </div>

          <div
            className={`flex w-full flex-col ${
              question === undefined && 'hidden'
            }`}>
            <div className="flex w-full flex-row items-center justify-end gap-2">
              <input
                value={question}
                name="question"
                onChange={(e) =>
                  dispatch(setQuestion({ index: index, data: e.target.value }))
                }
                className="flex-grow bg-transparent p-2 text-xl font-light text-foreground outline-none"
                placeholder="Question"
              />
              <Select
                onValueChange={(value: string) => {
                  console.log('value', value)
                  if (value) {
                    dispatch(setType({ index: index, data: getEnum(value)!! }))
                  }
                }}
                value={type !== undefined ? typeList[type] : ''}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Field type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Field Type</SelectLabel>
                    {typeList.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Separator className="my-1" />
          </div>
          <input
            name="description"
            value={description}
            onChange={(e) =>
              dispatch(setDescription({ index: index, data: e.target.value }))
            }
            className="bg-transparent p-2 text-sm font-light text-foreground/60 outline-none"
            placeholder="Field description"
          />
        </CardContent>
      </Card>
      <Popover>
        <PopoverTrigger asChild>
          <Bars4Icon
            className={`font-foreground/80 h-6 w-6 ${
              question === undefined && 'invisible'
            }`}
          />
        </PopoverTrigger>
        <PopoverContent className="w-8 rounded-full p-1 py-2">
          <div className="flex flex-col items-center justify-center gap-2 ">
            <button className="py-1" onClick={() => dispatch(addField(index))}>
              <PlusCircleIcon className="font-foreground/80 h-5 w-5" />
            </button>
            <button
              className="py-1"
              disabled={size <= 2}
              onClick={() => dispatch(deleteField(index))}>
              <TrashIcon className="font-foreground/80 h-5 w-5" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default FormField
