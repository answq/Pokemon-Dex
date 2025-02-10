import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80vw;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5%;
  box-shadow: 0 2px 8px;
  background-color: #62e4ce;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
