
// import react from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle"
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import AdminPage from './screens/AdminPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createuser' element={<Signup />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
            <Route exact path='/adminPage' element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
