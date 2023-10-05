import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { MENU_ITEMS ,COLORS} from "@/constants";
import { RootState } from "@/store";
 
// export type ToolboxKeys = MENU_ITEMS.PENCIL | MENU_ITEMS.ERASER | MENU_ITEMS.UNDO | MENU_ITEMS.REDO | MENU_ITEMS.DOWNLOAD;

interface ToolboxItem {
     
    color?: string;
    size?: number;
}
interface ToolboxActionPayload {
    item: string;
    color?: string;
    size?: number;
}
interface ToolboxState {
    [key: string]: ToolboxItem // You might want to define the type for this if it's not just an empty object
}
const initialState : ToolboxState= {
    [MENU_ITEMS.PENCIL]: {
        color: COLORS.BLACK,
        size:3
    },
    [MENU_ITEMS.ERASER]: {
        color: COLORS.WHITE,
        size:3
    },
    [MENU_ITEMS.UNDO]: {
    },
    [MENU_ITEMS.REDO]: {
    },
    [MENU_ITEMS.DOWNLOAD]: {
    },
 
 
}

export const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        changeColor: (state, action : PayloadAction<ToolboxActionPayload>) => {
            state[action.payload.item].color = action.payload.color
        },
        changeBrushSize: (state, action: PayloadAction<ToolboxActionPayload>) => {
            state[action.payload.item].size = action.payload.size
        }
    }
})

 

export const { changeColor ,changeBrushSize} = toolboxSlice.actions
export const selectItem = (state:RootState):ToolboxState  => state.toolbox
export default toolboxSlice.reducer