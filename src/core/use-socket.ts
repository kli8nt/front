import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_WS_URL as string

const getSocketUrl = (app: string) => `${baseUrl}/logs/${app}`

function useGetSocketURL() {
  const { id } = useParams()

  const socketUrl = useMemo(() => {
    if (!id) return ''
    return getSocketUrl(id)
  }, [id])
  return socketUrl
}

export default function useSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const url = useGetSocketURL()

  useEffect(() => {
    if (!url) return
    const socket = new WebSocket(url)
    socket.onopen = () => {
      console.log('connected')
    }
    socket.onclose = () => {
      console.log('disconnected')
    }

    socket.onerror = err => {
      console.log('error', err)
    }

    setSocket(socket)

    return () => {
      socket.close()
    }
  }, [url])

  return socket
}

export function useLogs() {
  const [logs, setLogs] = useState<string[]>([])

  const socket = useSocket()

  useEffect(() => {
    if (!socket) return

    socket.onmessage = (event: MessageEvent) => {
      const log = event.data
      setLogs(logs => [...logs, log])
    }
  }, [socket])

  return logs
}
