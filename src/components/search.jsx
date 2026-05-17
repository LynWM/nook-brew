export default function Search ({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          border: '1.5px solid #442f2a',
          color: '#070d0d',
          backgroundColor: '#fff7ec',
        }}
        className="w-full max-w-md px-4 py-2 rounded-full outline-none"
      />
    </div>
  )
}