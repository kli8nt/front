import { Suspense } from 'react'
import { useRoutes } from '~/core/Router'
import Loading from '~/core/Loading'
import Providers from '~/core/Providers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const routes = useRoutes()
  return (
    <Providers>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Providers>
  )
}

export default App
