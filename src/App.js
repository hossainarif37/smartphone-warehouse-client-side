import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import AddItem from './Components/AddItem/AddItem';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import InventoryDetail from './Components/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additems' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
