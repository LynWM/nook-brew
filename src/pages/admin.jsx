import { useState, useId } from 'react'

export default function Admin () {
  const [activeTab, setActiveTab] = useState('room')
  const id = useId()

  // Room form state
  const [roomForm, setRoomForm] = useState({
    name: '', description: '', capacity: '', price_per_hour: '', amenities: '', image: ''
  })

  // Menu form state
  const [menuForm, setMenuForm] = useState({
    name: '', description: '', category: 'drink', price: '', image: ''
  })

  function handleRoomChange(e) {
    setRoomForm({ ...roomForm, [e.target.name]: e.target.value })
  }

  function handleMenuChange(e) {
    setMenuForm({ ...menuForm, [e.target.name]: e.target.value })
  }

  function handleRoomSubmit(e) {
    e.preventDefault()
    const newRoom = {
      ...roomForm,
      capacity: Number(roomForm.capacity),
      price_per_hour: Number(roomForm.price_per_hour),
      amenities: roomForm.amenities.split(',').map(a => a.trim()),
    }
    fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRoom),
    })
      .then(() => {
        setRoomForm({ name: '', description: '', capacity: '', price_per_hour: '', amenities: '', image: '' })
      })
      .catch(err => console.error(err))
  }

  function handleMenuSubmit(e) {
    e.preventDefault()
    const newItem = { ...menuForm, price: Number(menuForm.price) }
    fetch(`${import.meta.env.VITE_API_URL}/menu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then(() => {
        setMenuForm({ name: '', description: '', category: 'drink', price: '', image: '' })
      })
      .catch(err => console.error(err))
  }

  const inputStyle = {
    border: '1.5px solid #442f2a',
    backgroundColor: '#fff7ec',
    color: '#070d0d',
  }

  const labelStyle = { color: '#442f2a' }

  return (
    <div className="px-8 py-10 max-w-2xl mx-auto">
      <h1 style={{ color: '#442f2a' }} className="text-3xl font-semibold mb-2">Admin Portal</h1>
      <p className="text-gray-400 mb-8">Manage your rooms and menu items</p>

      {/* Toggle */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab('room')}
          style={{
            backgroundColor: activeTab === 'room' ? '#442f2a' : 'transparent',
            color: activeTab === 'room' ? '#fff7ec' : '#442f2a',
            border: '2px solid #442f2a',
          }}
          className="px-6 py-2 rounded-full font-medium transition-all"
        >
          Add Room
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          style={{
            backgroundColor: activeTab === 'menu' ? '#442f2a' : 'transparent',
            color: activeTab === 'menu' ? '#fff7ec' : '#442f2a',
            border: '2px solid #442f2a',
          }}
          className="px-6 py-2 rounded-full font-medium transition-all"
        >
          Add Menu Item
        </button>
      </div>

      {/* Room Form */}
      {activeTab === 'room' && (
        <div style={{ border: '1.5px solid #f5cbd7' }} className="rounded-2xl p-8">
          <h2 style={{ color: '#442f2a' }} className="text-xl font-semibold mb-6">Add a New Room</h2>
          <form onSubmit={handleRoomSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-rname`} style={labelStyle} className="text-sm font-medium">Room Name</label>
              <input id={`${id}-rname`} name="name" value={roomForm.name} onChange={handleRoomChange} required placeholder="e.g. Solo Study Cube" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-rdesc`} style={labelStyle} className="text-sm font-medium">Description</label>
              <textarea id={`${id}-rdesc`} name="description" value={roomForm.description} onChange={handleRoomChange} required rows={3} placeholder="Brief description" style={inputStyle} className="px-4 py-2 rounded-lg outline-none resize-none" />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor={`${id}-rcap`} style={labelStyle} className="text-sm font-medium">Capacity</label>
                <input id={`${id}-rcap`} name="capacity" type="number" value={roomForm.capacity} onChange={handleRoomChange} required min={1} placeholder="e.g. 4" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor={`${id}-rprice`} style={labelStyle} className="text-sm font-medium">Price / session (KES)</label>
                <input id={`${id}-rprice`} name="price_per_hour" type="number" value={roomForm.price_per_hour} onChange={handleRoomChange} required min={0} placeholder="e.g. 300" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-ramen`} style={labelStyle} className="text-sm font-medium">Amenities <span className="text-gray-400 font-normal">(comma separated)</span></label>
              <input id={`${id}-ramen`} name="amenities" value={roomForm.amenities} onChange={handleRoomChange} placeholder="e.g. WiFi, AC, Whiteboard" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-rimg`} style={labelStyle} className="text-sm font-medium">Image URL</label>
              <input id={`${id}-rimg`} name="image" value={roomForm.image} onChange={handleRoomChange} placeholder="https://..." style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
            </div>

            <button type="submit" style={{ backgroundColor: '#A65B71', color: '#fff7ec' }} className="mt-2 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Add Room
            </button>
          </form>
        </div>
      )}

      {/* Menu Form */}
      {activeTab === 'menu' && (
        <div style={{ border: '1.5px solid #f5cbd7' }} className="rounded-2xl p-8">
          <h2 style={{ color: '#442f2a' }} className="text-xl font-semibold mb-6">Add a Menu Item</h2>
          <form onSubmit={handleMenuSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-mname`} style={labelStyle} className="text-sm font-medium">Item Name</label>
              <input id={`${id}-mname`} name="name" value={menuForm.name} onChange={handleMenuChange} required placeholder="e.g. Cappuccino" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-mdesc`} style={labelStyle} className="text-sm font-medium">Description</label>
              <textarea id={`${id}-mdesc`} name="description" value={menuForm.description} onChange={handleMenuChange} required rows={3} placeholder="Brief description" style={inputStyle} className="px-4 py-2 rounded-lg outline-none resize-none" />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor={`${id}-mcat`} style={labelStyle} className="text-sm font-medium">Category</label>
                <select id={`${id}-mcat`} name="category" value={menuForm.category} onChange={handleMenuChange} style={inputStyle} className="px-4 py-2 rounded-lg outline-none">
                  <option value="drink">Drink</option>
                  <option value="snack">Snack</option>
                  <option value="fruit">Fruit</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor={`${id}-mprice`} style={labelStyle} className="text-sm font-medium">Price (KES)</label>
                <input id={`${id}-mprice`} name="price" type="number" value={menuForm.price} onChange={handleMenuChange} required min={0} placeholder="e.g. 150" style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${id}-mimg`} style={labelStyle} className="text-sm font-medium">Image URL</label>
              <input id={`${id}-mimg`} name="image" value={menuForm.image} onChange={handleMenuChange} placeholder="https://..." style={inputStyle} className="px-4 py-2 rounded-lg outline-none" />
            </div>

            <button type="submit" style={{ backgroundColor: '#A65B71', color: '#fff7ec' }} className="mt-2 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Add Item
            </button>
          </form>
        </div>
      )}

    </div>
  )
}
