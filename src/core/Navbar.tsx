import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="sticky px-40">
      <div className="py-4 flex items-center space-x-6">
        <div className="text-white">Logo</div>

        <div className="flex-1"></div>
        <Link to="/apps">Applications</Link>

        <Link to="/apps/new" className="button">
          Deploy new App
        </Link>
      </div>
    </div>
  )
}
