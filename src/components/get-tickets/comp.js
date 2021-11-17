import React, { useState } from 'react'
import './style.css'
import arrowUp from '../../images/arrow-up.png'

export default function GetTickets() {
    const [active,setActive]=useState(false);
    const detaile = ()=>{
        setActive(false);
    }
    const hide = ()=>{
        setActive(true);
    }
    return (
        <div className="background-s">
            <p className="title">Get your tickets now!</p>
            <p className="timer">1h 46m until the draw</p>
            <div className={active ?"next-draw-box":"next-draw-box-hide"}>
            {/* <div className="next-draw-box"> */}
                <div className="time">
                    <h3 >Next Draw</h3>
                    <h5>#263 | Draw: Nov 11, 2021, 3:30 PM</h5>
                    
                </div>
                <div className="second-box">
                <div className="prize">
                    <p className="prize-pot">Prize Pot</p>
                    <div className="cake">
                        <p className="prize-prize">~$112,982</p>
                        <p className="prize-cake">6,257 CAKE</p>
                    </div>
                </div>
                <div className="tickets">
                    <p className="your-ticket">Your tickets</p>
                    <div className="get-tickets"> Buy Tickets</div>
                </div>  
                    </div>  
                <div className="divider"></div>
                <div className={active ? "get-ticket-text" :"get-ticket-text-hide"}>Match the winning number in the same order to share prizes.Current prizes up for grabs:</div>
                <div className= {active ? "first-matchs" : "first-matchs-hide"}>
                    <div className="match-first1">
                        <h5>Match first 1</h5>
                         <h4>180 CAKE</h4>
                         <h6>~$3,266</h6>
                    </div>
                    <div className="match-first2">
                         <h5>Match first 1</h5>
                         <h4>180 CAKE</h4>
                         <h6>~$3,266</h6>
                    </div>
                    <div className="match-first3">
                         <h5>Match first 1</h5>
                         <h4>180 CAKE</h4>
                         <h6>~$3,266</h6>
                    </div>
                    <div className="match-first4">
                         <h5>Match first 1</h5>
                         <h4>180 CAKE</h4>
                         <h6>~$3,266</h6>
                    </div>
                </div>
                <div className= { active ? "second-matches" : "second-matches-hide"}>
                    <div className="match-first5">
                        <h5>Match first 1</h5>
                        <h4>180 CAKE</h4>
                        <h6>~$3,266</h6>
                    </div>
                    <div className="match-first6">
                        <h5>Match first 1</h5>
                        <h4>180 CAKE</h4>
                        <h6>~$3,266</h6>
                    </div>
                    <div className="burn">
                        <h5>Match first 1</h5>
                        <h4>180 CAKE</h4>
                        <h6>~$3,266</h6>
                    </div>
                </div>
                <div className= {active ?"hide":"details"}>
                    <div onClick={()=>detaile()} className="hide">Hide</div>
                    <div onClick={()=>hide()} className="details">Details</div>
                    <div className="arrow">
                        <img src={arrowUp} width='10px' height='10px' color='rgb(31, 199, 212)'></img>
                    </div>

                </div>
                
            </div>
        </div>
    )
}