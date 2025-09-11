import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "../reducers/studentReducer";
import teacherReducer from "../reducers/teacherReducer";


export const store = configureStore({
    reducer: {
        student: studentReducer,
        teacher: teacherReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;