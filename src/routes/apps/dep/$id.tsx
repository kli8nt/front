export default function Index() {
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
      <div className="bg-[#111] p-10 rounded-md">
        <h1 className="font-bold text-2xl">Logs</h1>
        <pre className="py-10">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet
        </pre>
      </div>
    </div>
  )
}

const deployment = {
  id: 1,
  name: 'My cool application',
  technology: 'Python',
  status: 'running',
}
