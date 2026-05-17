export default function MenuCard ({ item }) {
  return (
    <div
      style={{ border: '1.5px solid #f5cbd7', backgroundColor: '#fff7ec' }}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />

      <div className="p-5">

        <h3 style={{ color: '#442f2a' }} className="text-lg font-semibold mt-2 mb-1">
          {item.name}
        </h3>

        <span
          style={{ backgroundColor: '#f5cbd7', color: '#442f2a' }}
          className="text-xs px-3 py-1 rounded-2xl font-medium capitalize"
        >
          {item.category}
        </span>

        <p className="text-gray-500 text-sm my-3">{item.description}</p>

        <p style={{ color: '#A65B71' }} className="font-semibold">
          KES {item.price}
        </p>
      </div>
    </div>
  )
}

