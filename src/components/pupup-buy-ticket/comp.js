import React,{useState} from 'react';
import './style.css'
import ticketImg from '../../images/ticket-r.png'

export default function PupupBuyTicket() {
    const [closePupup,setClosePupup] =useState(true)

    return (
        <div className='pupup'>
            <div className='p-box'>
                <div className='p-box-header'>
                    <h1>Buy Tickets</h1>
                    <h2 className='p-box-header-close' onClick={closePupup}>X</h2>
                </div>
                <div className='p-box-body'>
                    <div className='p-box-body-header'>
                        <h4>Buy:</h4>
                        <div className='p-box-body-header-ticket'>
                            <h3>Tickets</h3>
                            <img src={ticketImg} width='10px' height='5px'></img>
                        </div>
                    </div>
                    <div className='p-box-body-price'>
                        <input className='p-box-body-price-data'></input>
                    </div>
                    <div className='p-box-body-status'>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
