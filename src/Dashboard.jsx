import {  Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function Dashboard() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Dashboard
