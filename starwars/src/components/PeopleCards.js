
import React from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
    font-family: sans-serif;
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
`
const OpaqueDiv = styled.div`
    background-color: white;
    opacity: .5;
    width: 50%;
    margin: 0 auto;
    border-radius: 10px;
`

const PeopleCards = (props) => {
   //let something = props.data;
   // props.data && console.log("props " + props.data)
   // something && something.map(e => {
  console.log(props);
   let e = props.data
        return (
            <WrapperDiv>
            <OpaqueDiv>
                
                    <h1>{e.name}</h1>
                    <h3>STATS:</h3>
                    <div>
                        <li>Height: {e.height}</li>
                        <li>Mass: {e.mass}</li>
                        <li>Hair: {e.hair_color}</li>
                        <li>Skin: {e.skin_color}</li>
                        <li>Eyes: {e.eye_color}</li>
                        <li>Year of Birth: {e.birth_year}</li>
                        <li>Gender: {e.gender}</li>
                    </div>
            </OpaqueDiv>
            </WrapperDiv>
        )
   //  })
}

export default PeopleCards
