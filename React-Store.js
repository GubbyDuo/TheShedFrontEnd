import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define your initial state
const initialState = {
    counter: 0,
    user: null,
    data: null,
    settings: {
        darkMode: false,
        fontSize: "medium",
    },
    // Other state properties as needed
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data;
        },
    },
});

// Create the Redux store
const store = configureStore({
    reducer: dataSlice.reducer,
});

export default store;

//FINISH THIS FILE PLEASE
