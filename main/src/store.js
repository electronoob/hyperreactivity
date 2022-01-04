import { configureStore } from '@reduxjs/toolkit'
import rowJamReducer from './rowJam'

export default configureStore({
  reducer: {
      row: rowJamReducer,
  },
})
