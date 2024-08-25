import { useState, createContext } from "react";

export const AppContext = createContext({
    currentDate: new Date,
    setCurrentDate: (val)=> {},
    totalCalories: 0,
    setTotalCalories: (val)=> {},

});
const AppContextProvider = (props)=> {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [totalCalories, setTotalCalories] = useState(0);
    const {children} = props;

    const updateCurrentDate = (val)=> {
        setCurrentDate(new Date (val));
    }
    const currentDateStr = currentDate.toISOString().split('T')[0];
    return (
        <AppContext.Provider value={{
            currentDate,
            setCurrentDate:updateCurrentDate,
            totalCalories,
            setTotalCalories,
            currentDateStr,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;