
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register, Login, Main, Navbar } from './components'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Main/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path='/register' element = {<Register/>} />
      </Routes>
    </div>
  )
}

export default App