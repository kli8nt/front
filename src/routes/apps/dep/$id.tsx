import { useLogs } from '~/core/use-socket'

export default function Index() {
  const logs = useLogs()

  return (
    <div className="p-40">
      <div className="pb-10 flex items-center space-x-10">
        <h1 className="font-bold text-3xl">{deployment.name}</h1>
        <div>
          <a href="#" className="button bg-white text-black" target="_blank">
            Visit
          </a>
        </div>
      </div>
      <div className="bg-[#111]/40 backdrop-blur-xl p-10 rounded-md">
        <h1 className="font-bold text-2xl">Logs</h1>
        <pre className="py-10">
          {logs.map((log, idx) => (
            <div key={idx}>
              {log} <br />
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

const deployment = {
  id: 1,
  name: 'Nginx-TS Example',
  technology: 'nginx',
  status: 'running',
}
