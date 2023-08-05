import React from 'react'
import "./Main.css"
function Main({Img9, Img8, Img7, Img6}) {
  return (
    <div className='main'>
        <div className="main_item">
            <h1 className='main_h11'>Our Team</h1>
            <p className='main_p1'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            <div className="img_items">
                <div className="img_item">
                    <img src={Img9} alt="" />   
                    <h3 className='img_h3'>Guy Hawkins</h3>
                    <p className='img_p'>CEO</p>
                </div>
                <div className="img_item">
                    <img src={Img8} alt="" />   
                    <h3 className='img_h3'>Guy Hawkins</h3>
                    <p className='img_p'>CEO</p>
                </div>
                <div className="img_item">
                    <img src={Img7} alt="" />   
                    <h3 className='img_h3'>Guy Hawkins</h3>
                    <p className='img_p'>CEO</p>
                </div>
                <div className="img_item">
                    <img src={Img6} alt="" />   
                    <h3 className='img_h3'>Guy Hawkins</h3>
                    <p className='img_p'>CEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main