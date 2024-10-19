import { FieldResponse } from '@/Types/Link'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: FieldResponse[] = []

export const createFormResponseSlice = createSlice({
  name: 'FormResponse',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<FieldResponse>) => {
      const { fieldId } = action.payload
      const index = state.findIndex((element) => element.fieldId === fieldId)

      if (index !== -1) {
        state.splice(index, 1)
        state.push(action.payload)
      } else {
        state.push(action.payload)
      }
    },
  },
})

export const { setResponse } = createFormResponseSlice.actions
export default createFormResponseSlice.reducer
