import React from 'react'

const Stats = (props) => {

    return (
        <div>
           <li>Height: {props.data.height}</li>
           <li>Mass: {props.data.mass}</li>
           <li>Hair: {props.data.hair_color}</li>
           <li>Skin: {props.data.skin_color}</li>
           <li>Eyes: {props.data.eye_color}</li>
           <li>Year of Birth: {props.data.birth_year}</li>
           <li>Gender: {props.data.gender}</li>
        </div>
    )
}

export default Stats