import { Users } from "lucide-react"
import React from "react"

export default function RoomCard ({ room }) {
  return (
    <div
      style={{ border: '1.5px solid #f5cbd7', backgroundColor: '#fff7ec' }}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 style={{ color: '#442f2a' }} className="text-lg font-semibold mb-1">
          {room.name}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{room.description}</p>

        <p className="text-sm mb-3" style={{ color: '#A65B71' }}>
          <Users size={18} /> Up to {room.capacity} {room.capacity === 1 ? 'person' : 'people'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.map((amenity, index) => (
            <span
              key={index}
              style={{ backgroundColor: '#f5cbd7', color: '#442f2a' }}
              className="text-xs px-3 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p style={{ color: '#442f2a' }} className="font-semibold">
            KES {room.price_per_session}<span className="text-sm font-normal text-gray-400"> / session(3 hours)</span>
          </p>
          <button
            style={{ backgroundColor: '#A65B71', color: '#fff7ec' }}
            className="px-5 py-2 rounded-2xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

