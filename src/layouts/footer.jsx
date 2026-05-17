
import { MapPin, Phone } from "lucide-react"
import React from "react"

export default function Footer () {
  return (
    <footer style={{ backgroundColor: '#442f2a', color: '#fff7ec' }} className="px-8 py-6 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">

        <div>
          <p className="text-lg font-semibold">Nook & Brew</p>
          <p style={{ color: '#f5cbd7' }} className="text-sm opacity-80">
            The cozy corner for focused minds
          </p>
        </div>

        <div className="text-sm text-center" style={{ opacity: 0.75 }}>
          <p>Monday – Friday: 8am – 9pm</p>
          <p>Saturday: 9am – 10pm</p>
          <p>Sunday: 11am – 7pm</p>
        </div>

        <div className="text-sm" style={{ opacity: 0.75 }}>
          <p className="flex gap-2 my-2"> 
            <Phone size={16} /> 
            555-1234
          </p>

          <p className="flex gap-2 my-2"> 
            <MapPin size={16} /> 
            Nairobi, Kenya</p>
        </div>

      </div>

      <p className="text-center text-xs mt-6" style={{ color: '#f5cbd7', opacity: 0.5 }}>
        © 2026 Nook & Brew. All rights reserved.
      </p>
    </footer>
  )
}

