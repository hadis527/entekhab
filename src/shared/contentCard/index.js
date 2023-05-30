import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer} from "./styles";
import Row from "../../Kit/Row";
import StatementHandler from "../../utils/methods/StatementHandler"
import {  Link  } from "react-router-dom";

const ContentCard = (props) => {
    const { name, status, source, id } = props;
    return (
        <ContentCardWrapper>
            <ContentCardContainer>
            <CoverContainer
                coverHeight={250}
                source={source}
                coverWidth={100}
            />
            <ContentTitle>{StatementHandler.StatementSplitter(name,25)}</ContentTitle>
            <Row>
                <span className="rate-container">{status}</span>
            </Row>
            </ContentCardContainer>
        </ContentCardWrapper>
    )
}
export default ContentCard