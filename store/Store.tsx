import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "../reducers/studentReducer";
import teacherReducer from "../reducers/teacherReducer";
import programReducer from "../reducers/programReducer";


export const store = configureStore({
    reducer: {
        student: studentReducer,
        teacher: teacherReducer,
        program: programReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;