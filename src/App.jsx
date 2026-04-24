import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import RecipeDetails from './pages/RecipeDetails'


function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
