import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StBox = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: #d62206;
  margin: 20px;
`;

const Home = () => {
  const navigate = useNavigate();

  return <StBox onClick={() => navigate("/Dex")}>포켓몬 도감 시작하기</StBox>;
};

export default Home;
