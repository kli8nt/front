import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-black">Deploy in a click, on Kli8nt..</h1>
        <div className="py-20">
          <Link to="/auth" className="button">
            Deploy your first Application
          </Link>
        </div>
      </div>
    </div>
  )
}
