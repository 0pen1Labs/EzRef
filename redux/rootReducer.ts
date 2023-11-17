import { combineReducers } from '@reduxjs/toolkit'
import { appSettingSlice } from './slices/AppSettingSlice'
import { generateLinkSlice } from './slices/GenerateLinkSlice'

export const rootReducer = combineReducers({
  appSetting: appSettingSlice.reducer,
  referralLink: generateLinkSlice.reducer,
})

//type
export type RootState = ReturnType<typeof rootReducer>
