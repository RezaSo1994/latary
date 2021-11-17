import React, { useState } from 'react'
import './style.css'
import arrowUp from '../../images/arrow-up.png'


export default function FinishedRounds() {
    const [active,setActive]=useState(true)

    const showYourhistory = ()=>{
        setActive(true);
    } 
    const hideHideHistory = ()=>{
        setActive(false);
    }
    return (
        <div className="finished-rounds-background">
            <h2>Finished Rounds</h2>
            <div className="choose-btn">
                <div onClick ={()=> showYourhistory()} className={active ? "all-history-btn":"all-history-btn-hide"}>All History</div>
                <div onClick ={()=> hideHideHistory()} className={ !active ? "your-history-btn": "your-history-btn-hide"}>Your History</div>
            </div>
            <div className={!active ? "your-history-show":"your-history-hide"}>
                <div className="box-rounds"><h2>Rounds</h2></div>
                <h2>Connect your wallet to check your history</h2>
                <div className="connect-wallet">Connect Wallet</div>
                <div className="rounds-divider"></div>
                <h5>Only showing data for Lottery V2</h5>

            </div>

            <div className={ active ? "all-history-show":"all-history-hide"}>
                <div className="round-box">
                    <div className="number">
                        <div className="round-text">
                            <div className="text">Round</div>
                            <div className="box-number"><h5>275</h5></div>
                        </div>
                        <div className="arrows"></div>
                    </div>
                    <div className="date-time">Drawn Nov 17, 2021, 3:30 PM</div>
                    <div className="rounds-box-divider"></div>
                </div>
                <div className="text-cyrcle">
                    <div className="winning-number-text">Winning Number</div>
                    <div className="winning-number-cyrcles">
                        <div className="winning-number-cyrcle1">8</div>
                        <div className="winning-number-cyrcle2">7</div>
                        <div className="winning-number-cyrcle3">0</div>
                        <div className="winning-number-cyrcle4">4</div>
                        <div className="winning-number-cyrcle5">9</div>
                        <div className="winning-number-cyrcle6">5</div>
                    </div>
                </div>
                <div className="bottom-divider"></div>
                <div className= {active ?"hide":"details"}>
                    <div className="details">Details</div>
                    <div className="arrow">
                        <img src={arrowUp} width='10px' height='10px' color='rgb(31, 199, 212)'></img>
                    </div>

                </div>
                {/* <div className="all-history-prize">
                    <p className="all-history-prize-pot">Prize Pot</p>
                    <p className="all-history-prize-prize">~$112,982</p>
                    <p className="all-history-prize-cake">6,257 CAKE</p>
                </div> */}
            </div>
        </div>
    )
}
