import Footer from 'components/Footer'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="flex min-h-[calc(100vh+4rem)] flex-col  bg-blue-50 ">
      <Header />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
