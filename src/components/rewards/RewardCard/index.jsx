import React from 'react'

import hotLabel from '@/assets/images/hot-label.svg'
import calendar from '@/assets/images/calendar.svg'


export default  ({title,id,icon,expDate,totalLockedValue,accuredRewards,apy,isHot})=> {
    return (
        <div className="reward-card">
            <div className="card-icons">
                <img src={icon} id="card-icon"></img>
                {isHot && <img src={hotLabel}></img>}
            </div>
            <h1 className="card-title">{title}</h1>
            <div className="card-section">
                <div className="card-calender-label">
                <img className="card-calender-icon" src={calendar}></img>
                    <h1 id="section-label">EXPIRE DATE</h1>
                    </div>
                <h1 id="section-info">{expDate}</h1>
            </div>
            <div className="card-section">
                <h1 id="section-label">TOTAL LOCKED VALUE</h1>
                <h1 id="section-info">{totalLockedValue}</h1>
            </div>
            <div className="card-section">
                <h1 id="section-label">ACCURED REWARDS</h1>
                <h1 id="section-info">{accuredRewards}</h1>
            </div>
            <div className="card-section">
                <h1 id="section-label">APY</h1>
                <h1 id="section-apy">{apy}</h1>
            </div>
          <div className="button-container">

                <button className="card-button">Submit</button>
          </div>
   
        </div>
    )
}
