import React from 'react'
import './style.css'
import starsmall from '../../images/star-small.png'
import bigstar from '../../images/star-big.png'
import goldticket from '../../images/ticket-l.png'
import silverticket from '../../images/ticket-r.png'
import threestars from '../../images/three-stars.png'
import bg2 from '../../images/bg2.png'
import bgStar from '../../images/bg1.svg'





export default function BuyTickets() {
    return (
        <div className='root-background'>
            <div className="background">
            <div className="box-container">
            <div className="background-images">
                <div className="small-star">
                    <img src={starsmall} width='50px' height='50px'></img>
                </div>
                <div className="big-star">
                    <img src={bigstar} width='100px' height='100px'></img>
                </div>
                <div className="gold-ticket">
                    <img src={goldticket} width='90px' height='90px'></img>
                </div>

            </div>
            <div className="background-components">
                <h3>The PancakeSwap Lottery</h3>
                <h1>$178.513</h1>
                <h3>in Prizes!</h3>
                <div className="buy-tickets">
                    <div className="click-btn">
                        Buy Tickets
                    </div>
                </div>
            </div>
            <div className="background-images">
                <div className="threestars">
                    <img src={threestars} width='100px' height='100px'></img>
                </div>
                <div className="silverticket">
                    <img src={silverticket} width='90px' height='90px'></img>
                </div>
            </div>
 
            <img src={bgStar} width='1400px' height='1400px' className="bg-star"></img>
            </div>
            </div>
            <img className="bg2" src={bg2}  ></img>
        </div>
    )
}
