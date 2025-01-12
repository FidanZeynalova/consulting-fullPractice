import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { consultingApi } from './slices/ConsultingSlice'

export const store = configureStore({
  reducer: {
    [consultingApi.reducerPath]: consultingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(consultingApi.middleware),
})

setupListeners(store.dispatch)