import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/mock";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f6d083;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PokemonImage = styled.img`
  width: 120px;
`;
const PokemonName = styled.div`
  color: #f53610;
  font-weight: bold;
  font-size: large;
  margin-bottom: 2rem;
`;
const PokemonTypes = styled.div`
  font-size: small;
  margin-bottom: 2rem;
`;

const PokemonDescription = styled.div`
  font-size: small;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  padding: 0.5rem;
  font-size: small;
  margin-top: 2rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #434141;
  }
`;
const PokemonDetail = () => {
  //pokemon id를 찾고 문자가 아닌 Number로 변환
  const { id } = useParams();

  const paramsId = Number(id);

  console.log(id);

  const detailData = MOCK_DATA.find((pokemon) => pokemon.id === paramsId);

  const navigate = useNavigate();

  if (!detailData) {
    return (
      <div>
        <h1>포켓몬 정보를 찾을 수 없습니다.</h1>
      </div>
    );
  }
  return (
    <DetailContainer>
      <PokemonImage src={detailData.img_url} />
      <PokemonName>{detailData.korean_name} </PokemonName>
      <PokemonTypes>{detailData.types}</PokemonTypes>
      <PokemonDescription>{detailData.description}</PokemonDescription>

      <BackButton onClick={() => navigate("/dex")}>뒤로가기</BackButton>
    </DetailContainer>
  );
};

export default PokemonDetail;
