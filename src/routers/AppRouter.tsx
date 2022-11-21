import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../components/App'
import Category from '../components/Category'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/filter" element={<Category/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter