import React from 'react'
import "../App.css"

function people(props) {
    return (
        <div className='item'>
                <img src={props.image} alt="kuva" />
                <p>{props.firstName}{" "}{props.lastName}</p>
                <p>{props.title}</p>
                <p>{props.email}</p>
        </div>




    )
}

export default people