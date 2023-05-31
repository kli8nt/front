import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated()
  return (
    <div className="sticky px-40">
      <div className="py-4 flex items-center space-x-6">
        <Link to="/" className="text-white tracking-widest font-light text-xl">
          Kli8nt
        </Link>

        <div className="flex-1"></div>

        {isAuthenticated ? (
          <>
            <Link to="/apps">Applications</Link>

            <Link to="/apps/new" className="button">
              Deploy new App
            </Link>
          </>
        ) : (
          <Link to="/auth" className="button">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

function useIsAuthenticated() {
  const [is, setIs] = useState(localStorage.getItem('token') !== null)
  return is
}
