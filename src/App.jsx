import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home/HomeScreen';

// layout pages
import { GlobalStyles } from './style/global/GlobalStyles';
import BaseLayout from './components/layout/BaseLayout';
import AuthLayout from './components/layout/AuthLayout';
import Reset from './screens/auth/ResetScreen';
// auth pages
import SignIn from './screens/auth/SignInScreen';
import SignUp from './screens/auth/SignUpScreen';
import ChangePassword from './screens/auth/ChangePassword';
import CheckMalil from './screens/auth/CheckMaliScreen';
import Verification from './screens/auth/VerificationScreen';
import NotFound from './screens/error/NotFoundScreen';
import ProductList from './screens/producsts/ProductListScreen';
import ProductDetails from './screens/producsts/ProductDetails';
import Cart from './screens/cart/CartScreen';
import CartEmpty from './screens/cart/CartEmptyScreen';
import Checkout from './screens/checkout/CheckoutScreen';
const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* Main Screens */}
          <Route path='/' element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/details' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/empty_cart' element={<CartEmpty />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
          {/* Auth Screens */}
          <Route path='/' element={<AuthLayout />}>
            <Route path='/sign_in' element={<SignIn />} />
            <Route path='/sign_up' element={<SignUp />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/change_password' element={<ChangePassword />} />
            <Route path='/check_mail' element={<CheckMalil />} />
            <Route path='/verification' element={<Verification />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
