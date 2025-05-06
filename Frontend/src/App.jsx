import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <><Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='profile' element={<Profile />} />
      </Route><Route path='*' element={<NotFound />} /></>

    )

  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
