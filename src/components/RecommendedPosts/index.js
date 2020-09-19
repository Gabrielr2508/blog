import React from 'react';
import propTypes from 'prop-types';

import * as S from './styled';
import getThemeColors from '../../utils/getThemeColors';

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper style={{ justifyContent: !next
    ? 'flex-start'
    : !previous
      ? 'flex-end'
      : 'center'
  }}>
    { previous && (
      <S.RecommendedLink
        to={ previous.fields.slug }
        className="previous"
        cover
        direction="left"
        bg={getThemeColors()}
        duration={0.6}
      >
        { previous.frontmatter.title }
      </S.RecommendedLink>
    ) }
    { next && (
      <S.RecommendedLink
        to={ next.fields.slug }
        className="next"
        cover
        direction="right"
        bg={getThemeColors()}
        duration={0.6}
      >
        { next.frontmatter.title }
      </S.RecommendedLink>
    ) }
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
