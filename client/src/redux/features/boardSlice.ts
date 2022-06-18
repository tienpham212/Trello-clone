import { createSlice } from "@reduxjs/toolkit";
import { IList } from "../../types/IList";
import initialData from "../../helper/initialData";

const initialState: IList = initialData;

const boardSlice = createSlice({
    initialState,
    name: "boardSlice",
    reducers: {

    }
})

export default boardSlice.reducer;