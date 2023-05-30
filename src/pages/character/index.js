import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ContentCard from "../../shared/contentCard";
import { CharacterWrapper } from "./styles";
import Col from "../../Kit/Column";
import Row from "../../Kit/Row";

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
      <ContentCard
        id={data.character.id}
        name={data.character.name}
        status={data.character.status}
        source={data.character.image}
        coverWidth={400}
        coverHeight={400}
      />
      <Col>
        <Row>name : {data.character.name}</Row>
        <Row>created : {data.character.created}</Row>
        <Row>species : {data.character.species}</Row>
        <Row>status : {data.character.status}</Row>
        <Row>type : {data.character.type}</Row>
      </Col>
    </CharacterWrapper>
  );
};
export default Character;
