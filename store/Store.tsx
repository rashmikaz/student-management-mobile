import { combineReducers, configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../reducers/studentReducer";
import TeacherSlice from "../reducers/teacherReducer";
import ProgramSlice from "../reducers/programReducer";


// Combine all slices
const rootReducer = combineReducers({
    students: StudentSlice,
    teachers: TeacherSlice,
    programs: ProgramSlice,

});

// Configure the store
export const store = configureStore({
    reducer: rootReducer,
});

// TypeScript types for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
