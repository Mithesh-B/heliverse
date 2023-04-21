import React, {useState} from 'react'
import Movies from './Movies'


import './dashboard.scss'

const Dashboard = ({onChange, click}) => {
  const [showMovie, setShowmovie] = useState(false);
 //handles cart visibility on click
  const handleClick = () => {
    setShowmovie(!showMovie);
  };


  return (
    <div className='dashboard'>
      <div className="top"><h1>EazzyMovie</h1>
      <div className="myTeam" onClick={handleClick}><img src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" /> My Watchlist</div>
        {showMovie && <Movies />}
      </div>
      <div className="bottom">
        <div className="left">
            <div className="search"><input type="text" placeholder='search movie...' onChange={onChange} /> <button className='searchBtn' onClick={click}>search</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
