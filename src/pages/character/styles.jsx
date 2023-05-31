import styled from "styled-components";
import Row from "../../Kit/Row";

export const CharacterWrapper = styled(Row)`
    background:#000;
    height:100vh;

`;
export const CharacterContainer = styled(Row)`
    display: flex;
    justify-content: space-around;
    width:90vw;
    background-color: ${(props) => props.theme.primary};
    .text-container{
        padding:10px 0;
    }
`;




