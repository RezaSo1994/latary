import React from 'react'
import './style.css'
import goldticket from '../../images/ticket-l.png'
import silverticket from '../../images/ticket-r.png'

export default function ConnectWallet() {
    return (
        <div className ="connect-wallet-backgrouand">
            <div className="connect-wallet-gold-ticket">
                <img src={goldticket} width='90px' height='90px'></img>
            </div>
            <div className="text-btn">
                <h2>Connect your wallet</h2>
                <h2>to check if you've won!</h2>
                <div className="connect-btn">Connect Wallet</div>
            </div>
            <div className="connect-wallet-silver-ticket">
                <img src={silverticket} width='90px' height='90px'></img>
            </div>
        </div>
    )
}
