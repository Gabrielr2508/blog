import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from '../../styles/global';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as S from './styled';

const Layout = ({ children }) => {
  const [cssClass, setCssClass] = useState('');
  const toggleSlide = () => {
    if (cssClass) {
      setCssClass('');
    } else {
      setCssClass('slide');
    }
  }
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar
         animation={cssClass}
        />
        <MenuBar
          onMenuClick={toggleSlide}
        />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
