import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
