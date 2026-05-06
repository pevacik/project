import { createContext, useState } from "react";
import moment from 'moment';
import 'moment/dist/locale/ru';

export const PopupContext = createContext()


export function PopupProvider({ children }) {

    const [date, setDate] = useState(moment().format('LL'))

    return (
        <PopupContext.Provider value={{ date, setDate }} >
            {children}
        </PopupContext.Provider>
    )

} 