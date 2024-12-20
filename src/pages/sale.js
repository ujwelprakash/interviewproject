import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    header: {
        vr_no: '',
        vr_date: '',
        ac_name: '',
        ac_amt: 0,
        status: 'A',
    },
    details: [],
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        setHeader(state, action) {
            state.header = action.payload;
        },
        setDetails(state, action) {
            state.details = action.payload;
        },
        addDetail(state, action) {
            state.details.push(action.payload);
        },
        removeDetail(state, action) {
            state.details = state.details.filter((_, index) => index !== action.payload);
        },
        calculateAmount(state) {
            state.header.ac_amt = state.details.reduce((sum, detail) => sum + detail.qty * detail.rate, 0);
        },
    },
});

export const { setHeader, setDetails, addDetail, removeDetail, calculateAmount } = salesSlice.actions;
export default salesSlice.reducer;