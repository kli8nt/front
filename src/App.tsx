import { Suspense } from 'react'
import { useRoutes } from '~/core/Router'
import Loading from '~/core/Loading'
import Providers from '~/core/Providers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './core/Navbar'
import { useSetToken } from './core/api'

function App() {
  const routes = useRoutes()
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Providers>
          <Wrapper>
            <div className="text-white bg-[url('/pattern.svg')] bg-no-repeat bg-center">
              <div className="h-screen backdrop-blur-xl">
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
              </div>
            </div>
          </Wrapper>
        </Providers>
      </BrowserRouter>
    </Suspense>
  )
}

function Wrapper({ children }: { children: React.ReactNode }) {
  useSetToken()
  return <>{children}</>
}

export default App
