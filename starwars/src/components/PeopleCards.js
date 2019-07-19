
import React from 'react'
import Stats from './Stats'

const WrapperDiv = styled.div`
    background-color: white;
    font-family: sans-serif;
    border-radius: 10px;
`
const {data} = props;

const PeopleCards = (props) => {
  
    

  return (
  <WrapperDiv>
    <h1>{data.name}</h1>
    <h3>STATS:</h3>
    <Stats data={data}/>
  </WrapperDiv>
  )
  }

export default PeopleCards
