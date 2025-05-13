import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './Layout/UserLayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
