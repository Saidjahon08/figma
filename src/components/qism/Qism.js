import React from 'react'
import "./Qism.css"
function Main({Img10, Img11, Img12, Img13}) {
  return (
    <div className='qism'>
        <div className="qism_element">
            <h1 className='qism_h11'>We Provide</h1>
            <p className='qism_p1'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.  </p>
            <div className="qism_items">
                <div className="qism_item">
                    <img src={Img10} alt="" />   
                    <h3 className='qism_h3'>Host your NFTs</h3>
                    <p className='qism_p'>Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices</p>
                </div>
                <div className="qism_item">
                    <img src={Img11} alt="" />   
                    <h3 className='qism_h3'>See your sales</h3>
                    <p className='qism_p'>Integer ante non nunc, eget est justo vel semper nunc. Lacus </p>
                </div>
                <div className="qism_item">
                    <img src={Img13} alt="" />   
                    <h3 className='qism_h3'>Secure wallet</h3>
                    <p className='qism_p'>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
                </div>
                <div className="qism_item">
                    <img src={Img12} alt="" />   
                    <h3 className='qism_h3'>No scam</h3>
                    <p className='qism_p'>Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main