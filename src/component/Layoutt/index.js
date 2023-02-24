import React from 'react'
import { Outlet } from 'react-router-dom'
import FacebookDetail from '../facebookDetails'
import Sidebar from '../sidebar'



function Layout() {
  return (
    <div>
      <div className='page-content'>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}

export default Layout