import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer} from "./styles";
import Row from "../../Kit/Row";


const ContentCard = (props) => {
    const { name, coverWidth, source,coverHeight} = props;
    return (
        <ContentCardWrapper coverWidth={coverWidth}>
            <ContentCardContainer>
            <CoverContainer
                coverHeight={coverHeight}
                source={source}
            />
            <ContentTitle>{name}</ContentTitle>
            </ContentCardContainer>
        </ContentCardWrapper>
    )
}
export default ContentCard