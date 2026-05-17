import { useState, useEffect } from 'react'
import RoomCard from '../components/roompage/room-card'
import SearchBar from '../components/search'
import React from 'react'

export default function Rooms () {
  const [rooms, setRooms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/rooms')
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error('Error fetching rooms:', err))
  }, [])

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="px-8 py-10">
      <h1 style={{ color: '#442f2a' }} className="text-3xl font-semibold mb-6 mt-10">
        Study Rooms
      </h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredRooms.length === 0 ? (
        <p className="mt-8 text-gray-400">No rooms found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </div>
  )
}
