import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { StudentModel } from "../models/Student";

const api = axios.create({
    baseURL: "http://localhost:3000/student",
});

const initialState: StudentModel[] = [];


export const getStudents = createAsyncThunk<StudentModel[]>(
    "student/getStudents",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/all");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to fetch students");
        }
    }
);


export const saveStudent = createAsyncThunk<StudentModel, StudentModel>(
    "student/saveStudent",
    async (student, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post("/add", student);
            dispatch(getStudents()); // refresh list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to add student");
        }
    }
);


export const deletedStudent = createAsyncThunk<number, number>(
    "student/deletedStudent",
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await api.delete(`/delete/${id}`);
            dispatch(getStudents()); // refresh list
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to delete student");
        }
    }
);

const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudents.fulfilled, (_, action: PayloadAction<StudentModel[]>) => action.payload)
            .addCase(getStudents.rejected, (_, action) => console.error("Fetch failed:", action.payload))

            .addCase(saveStudent.fulfilled, (state, action: PayloadAction<StudentModel>) => {
                state.push(action.payload); // ✅ Immer handles mutation
            })
            .addCase(saveStudent.rejected, (_, action) => console.error("Add failed:", action.payload))

            .addCase(deletedStudent.fulfilled, (state, action: PayloadAction<number>) => {
                return state.filter((student) => student.id !== action.payload);
            })
            .addCase(deletedStudent.rejected, (_, action) => console.error("Delete failed:", action.payload));
    },
});

export default StudentSlice.reducer;
