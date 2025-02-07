import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5%;
  box-shadow: 0 2px 8px;
  background-color: yellow;
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
