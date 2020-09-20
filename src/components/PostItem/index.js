import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import getThemeColors from '../../utils/getThemeColors';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink
    cover
    direction="right"
    bg={getThemeColors()}
    duration={0.6}
    to={slug}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date}{timeToRead ? ` • ${timeToRead} min de leitura` : ''}</S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem;
