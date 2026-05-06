import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slice/expenseSlice"
import incomeReducer from "./slice/IncomeSlice";
import taskReducer from "./slice/taskSlice"
import { shouldUseFlatConfig } from "eslint/use-at-your-own-risk";



const store = configureStore({
    reducer: {
        expenses: expenseReducer,
        incomes: incomeReducer,
        tasks: taskReducer,
    }
})

export default store

function name(params) {
    
}

