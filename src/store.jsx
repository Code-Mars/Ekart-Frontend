import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';
import userReducer from './Slices/UserSlice';
import wishlistReducer from './Slices/WishlistSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, 
    wishlist: wishlistReducer,
  },
});
