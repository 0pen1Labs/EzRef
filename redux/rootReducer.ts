import { combineReducers } from '@reduxjs/toolkit'
import { appSettingSlice } from './slices/AppSettingSlice'
import { generateLinkSlice } from './slices/GenerateLinkSlice'
import { createFormSlice } from './slices/FormSlice'

export const rootReducer = combineReducers({
  appSetting: appSettingSlice.reducer,
  referralLink: generateLinkSlice.reducer,
  form: createFormSlice.reducer,
})

//type
export type RootState = ReturnType<typeof rootReducer>
