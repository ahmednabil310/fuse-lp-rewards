import React from 'react'
import { useHistory } from "react-router";
import hotLabel from '@/assets/images/hot-label.svg'
import calendar from '@/assets/images/calendar.svg'


export default  ({title,id,icon,expDate,totalLockedValue,accuredRewards,apy,isHot})=> {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/${id}`);
    };
    return (
        <div className="reward-card">
            <div className="reward-card__icons">
                <img src={icon} className="reward-card__icon"></img>
                {isHot && <img src={hotLabel}></img>}
            </div>
            <h1 className="reward-card__title">{title}</h1>
            <div className="card-section">
                <div className="card-calender__label">
                <img className="card-calender__icon" src={calendar}></img>
                    <h1 className="card-section__label">EXPIRE DATE</h1>
                    </div>
                <h1 className="card-section-info">{expDate}</h1>
            </div>
            <div className="card-section">
                <h1 className="card-section__label">TOTAL LOCKED VALUE</h1>
                <h1 className="card-section__info">{totalLockedValue}</h1>
            </div>
            <div className="card-section">
                <h1 className="card-section__label">ACCURED REWARDS</h1>
                <h1 className="card-section__info">{accuredRewards}</h1>
            </div>
            <div className="card-section">
                <h1 className="card-section__label">APY</h1>
                <h1 className="card-section__apy">{apy}</h1>
            </div>
          <div className="button-container">

                <button className="card-button" onClick={handleClick}>Submit</button>
          </div>
   
        </div>
    )
}
