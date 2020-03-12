import React from 'react'
import './showInfo.css'

function Showinfo({index, id , name, mainUrl , imgUrl , numbers}) {

    return (
        <div className="item-wrapper">
            <div className="make_radius">
                <img className ="item-wrapper-img" src={imgUrl} alt={"image"+index} title={"instagram cover image"+index} />
            </div>
            <a className="item-id" href={mainUrl} target="_blank" rel='noopener noreferrer'><span>{id}</span></a>
            <a class="item-name" style={{fontWeight: "400", color: "hotpink", fontSize: '24px'}} href={mainUrl} target="_blank" rel='noopener noreferrer'>{name}</a>
            <h3>{`${numbers} Followers`}</h3>
        </div>
    )
}

export default Showinfo