import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/Home';
import Collection from './Pages/Collection';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster position='top-right' />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="collections/:collection" element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
