import { Suspense } from 'react'
import { useRoutes } from '~/core/Router'
import Loading from '~/core/Loading'
import Providers from '~/core/Providers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './core/Navbar'

function App() {
  const routes = useRoutes()
  return (
    <div>
      <div className="text-white bg-[url('/pattern.svg')] bg-no-repeat bg-center">
        <div className="h-screen backdrop-blur-xl">
          <Providers>
            <Suspense fallback={<Loading />}>
              <BrowserRouter>
                <Navbar />
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
        </div>
      </div>
    </div>
  )
}

export default App
