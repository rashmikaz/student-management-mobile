import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Program from "../models/Program";

const api = axios.create({
    baseURL: "http://localhost:3000/program", // backend API
});

// Initial state
const initialState: Program[] = [];

// Fetch all programs
export const fetchPrograms = createAsyncThunk<Program[]>(
    "program/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/all");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Add a program
export const addProgram = createAsyncThunk<Program, Program>(
    "program/add",
    async (program, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", program);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

// Delete a program
export const removeProgram = createAsyncThunk<number, number>(
    "program/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/delete/${id}`);
            return id;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch
            .addCase(fetchPrograms.fulfilled, (_, action) => action.payload)
            .addCase(fetchPrograms.rejected, (_, action) => console.error("Fetch failed:", action.payload))
            // add
            .addCase(addProgram.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(addProgram.rejected, (_, action) => console.error("Add failed:", action.payload))
            // delete
            .addCase(removeProgram.fulfilled, (state, action) => {
                return state.filter((p) => p.id !== action.payload);
            })
            .addCase(removeProgram.rejected, (_, action) => console.error("Delete failed:", action.payload));
    },
});

export default programSlice.reducer;
