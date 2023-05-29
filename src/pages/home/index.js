import React from "react";
import { useQuery, gql } from '@apollo/client';
import ContentCard from "../../shared/contentCard"
import {
  DashboardWrapper,
  DashboardContainer,
  HeaderDashboardContainer,
  BodyDashboardContainer
} from "./styles";
import Row from "../../Kit/Row";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Character from "../character";
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
const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id : Integer) {
    character(id:$id) {
     id
     name
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
          <Row className="text-container">چیارو ببینه؟</Row>
        </HeaderDashboardContainer>
        <BodyDashboardContainer>
          <Switch>
          {data.characters.results.map((each, index) => {
            return (
              <Link to={{pathname:'characters/' + each.id, state: { id:each.id}}} >
              <ContentCard
                // onClick={() => {useQuery(GET_CHARACTER_BY_ID, {
                //   variables: { id :each.id},
                // });}}
                key={index}
                lg={12}
                name={each.name}
                status={each.status}
                source={each.image}
              />
               </Link>
            )
          })}
           <Route path="/characters/:id" component={Character} />
        </Switch>
        </BodyDashboardContainer>
      </DashboardContainer>
    </DashboardWrapper>
  );
}
export default Characters;