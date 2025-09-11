import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Teacher from "../models/Teacher";

const api = axios.create({
    baseURL: "http://localhost:3000/teacher", // backend API
});

// Initial state
const initialState: Teacher[] = [];

// Fetch all teachers
export const fetchTeachers = createAsyncThunk<Teacher[]>(
    "teacher/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/all");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Add a teacher
export const addTeacher = createAsyncThunk<Teacher, Teacher>(
    "teacher/add",
    async (teacher, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", teacher);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Delete a teacher
export const removeTeacher = createAsyncThunk<number, number>(
    "teacher/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/delete/${id}`);
            return id;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch
            .addCase(fetchTeachers.fulfilled, (_, action) => action.payload)
            .addCase(fetchTeachers.rejected, (_, action) => console.error("Fetch failed:", action.payload))
            // add
            .addCase(addTeacher.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(addTeacher.rejected, (_, action) => console.error("Add failed:", action.payload))
            // delete
            .addCase(removeTeacher.fulfilled, (state, action) => {
                return state.filter((t) => t.id !== action.payload);
            })
            .addCase(removeTeacher.rejected, (_, action) => console.error("Delete failed:", action.payload));
    },
});

export default teacherSlice.reducer;
