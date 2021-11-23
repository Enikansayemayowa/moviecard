import React from "react";
import styled from "styled-components";
import data from "./data.json"
import {Link} from "react-router-dom"

function Homepage() {
  return (
    <Container>
      <Wrapper>
        {data?.map((props, i) =>(
            <Div to={`/details/${props.myId}`}>
                <Card src={props.cardImg} />
            {/* <Dive /> */}
            {/* <Span>{props.title} </Span> */}
        </Div>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Homepage;

// const Container = styled.div``;
const Div = styled(Link)``;
const Span = styled.div`
height:500px;
width:400px;
background-color:black;
border-radius:8px;
display:flex;
justify-content:center;
align-items:flex-end;
position:absolute;
// right:0;
color:white;
margin-bottom:-30px;
opacity:0;
font-size:40px;
font-weight:bold;
text-transform:uppercase;

:hover{
    opacity:1;
}
`;
const Dive = styled.img`

height:500px;
width:400px;
background-color:black;
border-radius:8px;
flex-wrap:wrap;
display:flex;
justify-content:center;
align-items:flex-end;
position:absolute;
// right:0;
// left:0;
color:white;
margin-bottom:-30px;
opacity:0.2;
margin:30px;



`;
const Card = styled.img`
  height: 500px;
  width: 400px;
  background-color: white;
  margin:10px;
  border-radius: 8px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  position: relative;
  object-fit: cover;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  flex-wrap: wrap;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: teal;
`;
