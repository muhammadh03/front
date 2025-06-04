import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <Route path="/:category/collections/all" element={<Collection />} />
            <Route path="/flash-deals/collections/all" element={<FlashDealsCollection />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
