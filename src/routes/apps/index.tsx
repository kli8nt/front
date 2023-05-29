import { Link } from 'react-router-dom'

const deployments = [
  {
    id: 1,
    name: 'My cool application',
    technology: 'Python',
    status: 'running',
  },
  {
    id: 2,
    name: 'DINOOBOOX',
    technology: 'Deno',
    status: 'pending',
  },
  {
    id: 3,
    name: 'RAFRAF APP',
    technology: 'Java',
    status: 'error',
  },
]

export default function Index() {
  return (
    <div className="p-40">
      <div className="pb-10">
        <h1 className="font-bold text-3xl">All Deployments</h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {deployments.map(dep => (
          <Link to={`/apps/dep/${dep.id}`} key={dep.id}>
            <div className="bg-white text-black backdrop-blur-xl p-4 rounded-md">
              <h1 className="font-semibold text-xl">{dep.name}</h1>
              <div className="flex items-center justify-between pt-10">
                <h2 className="text-sm capitalize">{dep.technology}</h2>
                <h2 className="text-xs font-bold uppercase">
                  <Status status={dep.status} />
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Status({ status }: { status: string }) {
  if (status === 'running')
    return <span className="text-green-700">Running</span>
  if (status === 'pending')
    return <span className="text-yellow-700">Pending</span>
  if (status === 'error') return <span className="text-red-700">Error</span>
  return <span className="text-gray-700">Unknown</span>
}
