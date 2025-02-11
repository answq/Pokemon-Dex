import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80%;
  height: 50%;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 8px;
  background-color: #fcedd8;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
