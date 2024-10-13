import { FieldType, FormSchema } from '@/Types/Link'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { nanoid } from 'nanoid'

type InitForm = {
  name: string
  isFavorite: boolean
  formStructure: Array<FormSchema>
}

const blankField: FormSchema = {
  fid: nanoid(16),
  question: 'Question',
  type: undefined,
  description: 'Description',
}

export const initialFormStructure: FormSchema[] = [
  {
    title: 'Untitled',
    description: 'Form description',
  },
  blankField,
]

export type FormFieldPayload = {
  index: number
  data: string | FieldType
}

const initialState: InitForm = {
  name: 'Untitled form',
  isFavorite: false,
  formStructure: initialFormStructure,
}

export const createFormSlice = createSlice({
  name: 'Form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setFavorite: (state) => {
      state.isFavorite = !state.isFavorite
    },
    setFormStructure: (state, action: PayloadAction<FormSchema[]>) => {
      state.formStructure = action.payload
    },
    setTitle: (state, action: PayloadAction<FormFieldPayload>) => {
      state.formStructure.map((item) => {
        const itemIndex = state.formStructure.indexOf(item)
        if (itemIndex == action.payload.index) {
          state.formStructure[itemIndex].title = action.payload.data as string
        }
      })
    },
    setQuestion: (state, action: PayloadAction<FormFieldPayload>) => {
      state.formStructure.map((item) => {
        const itemIndex = state.formStructure.indexOf(item)
        if (itemIndex == action.payload.index) {
          state.formStructure[itemIndex].question = action.payload
            .data as string
        }
      })
    },

    setDescription: (state, action: PayloadAction<FormFieldPayload>) => {
      state.formStructure.map((item) => {
        const itemIndex: number = state.formStructure.indexOf(item)
        if (itemIndex == action.payload.index) {
          state.formStructure[itemIndex].description = action.payload
            .data as string
        }
      })
    },
    setType: (state, action: PayloadAction<FormFieldPayload>) => {
      state.formStructure.map((item) => {
        const itemIndex = state.formStructure.indexOf(item)
        if (itemIndex == action.payload.index) {
          state.formStructure[itemIndex].type = action.payload.data as FieldType
        }
      })
    },
    addField: (state, action: PayloadAction<number>) => {
      const position = action.payload + 1
      state.formStructure.splice(position, 0, {
        ...blankField,
        fid: nanoid(16),
      })
    },
    deleteField: (state, action: PayloadAction<number>) => {
      const position = action.payload
      state.formStructure.splice(position, 1)
    },
    setInitialState: (state) => {
      state.name = 'Untitled form'
      state.isFavorite = false
      state.formStructure = initialFormStructure
    },
  },
})

export const {
  setName,
  setFavorite,
  setTitle,
  setQuestion,
  setType,
  setDescription,
  addField,
  deleteField,
  setFormStructure,
  setInitialState,
} = createFormSlice.actions
export default createFormSlice.reducer
