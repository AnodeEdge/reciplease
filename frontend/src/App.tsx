import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Recipes from './pages/Recipes';


const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
