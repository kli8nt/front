import { useParams } from 'react-router-dom'
import { useLogs } from '~/core/use-socket'

export default function Index() {
  const { id } = useParams()
  const logs = useLogs()

  return (
    <div className="p-40">
      <div className="pb-10 flex items-center space-x-10">
        <h1 className="font-bold text-3xl">{id}</h1>
        <div>
          <a
            href={`https://${id}.kli8nt.tech`}
            className="button bg-white text-black"
            target="_blank"
          >
            Visit
          </a>
        </div>
      </div>
      <div className="bg-[#111]/40 backdrop-blur-xl p-10 rounded-md">
        <h1 className="font-bold text-2xl">Logs</h1>
        <pre className="py-10">
          {logs.map((log, idx) => (
            <div key={idx}>{log}</div>
          ))}
        </pre>
      </div>
    </div>
  )
}
