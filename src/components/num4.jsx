import React from "react";
import styled from "styled-components";


const Boxeach = styled.div`
  border: solid 3px white;
  margin: 15px;
  border-radius: 30px;
  display: inline-block;
  background-color: #c8c8c8;
  width: 300px;
  height: 390px;
`;



const Img= styled.img`
    content: url(${(props)=> props.url});
    margin-top :10px;
    width: 180px;
    height: 180px;
    border-radius: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  height: auto;
  text-align: left;
`;

const Text = styled.p`
  font-size: 15px;
  padding-left: 20px;
  height: auto;
  text-align: center;
`;


const Button = styled.button`
text-align: center;
margin-left: 10px;
margin-right: 10px;
border-radius: 30px;
padding: 10px;
font-size: 15px;
color :white;
background:  ${(props)=>props.buttonColor};

`;



const Box4 = (props) => {
  return (
    <>
    <Boxeach>
        <Img url={props.url}></Img>
        <Title >{props.Title}</Title>
        <Text> {props.Text}</Text>
        <Button buttonColor={props.buttonColor}>Action</Button>
    </Boxeach>
    </>
  );
};

export default Box4;
