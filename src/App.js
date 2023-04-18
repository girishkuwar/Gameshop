import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProductList from './pages/ProductList/ProductList';
import ProductPage from './pages/ProductPage/ProductPage';
import Login from './pages/Login/Login';
import Admin from './components/Admin/Admin';
import Addgame from './components/Admin/Addgame';
import GameList from './components/Admin/GameList';
import Orders from './components/Admin/Orders';
import Users from './components/Admin/Users';
import UpdateGame from './components/Admin/UpdateGame';
import Signup from './pages/Login/Signup';
import Cart from './pages/Cart/Cart';
import Cartstate from './context/CartState';
import Payment from './pages/payment/Payment';

function App() {
  return (
    <div className="App">
      <Cartstate>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/productlist' element={<ProductList/>}/>
            <Route path='/productpage/:id' element={<ProductPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>
          </Route>
          <Route path='/admin' element={<Admin/>}>
            <Route path='addgame' element={<Addgame/>}/>
            <Route path='gamelist/updategame/:id' element={<UpdateGame/>}/>
            <Route path='gamelist' element={<GameList/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='users' element={<Users/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Cartstate>
    </div>
  );
}

export default App;
