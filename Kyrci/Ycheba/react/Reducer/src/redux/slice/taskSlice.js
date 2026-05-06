import { createSlice } from "@reduxjs/toolkit"


export const data = {
    taskList: [
        {
            id: 34,
            name: 'sdfsf',

        },
        {
            id: 2,
            name: 'sdfsf',

        },

    ],
}

const taskSlice = createSlice({
    name: 'taskList',
    initialState: data,
    reducers: {
        addTaskSlice: (state, action) => {
            
            state.taskList.push(action.payload)

        },
        delitTaskSlice: (state, action) => {



            const newArr = state.taskList.filter((item) => {
                if (item.id != action.payload) {
                    return item
                }
            })
            state.taskList = newArr
        },
        cngTaskSlice: (state, action) => {

        }
    }

})

export const { addTaskSlice, delitTaskSlice, cngTaskSlice } = taskSlice.actions

export default taskSlice.reducer   // здесть лежит инишал стейт