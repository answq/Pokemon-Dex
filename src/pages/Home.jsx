import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StBox = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: medium;
  background-color: #d62206;
  border: none;
  border-radius: 5px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const navigate = useNavigate();

  return <StBox onClick={() => navigate("/Dex")}>포켓몬 도감 시작하기</StBox>;
};

export default Home;
