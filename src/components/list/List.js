import React from 'react'
import "./List.css"
function List({ user }) {
    return (
        <div className="list_item">
                        <div className='img1'>
                            <img src={user.img} alt="" />
                        </div>
                        <div className='h2'>{user.h2} </div>
                        <div className="login">{user.login} </div>
                        <div className="lorem">{user.lorem} </div>
        </div>
    )
}

export default List