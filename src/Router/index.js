import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'
import EmployeeListPage from '../Pages/EmployeeListPage'



const Router = () => <BrowserRouter >
    <div>
        <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/employeeList" element={<EmployeeListPage />}>
            </Route>
            <Route path="*" element={<ErrorPage />}>
            </Route>
        </Routes>
    </div>
</BrowserRouter>



export default Router