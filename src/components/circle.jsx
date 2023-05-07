import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.CircleColor ? props.CircleColor : "green")};
  display: inline-block;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BoxText = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const Circle = (props) => {
  return (
    <>
      <row><CircleEach CircleColor={props.CircleColor}></CircleEach></row>
    </>
  );
};

export default Circle;
