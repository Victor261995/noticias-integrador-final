import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './combined'

const store = configureStore({
  reducer:rootReducer
})

export default store