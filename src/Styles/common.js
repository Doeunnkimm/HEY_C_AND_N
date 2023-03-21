import { css } from 'styled-components';

export const FlexCenterCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAlignCSS = css`
  display: flex;
  align-items: center;
`;

export const FlexColumnCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GridCenter = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const GridColumnFive = css`
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
`;

export const GridColumnThree = css`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
`;

export const GridColumnOne = css`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
`;

export const ShadowCSS = css`
  box-shadow: 2px 2px 2px rgb(220, 220, 220);
`;

export const HoverCSS = css`
  :hover {
    cursor: pointer;
  }
`;
