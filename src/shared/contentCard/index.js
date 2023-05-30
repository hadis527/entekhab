import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer} from "./styles";
import Row from "../../Kit/Row";


const ContentCard = (props) => {
    const { name, status, source} = props;
    return (
        <ContentCardWrapper>
            <ContentCardContainer>
            <CoverContainer
                coverHeight={250}
                source={source}
                coverWidth={100}
            />
            <ContentTitle>{name}</ContentTitle>
            <Row>
                <span className="rate-container">{status}</span>
            </Row>
            </ContentCardContainer>
        </ContentCardWrapper>
    )
}
export default ContentCard