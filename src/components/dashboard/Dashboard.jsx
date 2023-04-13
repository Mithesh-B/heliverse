import React from 'react'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="top"><h1>Team Up</h1></div>
      <div className="bottom">
        <div className="left">
            <div className="search"><input type="text" /></div>
        </div>
        <div className="right">
            <div className="filter">Filter</div>
            <div className="team">My Team</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
