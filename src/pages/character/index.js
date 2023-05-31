import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ContentCard from "../../shared/contentCard";
import { CharacterWrapper, CharacterContainer } from "./styles";
import Col from "../../Kit/Column";
import Row from "../../Kit/Row";
import moment from "moment-jalali";

const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      type
      species
      created
    }
  }
`;
const Character = () => {
  const params = useParams();
  const { id } = params;
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <div className="loader"></div>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <CharacterWrapper>
      <CharacterContainer>
        <ContentCard
          id={data.character.id}
          name={data.character.name}
          status={data.character.status}
          source={data.character.image}
          coverWidth={400}
          coverHeight={400}
        />
        <Col>
          <Row className="text-container">name : {data.character.name}</Row>
          <Row className="text-container">
            created : {moment(data.character.created).format("jYYYY/jMM/jDD")}
          </Row>
          <Row className="text-container">species : {data.character.species}</Row>
          <Row className="text-container">status : {data.character.status}</Row>
          <Row className="text-container">
            type : {data.character.type !== "" ? data.character.type : "none"}
          </Row>
        </Col>
      </CharacterContainer>
    </CharacterWrapper>
  );
};
export default Character;
