import React, { useState } from 'react'
import './style.css'

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
                <div onClick ={()=> showYourhistory()} className="all-history-btn">All History</div>
                <div onClick ={()=> hideHideHistory()} className="your-history-btn">Your History</div>
            </div>
            <div className={active ? "your-history-show":"your-history-hide"}>
                <div className="box-rounds"><h2>Rounds</h2></div>
                <h2>Connect your wallet to check your history</h2>
                <div className="connect-wallet">Connect Wallet</div>
                <div className="rounds-divider"></div>
                <h5>Only showing data for Lottery V2</h5>

            </div>

            <div className={ !active ? "all-history-show":"all-history-hide"}>

            </div>

        </div>
    )
}
