import React from 'react'
import './header.css'

const Header = () => {
  return <>
    <div className='max-width' id='header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='Zomato-logo' />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="material-symbols-outlined absolute-center location-icon">location_on</i>
              <div className='city'>sanosara</div>
            </div>


            {/* <div className="location-drop"> */}
            <i className="material-symbols-outlined absolute-center location-drop">arrow_drop_down</i>
          </div>
          <div className='saperator'>|</div>
            {/* </div> */}


          <div className="header-search-bar absolute-center">
          <i className="material-symbols-outlined absolute-center search-icon">search</i>
          <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
          </div>
        </div>
        <div className="login-signup">
          <div className="login">Login</div>
          <div className="sign">sign Up</div>
        </div>

      </div>
    </div>

    <div className="nav max-width">
      <a href="https://www.zomato.com/"><p>Home<span>/</span></p></a>
      <a href="https://www.zomato.com/india"><p>India<span>/</span></p></a>
      <p className='restro'>Sanosara Restaurant</p>
    </div>
  </>
}

export default Header