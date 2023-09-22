import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import UserRegister from './UserRegister';
import "./sbadmin.css";
import UserDashboard from './UserDashboard';
import AdminRegister from './AdminRegister';
import AdminDashboard from './AdminDashboard';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ViewProduct from './ViewProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/user-register' element={<UserRegister />}></Route>
        <Route path='/admin-register' element={<AdminRegister />}></Route>
        <Route path='/user-dashboard' element={<UserDashboard />}></Route>
        <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='/view-product/:id' element={<ViewProduct />}></Route>
        <Route path='/update-product/:id' element={<EditProduct />}></Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
