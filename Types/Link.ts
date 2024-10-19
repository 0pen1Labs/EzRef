import { Dispatch, SetStateAction } from 'react'

export type LinkResponse = {
  id: string
  name: string
  description: string | null
  domain: string
  formCode: string
  createdAt: Date
  updatedAt: Date
  form: null | Form
}

export type LinkItem = {
  id: string
  name: string | null
  description: string | null
  domain: string
  formCode: string
  createdAt: string
  updatedAt: string
  exp: string | null
}

export type Form = {
  id: string
  title: string | null
  description: string | null
  isFavorite: boolean
  formFields: Array<Object>
}

export type FormSchema = {
  fid?: string
  title?: string
  question?: string
  type?: FieldType
  description?: string
}

export type FieldResponse = {
  fieldId: string
  type: FieldType
  value: string
}

export enum FieldType {
  short,
  long,
  number,
  date,
  file,
}

export type PaginationProps = {
  className?: string
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
  onPageClick: Dispatch<SetStateAction<number>>
}
