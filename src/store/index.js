import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/appSlice'
import cartSlice from './slices/cartSlice'
import productsSlice from './slices/productsSlice'
import purchasesSlice from './slices/purchasesSlice'

export default configureStore({
  reducer: {
    app: appSlice,
    products: productsSlice,
    cart: cartSlice,
    purchases: purchasesSlice,
  },
})
