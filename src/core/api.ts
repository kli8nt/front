import axios from 'axios'
import { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useSearchParams } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_API_URL as string

const api = () => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: 'token ' + localStorage.getItem('token'),
    },
  })
}

export const loginWithGithub = baseUrl + '/login/github'

export function useSetToken() {
  const [params, _] = useSearchParams()
  useEffect(() => {
    console.log('params', params)
    const token = params.get('token')
    console.log('token', token)
    if (!token) return
    localStorage.setItem('token', token)
  }, [])
}

export function useMyRepos() {
  const queryClient = useQueryClient()
  const token = localStorage.getItem('token')
  return useQuery(
    'repos',
    async () => {
      const res = await fetch(baseUrl + '/repos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      return data
    },
    {
      enabled: !!token,
      onSuccess: data => {
        queryClient.setQueryData('repos', data)
      },
    }
  )
}

const deploy = (body: FormData) =>
  api().post('/deploy', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export function useDeploy() {
  const queryClient = useQueryClient()
  return useMutation((body: FormData) => deploy(body), {
    onSuccess: () => {
      queryClient.invalidateQueries('repos')
    },
  })
}
