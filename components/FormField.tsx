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
import { FieldType } from '@/utils/FormType'
import { getEnumKeys } from '@/utils/util'
import { Bars4Icon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import {
  Card,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from '@nextui-org/react'

type Props = {
  title?: string
  question?: string
  description?: string
  size: number
  index: number
}

function FormField({ question, title, description, index, size }: Props) {
  const dispatch = useDispatch()
  const typeList = getEnumKeys(FieldType)
  return (
    <div className="flex w-full flex-row items-end gap-2">
      <Card
        radius="md"
        shadow="sm"
        fullWidth={true}
        className="flex flex-col border border-foreground/30 bg-background p-4"
      >
        <div
          className={`flex w-full flex-col ${title === undefined && 'hidden'}`}
        >
          <input
            name="title"
            value={title}
            onChange={(e) =>
              dispatch(setTitle({ index: index, data: e.target.value }))
            }
            className="bg-transparent p-2 text-2xl font-light text-foreground outline-none"
            placeholder="Untitled"
          />
          <Divider className="my-1" />
        </div>

        <div
          className={`flex w-full flex-col ${
            question === undefined && 'hidden'
          }`}
        >
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
              label="Field type"
              variant="bordered"
              size="sm"
              fullWidth={false}
              placeholder="Select the field type"
              className="w-64 max-w-xs rounded bg-transparent"
              isRequired={true}
              onChange={(e) =>
                dispatch(setType({ index: index, data: e.target.value }))
              }
            >
              {typeList.map((item, index) => (
                <SelectItem key={index}>{item}</SelectItem>
              ))}
            </Select>
          </div>
          <Divider className="my-1" />
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
      </Card>
      <Popover placement="top" radius="sm" size="sm" triggerType="menu">
        <PopoverTrigger>
          <Bars4Icon
            className={`font-foreground/80 h-6 w-6 ${
              question === undefined && 'invisible'
            }`}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col items-center justify-center gap-2 py-1">
            <button className="py-1" onClick={() => dispatch(addField(index))}>
              <PlusCircleIcon className="font-foreground/80 h-5 w-5" />
            </button>
            <button
              className="py-1"
              disabled={size <= 2}
              onClick={() => dispatch(deleteField(index))}
            >
              <TrashIcon className="font-foreground/80 h-5 w-5" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default FormField
