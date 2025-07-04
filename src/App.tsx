
import { Outlet } from 'react-router'
import Navbar from '@components/Nav'

function App() {

  return (
    <div className="w-full h-[100dvh]">
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default App
