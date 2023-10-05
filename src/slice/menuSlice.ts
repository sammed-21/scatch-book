import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { MENU_ITEMS } from "@/constants";
import { RootState } from "@/store";
export interface MenuState {
    activeMenuItem: string,
    actionMenuItem:string | null
}
const initialState:MenuState = {
    activeMenuItem: MENU_ITEMS.PENCIL,
    actionMenuItem: null
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        menuItemClick: (state, action:PayloadAction<string>) => {
            state.activeMenuItem= action.payload
        },
        actionItemClick: (state, action : PayloadAction<string | null>) => {
            state.actionMenuItem  = action.payload
        }
    }
})

export const { menuItemClick ,actionItemClick} = menuSlice.actions
export const selectMenu = (state:RootState): MenuState  => state.menu
export default menuSlice.reducer