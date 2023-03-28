import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import EmployeeListPage from '../Pages/EmployeeListPage'



const Router = () => <BrowserRouter >
    <div>
        <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/employeeList" element={<EmployeeListPage />}>
            </Route>
        </Routes>
    </div>
</BrowserRouter>



export default Router