import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type LinkDetails = {
  name: string | undefined
  linkCode: string
  domain: string
}

const initialState: LinkDetails = {
  name: '',
  linkCode: '',
  domain: 'ezref.org',
}

export const generateLinkSlice = createSlice({
  name: 'ReferralLink',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLinkCode: (state, action: PayloadAction<string>) => {
      state.linkCode = action.payload
    },
    setDomain: (state, action: PayloadAction<string>) => {
      state.domain = action.payload
    },
  },
})

export const { setName, setLinkCode, setDomain } = generateLinkSlice.actions
export default generateLinkSlice.reducer
