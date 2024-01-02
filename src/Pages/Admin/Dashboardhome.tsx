import React, { useContext } from 'react'
import Dashboard from '../../Components/admin/dashboard'
import '../../styles/admin.css'
import Adminheader from '../../Components/admin/adminheader'
import { SidebarContext } from '../../context/Sidebarcontext'

function Dashboardhome() {

	const sidebarContext = useContext(SidebarContext)


  return (
    <>
      <section id={'content'}>
        <Adminheader/>
        <Dashboard/>
      </section>
    </>
  )
}

export default Dashboardhome