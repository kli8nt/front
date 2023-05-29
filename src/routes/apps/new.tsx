import { useState } from 'react'

function getVersion(tech: string) {
  if (tech === 'python') return '3.10'
  if (tech === 'nodejs') return '17'
  if (tech === 'deno') return '1.13'
}

const formOptions = [
  {
    columns: 1,
    label: 'Application name',
    name: 'application_name',
    placeholder: 'the name will be your domain name',
  },
  {
    columns: 1,
    label: 'Technology',
    name: 'technology',
    options: [
      { label: 'Python', value: 'python' },
      { label: 'NodeJS', value: 'nodejs' },
      { label: 'Deno', value: 'deno' },
    ],
  },
  {
    columns: 1,
    label: 'Is static',
    name: 'is_static',
    options: [
      { label: 'Yes', value: 'true' },
      { label: 'No', value: 'false' },
    ],
  },
  {
    columns: 1,
    label: 'Install command',
    name: 'install_command',
    placeholder: 'npm install',
  },
  {
    columns: 1,
    label: 'Build command',
    name: 'build_command',
    placeholder: 'npm run build',
  },
  {
    columns: 1,
    label: 'Run command',
    name: 'run_command',
    placeholder: 'npm start',
  },
  {
    label: 'Dependencies files',
    name: 'dependencies_files',
    placeholder: 'package.json;package-lock.json',
  },
  {
    columns: 1,
    label: 'Output directory',
    name: 'output_directory',
    placeholder: 'public',
  },
  {
    columns: 1,
    label: 'Port',
    name: 'port',
    placeholder: '80',
  },
  {
    label: 'Environment variables',
    name: 'environment_variables',
    multi: true,
    placeholder: 'PORT=3000;NODE_ENV=production',
  },
]

export default function Index() {
  const repository = useRepository()

  return (
    <div className="p-40">
      <div className="grid grid-cols-3 gap-20">
        <div className="py-10">
          <div className="pb-10 ">
            <h1 className="font-bold text-3xl">Deploy a new application</h1>
          </div>
          <h1 className="pb-4 text-lg font-medium flex items-center justify-between">
            <span>Select Repository</span>
            <button className="button text-xs">Refresh</button>
          </h1>
          <div className="grid gap-4">
            {repository.list.map(repo => (
              <button
                key={repo}
                onClick={() => repository.select(repo)}
                className={`button ${
                  repository.selected !== repo ? '' : 'text-black bg-white'
                }`}
              >
                {repo}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <form action="" className="max-w-3xl grid gap-4 grid-cols-2">
            {formOptions.map((opt, idx) => (
              <label
                className={`grid gap-2 ${
                  opt.columns ? 'col-span-' + opt.columns : 'col-span-2'
                }`}
                key={idx}
              >
                <span className="font-medium">{opt.label}</span>
                {opt.multi ? (
                  <textarea
                    className="input"
                    name={opt.name}
                    placeholder={opt.placeholder}
                    required
                  />
                ) : null}
                {opt.options ? (
                  <select
                    className="input"
                    name={opt.name}
                    placeholder={opt.placeholder}
                    required
                  >
                    {opt.options.map((opt, idx) => (
                      <option key={idx} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : null}
                {!opt.options && !opt.multi ? (
                  <input
                    type="text"
                    className="input"
                    name={opt.name}
                    placeholder={opt.placeholder}
                    required
                  />
                ) : null}
              </label>
            ))}

            <div className="py-8 flex justify-end col-span-2">
              <button className="button bg-white text-black">Deploy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function useRepository() {
  const [list, _] = useState([
    'my new cool application',
    'my pistol application',
    'fair trade application',
  ])
  const [selected, setSelected] = useState<null | string>(null)

  const select = (repo: string) => {
    if (repo === selected) {
      setSelected(null)
    } else {
      setSelected(repo)
    }
  }

  return { list, selected, select }
}

const deployment = {
  id: 1,
  name: 'My cool application',
  technology: 'Python',
  status: 'running',
}
