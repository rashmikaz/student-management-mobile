import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Student from "../models/Student";

const api = axios.create({
    baseURL: "http://localhost:3000/student", // backend API
});

// Initial state
const initialState: Student[] = [];

// Fetch all students
export const fetchStudents = createAsyncThunk<Student[]>(
    "student/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/all");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Add a student
export const addStudent = createAsyncThunk<Student, Student>(
    "student/add",
    async (student, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", student);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Delete a student
export const removeStudent = createAsyncThunk<number, number>(
    "student/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/delete/${id}`);
            return id;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch
            .addCase(fetchStudents.fulfilled, (_, action) => action.payload)
            .addCase(fetchStudents.rejected, (_, action) => console.error("Fetch failed:", action.payload))
            // add
            .addCase(addStudent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(addStudent.rejected, (_, action) => console.error("Add failed:", action.payload))
            // delete
            .addCase(removeStudent.fulfilled, (state, action) => {
                return state.filter((s) => s.id !== action.payload);
            })
            .addCase(removeStudent.rejected, (_, action) => console.error("Delete failed:", action.payload));
    },
});

export default studentSlice.reducer;
