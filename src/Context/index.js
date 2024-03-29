import { createContext } from 'react'
import { useState } from 'react'

/**
 * Allows you to retrieve data from localStorage and distribute it to the components   
 */

export const DataContext = createContext()

//employee list
const listEmployee = () => {
    return JSON.parse(localStorage.getItem("employee") || "[]")
}

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(listEmployee())
    const [search, setSearch] = useState("")
    const [numberPerPage, setNumberPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);

    //add an employee

    const addEmployee = (employee) => {
        const list = listEmployee()
        list.push(employee)
        localStorage.setItem("employee", JSON.stringify(list))
        setData(list)
    }

    return <DataContext.Provider value={{
        list: data,
        addEmployee,
        setSearch,
        search,
        setNumberPerPage,
        numberPerPage,
        currentPage,
        setCurrentPage,
    }} >
        {children}
    </DataContext.Provider >
}