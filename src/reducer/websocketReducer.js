import { createSlice } from '@reduxjs/toolkit'

const websocketSlice = createSlice({
    name: 'ws',
    initialState: {
        connect: false,
        data: {
            "status": "initializing",
            "Detector": {
                "connect": false,
                "data": {
                    "class": "none",
                    "x": "0",
                    "y": "0",
                }
            },
            "Controller": {
                "connect": false,
                "data": {
                    "X_Axis": "0",
                    "Y_Axis": "0",
                    "Z_Axis": "0",
                    "W_Axis": "0",
                    "R_Axis": "0"
                }
            },
            "Web": {
                "bridgeConnect": false,
                "data": ""
            }
        }
    },
    reducers: {
        connected: (state, action) => {
            state.connect = true
            console.log(action.type)
        },
        disconnected: (state, action) => {
            state.connect = false
            console.log(action.type)
        },
        updateSystemStatus: (state, action) => {
            state.data = action.payload
            console.log(action.type)
        },

    }
})


export { websocketSlice }
// Action creators are generated for each case reducer function
export const { updateSystemStatus, connected, disconnected } = websocketSlice.actions

export default websocketSlice.reducer