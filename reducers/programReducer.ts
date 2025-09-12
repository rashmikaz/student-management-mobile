import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProgramModel } from "../models/Program";

const api = axios.create({
    baseURL: "http://localhost:3000/program",
});

const initialState: ProgramModel[] = [];


export const getPrograms = createAsyncThunk<ProgramModel[]>(
    "program/getPrograms",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/all");
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to load programs");
        }
    }
);


export const saveProgram = createAsyncThunk(
    "program/saveProgram",
    async (program: ProgramModel, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post("/add", program);
            dispatch(getPrograms()); // Refresh list
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to save program");
        }
    }
);


export const deleteProgram = createAsyncThunk(
    "program/deleteProgram",
    async (id: number, { dispatch, rejectWithValue }) => {
        try {
            await api.delete(`/delete/${id}`);
            dispatch(getPrograms()); // Refresh list
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Failed to delete program");
        }
    }
);

const ProgramSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getPrograms.fulfilled, (_, action) => action.payload)
            .addCase(getPrograms.rejected, (_, action) =>
                console.error("Error fetching programs:", action.payload)
            )

            .addCase(saveProgram.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveProgram.rejected, (_, action) =>
                console.error("Error saving program:", action.payload)
            )

            .addCase(deleteProgram.fulfilled, (state, action) => {
                return state.filter((p) => p.id !== action.payload);
            })
            .addCase(deleteProgram.rejected, (_, action) =>
                console.error("Error deleting program:", action.payload)
            );
    },
});

export default ProgramSlice.reducer;
