import { GREY, LIGHT_GREY, ORANGE } from '@/constants/color';
import {
  LARGE_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '@/constants/fontSizes';
import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  border-radius: 20px;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  font-size: ${LARGE_FONT_SIZE};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contetn: between;
  padding: 0px 15px;
`;

export const TitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  min-height: 85px;

  @media (max-width: 1024px) {
    min-height: 25px;
  }

  @media (max-width: 925px) {
    min-height: 85px;
  }

  @media (max-width: 675px) {
    min-height: 25px;
  }
`;

export const AdressContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${MEDIUM_FONT_SIZE};

  svg {
    stroke-width: 1.5;
    margin-right: 5px;
  }
`;

export const Title = styled.p``;

export const Price = styled.p`
  color: ${ORANGE};
`;

export const Details = styled.p`
  color: ${LIGHT_GREY};
`;
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${SMALL_FONT_SIZE};
  color: ${GREY};

  svg {
    margin-right: 5px;
    color: ${GREY};
  }
`;
