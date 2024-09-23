import { fetchQuote } from './../api/quoteApi';
import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quote",
    initialState: "Winter is coming...",
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Pending...')
            .addCase(fetchQuote.fulfilled, (_state, action) => action.payload)
            .addCase(fetchQuote.rejected, () => 'Error getting quote')
    }
})

export default quoteSlice.reducer