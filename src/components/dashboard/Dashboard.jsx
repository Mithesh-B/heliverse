import React, {useState} from 'react'
import Team from './Team'

import './dashboard.scss'

const Dashboard = ({onChange, gender, available, domain}) => {
  const [showTeam, setShowTeam] = useState(false);

  const handleClick = () => {
    setShowTeam(!showTeam);
  };


  return (
    <div className='dashboard'>
      <div className="top"><h1>Team Up</h1>
      <div className="myTeam" onClick={handleClick}><img src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" /> My Team</div>
        {showTeam && <Team />}
      </div>
      <div className="bottom">
        <div className="left">
            <div className="search"><input type="text" placeholder='search...' onChange={onChange} /></div>
        </div>
        <div className="right">
          <div>
            <div className="filter">
              <label></label>
                  <select
                    id="gender-select"
                    onChange={gender}
                    defaultValue={'default'}
                    
                  >
                    <option value="default" disabled hidden>gender</option>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Agender">Agender</option>
                    <option value="Bigender">Bigender</option>
                    <option value="Polygender">Polygender</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Genderqueer">Genderqueer</option>
                    <option value="Genderfluid">Genderfluid</option>

                  </select>
                </div>
          </div>
          <div>
          <div className="available">
              <label></label>
                  <select
                   defaultValue={'default'}
                    id="availibility-select"
                    onChange={available}
                  >
                    <option value="default" disabled hidden>availability</option>
                    <option value="">All</option>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                  </select>
                </div>
          </div>
          <div>
          <div className="domain">
              <label></label>
                  <select
                    defaultValue={'default'}
                    id="domain-select"
                    onChange={domain}
                  >
                    <option value="default" disabled hidden>domain</option>
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
        </div>
      </div>
    </div>
  )
}

export default Dashboard
