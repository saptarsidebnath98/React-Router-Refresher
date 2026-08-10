import { Outlet } from 'react-router'
import './App.css'

function Dashboard() {

  return (
    <>
      <h2>This is the DASHBOARD file</h2>
      <Outlet/>
    </>
  )
}

export default Dashboard
