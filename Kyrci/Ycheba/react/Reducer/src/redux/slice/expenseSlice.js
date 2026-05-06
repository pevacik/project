import { createSlice } from "@reduxjs/toolkit"

export const data = {
    expenseslist: [
        {
            id: 34,
            name: 'sdfsf',
            amount: 10,
        },
        {
            id: 2,
            name: 'sdfsf',
            amount: 10,
        },

    ],
}

const expenseSlice = createSlice({
    name: 'expenseList',
    initialState: data,
    reducers: {
        addExpenseList: (state, action) => {
            console.log(action);
            state.expenseslist.push(action.payload)

        },
        delitExpenseList: (state, action) => {



            const newArr = state.expenseslist.filter((item) => {
                if (item.id != action.payload) {
                    return item
                }
            })
            state.expenseslist = newArr
        }
    }

})

export const { addExpenseList, delitExpenseList } = expenseSlice.actions

export default expenseSlice.reducer   // здесть лежит инишал стейт