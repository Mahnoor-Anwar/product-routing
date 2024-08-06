import { Box } from '@mui/material'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import CardDetails from './Cards/CardDetails'
import Home from './Home/Home'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/carddetails/:id' element={<CardDetails />} />
    </Routes>
  )
}

export default App
