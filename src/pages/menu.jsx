import { useState, useEffect } from 'react'
import MenuCard from '../components/menupage/menu-card'
import SearchBar from '../components/search'

export default function Menu () {
  const [menuItems, setMenuItems] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(err => console.error('Error fetching menu:', err))
  }, [])

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="px-8 py-10">
      <h1 style={{ color: '#442f2a' }} className="text-3xl font-semibold mb-6">
        Our Menu
      </h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredItems.length === 0 ? (
        <p className="mt-8 text-gray-400">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
