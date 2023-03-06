import { createContext } from 'react'
import { useState } from 'react'


export const DataContext = createContext()

const listEmployee = () => {
    return JSON.parse(localStorage.getItem("employee") || "[]")
}

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(listEmployee())

    const addEmployee = (employee) => {
        const list = listEmployee()
        list.push(employee)
        localStorage.setItem("employee", JSON.stringify(list))
        setData(list)
    }




    return <DataContext.Provider value={{
        list: data,
        addEmployee
    }} >
        {children}
    </DataContext.Provider >
}