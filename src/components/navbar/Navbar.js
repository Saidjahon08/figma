import React from 'react'
import "./Navbar.css"

function Navbar({Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9}) {
  return (
    <div className='navbar'>
        <h1 className='navbar_h11'>Hottest Collections</h1>
        <p className='navbar_p1'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
        <div className="navbar_items">
            <div className="navbar_item">
                <div className="item_div">  
                    <img src={Img1} alt="" />
                    <h2 className='item_h21'>Moonbirds</h2>
                    <p className='item_p1'>Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.</p>
                </div>
                <div className="item_div">  
                    <img src={Img2} alt="" />
                    <h2 className='item_h21'>Clone X - X Takashi Murakami</h2>
                    <p className='item_p1'>Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.</p>
                </div>
                <div className="item_div">  
                    <img src={Img3} alt="" />
                    <h2 className='item_h21'>Mutant Ape Yacht Club</h2>
                    <p className='item_p1'>Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.</p>
                </div>
            </div>
            <div className="navbar_item">
                <div className="item_div">  
                    <img src={Img4} alt="" />
                    <h2 className='item_h21'>"MOAR" by Joan Cornella</h2>
                    <p className='item_p1'>Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.</p>
                </div>
                <div className="item_div">  
                    <img src={Img5} alt="" />
                    <h2 className='item_h21'>Doodles</h2>
                    <p className='item_p1'>Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.</p>
                </div>
                <div className="item_div">  
                    <img src={Img6} alt="" />
                    <h2 className='item_h21'>KIWAMI Genesis</h2>
                    <p className='item_p1'>Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.</p>
                </div>
            </div>
            <div className="navbar_item">
                <div className="item_div">  
                    <img src={Img7} alt="" />
                    <h2 className='item_h21'>Arcade Land</h2>
                    <p className='item_p1'>Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.</p>
                </div>
                <div className="item_div">  
                    <img src={Img8} alt="" />
                    <h2 className='item_h21'>Goons of Balatroon</h2>
                    <p className='item_p1'>Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.</p>
                </div>
                <div className="item_div">  
                    <img src={Img9} alt="" />
                    <h2 className='item_h21'>Meta Toy DragonZ</h2>
                    <p className='item_p1'>Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar