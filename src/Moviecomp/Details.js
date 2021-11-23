import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data[id]);
  });
  return (
    <Container>
      <Background src={myData.backgroundImg} />
      <Wrapper>
        <Card>Title: {myData.title}</Card>
        <Dive src={myData.titleImg} />
        <Span>SUBTITLE: {myData.subTitle}</Span>
        <Span>DESCRIPTION: {myData.description}</Span>
      </Wrapper>
    </Container>
  );
}

export default Details;

// const Container = styled.div``;
// const Wrapper = styled.div``;
const Background = styled.img`
// height:800px;
width:100%;
min-height:100vh
display:flex;
position:relative;
object-fit:cover;
`;
const Span = styled.div`
  font-size: 25px;
  margin-top:20px;
`;
const Dive = styled.img`
  height: 300px;
  width: 500px;
  // background-color:red;
  border-radius: 10px;
  outline: 0px;
  border: 5px solid gray;
`;
const Card = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  // height: 100%;
  min-height: 100vh;
  width: 1200px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  // align-items:center;
  top: 0px;
  color: white;
  //   padding-top: 30px;
  margin-left:50px;
`;
const Container = styled.div`
  height: 700px;
  width: 100%;
  // min-height: 100vh;
  // background-color: teal;
`;
