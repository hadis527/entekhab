import React from "react";
import { useQuery, gql } from '@apollo/client';
import ContentCard from "../../shared/contentCard";
import {
  DashboardWrapper,
  DashboardContainer,
  HeaderDashboardContainer,
  BodyDashboardContainer
} from "./styles";
import Row from "../../Kit/Row";
import { Link } from "react-router-dom";
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        status
        image
      }
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <div className="loader"></div>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <DashboardWrapper>
      <DashboardContainer >
        <HeaderDashboardContainer>
          <Row className="text-container">لیست شخصیت ها</Row>
        </HeaderDashboardContainer>
        <BodyDashboardContainer>
          {data.characters.results.map((each, index) => {
            return (
              <Link to={{pathname:'/characters/'+each.id, state: { id:each.id}}} >
              <ContentCard
                id={each.id}
                key={index}
                lg={12}
                name={each.name}
                status={each.status}
                source={each.image}
                coverWidth={200}
                coverHeight={240}
              />

          </Link>
            )
          })}
   
        </BodyDashboardContainer>
      </DashboardContainer>
    </DashboardWrapper>
  );
}
export default Characters;