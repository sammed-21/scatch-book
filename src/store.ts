import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from "@/slice/menuSlice"
export const store = configureStore({
    reducer: {
       menu : MenuReducer
    }
})
  
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch