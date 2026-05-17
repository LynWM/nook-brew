import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const navigate = useNavigate()

  return (
    <div>

      {/* Hero */}
      <div
        style={{ backgroundColor: '#442f2a', color: '#fff7ec' }}
        className="flex flex-col items-center justify-center text-center px-8 py-24 mt-5"
      >
        <h1 className="text-5xl font-semibold mb-4 tracking-wide">Nook & Brew</h1>
        <p style={{ color: '#f5cbd7' }} className="text-lg mb-8 max-w-md">
          Your one stop for focus and productivity. Visit us now to access all the peace and quiet
          you need to tackle your to-do.
        </p>
        <button
          onClick={() => navigate('/rooms')}
          style={{ backgroundColor: '#A65B71', color: '#fff7ec' }}
          className="px-6 py-2 rounded-2xl cursor-pointer font-medium text-lg hover:opacity-90 transition-opacity"
        >
          Book a Room
        </button>
      </div>

      {/* About */}
      <div className="px-8 py-12 max-w-3xl mx-auto text-center">
        <h2 style={{ color: '#442f2a' }} className="text-3xl font-semibold mb-4">
          Welcome to Nook & Brew
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We are a study café designed for students, freelancers, and anyone who needs
          a quiet, comfortable space to focus. Whether you're cramming for exams, working
          on a project, or just need a change of scenery — we have the perfect nook for you.
          Pair your session with a freshly brewed drink and a snack from our menu.
        </p>
      </div>

      {/* Action Cards */}
      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          style={{ backgroundColor: '#442f2a', color: '#fff7ec' }}
          className="rounded-xl p-8 flex flex-col gap-4"
        >
          <h3 className="text-2xl font-semibold">Book a Room</h3>
          <p style={{ color: '#f5cbd7' }} className="text-sm leading-relaxed">
            Find your perfect study space — solo cubes, group rooms, lounge areas and more.
          </p>
          <button
            onClick={() => navigate('/rooms')}
            style={{ backgroundColor: '#A65B71', color: '#fff7ec' }}
            className="mt-auto px-6 py-2 cursor-pointer rounded-2xl font-medium hover:opacity-80 transition-opacity w-fit"
          >
            Browse Rooms
          </button>
        </div>

        <div
          style={{ backgroundColor: '#f5cbd7', color: '#442f2a' }}
          className="rounded-xl p-8 flex flex-col gap-4"
        >
          <h3 className="text-2xl font-semibold">Browse the Menu</h3>
          <p style={{ color: '#6b4040' }} className="text-sm leading-relaxed">
            Coffee, tea, fresh fruits, snacks and more. Fuel your focus the Nook & Brew way.
          </p>
          <button
            onClick={() => navigate('/menu')}
            style={{ backgroundColor: '#442f2a', color: '#fff7ec' }}
            className="mt-auto px-6 py-2 rounded-2xl font-medium hover:opacity-90 transition-opacity w-fit"
          >
            See Menu
          </button>
        </div>
      </div>

    </div>
  )
}

