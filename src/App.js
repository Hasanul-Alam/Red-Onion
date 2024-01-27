import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import FoodDetails from './Components/FoodDetails/FoodDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/food-details/:foodId' element={<FoodDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
