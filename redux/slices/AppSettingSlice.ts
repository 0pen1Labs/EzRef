import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AppSetting = {
  theme: string
  appName: string
  appVersion: string
}

const initialState: AppSetting = {
  theme: 'dark',
  appName: 'EzRef',
  appVersion: '0.1.0',
}

export const appSettingSlice = createSlice({
  name: 'AppSetting',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = appSettingSlice.actions
export default appSettingSlice.reducer
