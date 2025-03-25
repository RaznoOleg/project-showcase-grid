import { DARK_BLUE, LIGHT_BLUE } from '@/constants/color';
import { MEDIUM_FONT_SIZE } from '@/constants/fontSizes';
import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: ${MEDIUM_FONT_SIZE};
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${LIGHT_BLUE};
  font-size: ${MEDIUM_FONT_SIZE};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 8px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${DARK_BLUE};
  }
`;

export const PageInfo = styled.span`
  padding: 8px 16px;
`;
