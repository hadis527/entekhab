import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer} from "./styles";
import PropTypes from 'prop-types';

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
ContentCard.propTypes = {
    name: PropTypes.string,
    coverWidth: PropTypes.number,
    coverHeight:PropTypes.number,
    source: PropTypes.string,
};
export default ContentCard