import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER_BY_ID = gql`
query GetCharacter($id:ID!) {
  character(id:$id) {
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
const Character = (props) => {
   const { id } = props.match.params;
   const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
      variables: { id },
   });

   if (loading) return <div className="loader"></div>;
   if (error) return <p>Error : {error.message}</p>;
   return <div className="dynamic-id-component">The user is {data?.Character?.name}</div>;
};
export default Character;