import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProvider } from '../context'
import NotFound from '../components/NotFound'

const Home = lazy(() => import('../pages/home'))
const Hotels = lazy(() => import('../pages/hotels'))
const Main = lazy(() => import('../layout/main'))

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppProvider>
              <Main />
            </AppProvider>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AllRoutes
