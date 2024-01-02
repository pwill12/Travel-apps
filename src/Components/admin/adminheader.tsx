import React, { useContext, useState } from 'react'
import { SidebarContext, SidebarContextProvider } from '../../context/Sidebarcontext'

// interface menuprops {
// 	menu: boolean
// 	setmenu: React.Dispatch<React.SetStateAction<boolean>>
// 	handleClick: (event: React.MouseEvent<HTMLElement>) => void
// }

function Adminheader() {
	const sidebarContext = useContext(SidebarContext)
	const [menu, setMenu] = useState(false)

	const hidesidebar = () => {
		sidebarContext.settoggle(!sidebarContext.togglesidebar)
	}

	const handleprofile = () => {
		setMenu(!menu)
	}


	return (
		<>
			<nav>
				<i className='bx bx-menu toggle-sidebar' onClick={hidesidebar}></i>
				<form action="#">
					<div className="form-group">
						<input type="text" placeholder="Search..." />
						<i className='bx bx-search icon' ></i>
					</div>
				</form>
				<a href="#" className="nav-link">
					<i className='bx bxs-bell icon' ></i>
					<span className="badge">5</span>
				</a>
				<a href="#" className="nav-link">
					<i className='bx bxs-message-square-dots icon' ></i>
					<span className="badge">8</span>
				</a>
				<span className="divider"></span>
				<div className="profile">
					<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" onClick={handleprofile}/>
					<ul className={menu ? 'profile-link show' : 'profile-link'}>
						<li><a href="#"><i className='bx bxs-user-circle icon' ></i> Profile</a></li>
						<li><a href="#"><i className='bx bxs-cog' ></i> Settings</a></li>
						<li><a href="#"><i className='bx bxs-log-out-circle' ></i> Logout</a></li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Adminheader