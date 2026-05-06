import { createSlice } from "@reduxjs/toolkit"
import { forwardRef } from "react";

export const data = {
    incomelist: [
        {
            id: 34,
            name: '11111',
            amount: 10,
        },
        {
            id: 2,
            name: '2222',
            amount: 10,
        },

    ],
}

const incomeSlice = createSlice({
    name: 'incomeSlice',
    initialState: data,
    reducers: {
        addIncomelist: (state, action) => {
            console.log(action);
            state.incomelist.push(action.payload);

        },
        delitIncomelist: (state, action) => {



            const newArr = state.incomelist.filter((item) => {
                if (item.id != action.payload) {
                    return item
                }
            })
            state.incomelist = newArr
        }
    }

})

export const { addIncomelist, delitIncomelist } = incomeSlice.actions



export default incomeSlice.reducer   // здесть лежит инишал стейт

