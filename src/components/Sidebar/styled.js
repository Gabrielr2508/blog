import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarContent = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  position: fixed;
  left: -20rem;
  transition: margin .5s;


  /* ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}; */
  .slide & {
    margin-left: calc(20rem + var(--menuBarWidth)) !important;
  }
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
    opacity: 0.2;
    margin-left: 20rem !important;
    pointer-events: auto;
  }
`;

export const SidebarWrapper = styled.section`
  display: flex;
`;