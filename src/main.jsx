import React from "react";
import Box4 from "./components/num4";
import Box from "./components/box";
import Circle from "./components/circle";

const Main = (props) => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" text="1"/>
      <Box boxColor="blue" text="2"/>
      <Box boxColor="green" text="3"/>
      <Box boxColor="pink" text="4"/>
      <Circle CircleColor="pink"/>
      <Circle CircleColor="red"/>
      <Circle CircleColor="blue"/>
      <Circle CircleColor="green"/>
      <Circle CircleColor="grey"/>
      <Circle CircleColor="orange"/>
      <Circle CircleColor="black"/>
      <Box4 url=".\사진1.jpg" Title="사진1" Text="멍멍" buttonColor="red" ></Box4>
    <Box4 url=".\사진2.jpg" Title="사진2" Text="멍멍" buttonColor="pink"></Box4>
    <Box4 url=".\사진3.jpg" Title="사진3" Text="멍멍" buttonColor="purple"></Box4>
    <Box4 url=".\사진4.jpg" Title="사진4" Text="멍멍" buttonColor="blue"></Box4>
    <Box4 url=".\고양이.jpg" Title="사진5" Text="냐옹" buttonColor="skyblue"></Box4>
    </>
  );
};



export default Main;
