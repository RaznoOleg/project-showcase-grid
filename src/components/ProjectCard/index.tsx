import { Bath, Bed, MapPin, SquareDashed } from 'lucide-react';
import {
  ProjectCardContainer,
  Price,
  Title,
  DetailsContainer,
  DetailItem,
  InfoContainer,
  TitlePriceContainer,
  AdressContainer,
} from './styles';
import { Project } from '@/types/project.type';
import ImageSlider from '../ImageSlider';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { generalInfo, images } = project;

  return (
    <ProjectCardContainer>
      <ImageSlider images={images} altText={generalInfo.name} />
      <InfoContainer>
        <TitlePriceContainer>
          <Title>{generalInfo.name}</Title>
          <Price>${generalInfo.price.toLocaleString()}</Price>
        </TitlePriceContainer>
        <AdressContainer>
          <MapPin />
          {generalInfo.province}
        </AdressContainer>
        <DetailsContainer>
          <DetailItem>
            <Bed /> {generalInfo.rooms} Beds
          </DetailItem>
          <DetailItem>
            <Bath /> {generalInfo.bathrooms} Baths
          </DetailItem>
          <DetailItem>
            <SquareDashed />
            {generalInfo.size} sqft
          </DetailItem>
        </DetailsContainer>
      </InfoContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
