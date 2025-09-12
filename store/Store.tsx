import { combineReducers, configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../reducers/studentReducer";
import TeacherSlice from "../reducers/teacherReducer";
import ProgramSlice from "../reducers/programReducer";



const rootReducer = combineReducers({
    students: StudentSlice,
    teachers: TeacherSlice,
    programs: ProgramSlice,

});


export const store = configureStore({
    reducer: rootReducer,
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
