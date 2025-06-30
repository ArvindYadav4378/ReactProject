import React from 'react'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/MyRoutes'

const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <RegisterPage/>
      <LoginPage/> */}
      <RouterProvider router={myRoutes}/>
    </div>
  )
}

export default App