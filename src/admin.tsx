import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/admin/sidebar';
import Dashboardhome from './Pages/Admin/Dashboardhome';
import './styles/admin.css'
import { SidebarContextProvider } from './context/Sidebarcontext';
import { useAppSelector } from './redux/hooks/Hooks';
import App from './App';


// console.log(user)


function Admin() {
  const user = useAppSelector(state => state.user)
  const adminchange = user.currentUser?.admin

  return (
    <>
      {adminchange ?
        <SidebarContextProvider>
          <div className="App">
            <Router>
              <Sidebar />
              <Routes>
                <Route path='/admin' element={<Dashboardhome />} />
                <Route path='*' element={<Dashboardhome />} />
              </Routes>
            </Router>
          </div>
        </SidebarContextProvider>
        : <App />
      }
    </>
  )
}

export default Admin