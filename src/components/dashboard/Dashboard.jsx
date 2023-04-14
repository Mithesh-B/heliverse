import React from 'react'

import './dashboard.scss'

const Dashboard = ({onChange, gender, available, domain}) => {




  return (
    <div className='dashboard'>
      <div className="top"><h1>Team Up</h1></div>
      <div className="bottom">
        <div className="left">
            <div className="search"><input type="text" onChange={onChange} /></div>
        </div>
        <div className="right">
          <div>
            <div className="filter">
              <label htmlFor="gender-select">Gender:</label>
                  <select
                    id="gender-select"
        
                    onChange={gender}
                  >
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
          </div>
          <div>
          <div className="available">
              <label htmlFor="gender-select">Availability:</label>
                  <select
                    id="gender-select"
        
                    onChange={available}
                  >
                    <option value="">All</option>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                  </select>
                </div>
          </div>
          <div>
          <div className="domain">
              <label htmlFor="gender-select">Domain:</label>
                  <select
                    id="gender-select"
        
                    onChange={domain}
                  >
                    <option value="">All</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Management">Management</option>
                    <option value="IT">IT</option>
                    <option value="UI Designing">UI Designing</option>
                    <option value="Business Development">Business Development</option>
                  </select>
                </div>
          </div>
            <div className="team">My Team</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
