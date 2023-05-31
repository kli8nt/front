import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGithub, useDeploy, useMyRepos } from '~/core/api'

function getVersion(tech: string | null) {
  if (tech === 'nginx') return 'latest'
  if (tech === 'python') return '3.10'
  if (tech === 'node') return 'latest'
  if (tech === 'deno') return '1.13'
  if (tech === 'java') return '17'
  if (tech === 'php') return '8.0'
  if (tech === 'ruby') return '3.0'
  if (tech === 'go') return '1.17'
  return 'latest'
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
      { label: 'Nginx', value: 'nginx' },
      { label: 'NodeJS', value: 'node' },
      { label: 'Deno', value: 'deno' },
      { label: 'Java', value: 'java' },
      { label: 'PHP', value: 'php' },
      { label: 'Ruby', value: 'ruby' },
      { label: 'Go', value: 'go' },
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
  const { data, isLoading } = useMyRepos()
  const [appname, setAppname] = useState('')
  const { mutate, isSuccess, isError } = useDeploy()
  const push = useNavigate()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (isSuccess) {
      alert('Deployed successfully')
      push('/apps/dep/' + appname)
    }
    if (isError) {
      alert('Something went wrong')
    }
  }, [isSuccess, isError])

  const repositories = useMemo(() => {
    if (!data) return []

    if (!search)
      return data.repos.sort((a: any, b: any) => {
        return new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
      })

    const filtered = data.repos.filter((repo: any) => {
      return repo.name.toLowerCase().includes(search.toLowerCase())
    })

    return filtered.sort((a: any, b: any) => {
      return new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
    })
  }, [data, search])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    if (!repository.selected) {
      alert('Select a repository first')
      return
    }
    const formData = new FormData(e.currentTarget)
    formData.set('version', getVersion(repository.selected || ''))
    formData.set('repository_url', repository.selected || '')
    setAppname(formData.get('application_name') as string)
    mutate(formData)
  }

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
          <div className="h-96 overflow-y-scroll p-4">
            <div className="grid gap-4">
              <div className="py-4 flex items-center space-x-4">
                <span>Search:</span>
                <input
                  type="text"
                  className="flex-1 input border border-white"
                  onChange={e => setSearch(e.target.value)}
                  value={search}
                  required
                />
              </div>
              {isLoading ? (
                <div className="animate-pulse">Loading</div>
              ) : (
                repositories.map(
                  (repo: { name: string; repo_url: string }, idx: any) => (
                    <button
                      key={idx}
                      onClick={() => repository.select(repo.repo_url)}
                      className={`button ${
                        repository.selected !== repo.repo_url
                          ? ''
                          : 'text-black bg-white'
                      }`}
                    >
                      {repo.name}
                    </button>
                  )
                )
              )}
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl grid gap-4 grid-cols-2"
          >
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
