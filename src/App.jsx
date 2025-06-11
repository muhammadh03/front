import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import ProductDetails from './Components/Products/ProductDetails';
import ScrollToTop from './Components/Common/ScrollToTop';
import FlashDealsCollection from './Pages/FlashDealsCollection';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Components/Cart/Checkout';
import Account from './Pages/Account';
import Profile from './Pages/Profile';
import MyOrders from './Pages/MyOrders';
import Wishlist from './Pages/Wishlist';
import Reviews from './Pages/Reviews';
import Business from './Pages/Business';
import Payment from './Pages/Payment';
import OrderDetails from './Pages/OrderDetails';
import OrderConfirmation from './Pages/OrderConfirmation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position='top-right' />
        <Routes>
          {/* Standalone login and register page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* All other pages wrapped in UserLayout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />

            {/* Account with nested routes */}
            <Route path="account" element={<Account />}>
              <Route path='' element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<MyOrders />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="business" element={<Business />} />
              <Route path="payment" element={<Payment />} />
            </Route>

            <Route path="/:category/collections/all" element={<Collection />} />
            <Route path="/flash-deals/collections/all" element={<FlashDealsCollection />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="order/:id" element={<OrderDetails />} /> */}
            <Route path="order-confirmation" element={<OrderConfirmation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
