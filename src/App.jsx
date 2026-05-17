import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './layouts/navbar'
import Footer from './layouts/footer'

import Home from './pages/home'
import Rooms from './pages/rooms'
import Menu from './pages/menu'
import Admin from './pages/admin'

export default function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
