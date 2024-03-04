import React from 'react'
import { Outlet } from 'react-router-dom'
import { LocationProvider } from './components/LocationContext.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <>
      <Header />
      <LocationProvider>
        <Outlet />
      </LocationProvider>
      <Footer />
    </>
  )
}

export default App;
