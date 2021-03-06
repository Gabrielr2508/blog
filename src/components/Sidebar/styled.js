import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarContent = styled.aside`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--background);
  height: 100vh;
  padding: 5rem 2rem 3rem 2rem;
  width: 20rem;
  position: fixed;
  left: -20rem;
  transition: background 0.5s, margin .5s;

  .slide & {
    margin-left: calc(20rem + var(--menuBarWidth)) !important;
  }

  ${media.lessThan('large')`
    left: -22rem;

    .slide & {
      margin-left: 22rem !important;
    }
  `};
`;

export const SidebarOverlay = styled.aside`
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  left: var(--menuBarWidth);
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;

  .slide & {
    opacity: 0.4;
    margin-left: 20rem !important;
    pointer-events: auto;
  }

  ${media.lessThan('large')`
    .slide & {
      margin-left: 16rem !important;
    }
  `};
`;

export const SidebarWrapper = styled.section`
  display: flex;
`;
