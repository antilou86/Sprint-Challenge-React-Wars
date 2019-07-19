import React from 'react'
import styled from 'styled-components'

const DivHolder = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const WrapperDiv = styled.div`
    padding: 5px 0;
    font-family: sans-serif;
    border-radius: 10px;
    width: 45%;
    margin: 20px auto;
`
const OpaqueDiv = styled.div`
    background-color: white;
    opacity: .5;
    width: 45%;
    margin: 20px auto;
    border-radius: 10px;
`
const ListDiv = styled.p`
    text-align: left;
    opacity: 1;
`



const PeopleCards = (props) => {
    
    //props.data && console.log(props);
    
    return (
        <>
        <DivHolder>
        {props.data && props.data.map(item => 
                <>
                <OpaqueDiv>
                <WrapperDiv> 
                <h1>{item.name}</h1>
                <h3>STATS:</h3>        
                   <ListDiv>Height: {item.height} <br/></ListDiv>
                   <ListDiv>Mass: {item.mass}<br/></ListDiv>
                   <ListDiv>Hair: {item.hair_color}<br/></ListDiv>
                   <ListDiv>Skin: {item.skin_color}<br/></ListDiv>
                   <ListDiv>Eyes: {item.eye_color}<br/></ListDiv>
                   <ListDiv>Year of Birth: {item.birth_year}<br/></ListDiv>
                   <ListDiv>Gender: {item.gender}<br/></ListDiv>        
                </WrapperDiv>
                </OpaqueDiv>
                </> 
        )} </DivHolder>
        </> 
   
    )
}

export default PeopleCards
