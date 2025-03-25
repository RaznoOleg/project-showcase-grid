import { useState } from 'react';
import {
  Button,
  GridContainer,
  PageInfo,
  Pagination,
  ProjectGridWrapper,
} from './styles';
import StatusMessage from '../StatusMessage';
import ProjectCard from '../ProjectCard';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types/project.type';

const PAGE_SIZE = 30;

const ProjectGrid = () => {
  const [page, setPage] = useState(0);
  const { data, loading, error } = useProjects(page, PAGE_SIZE);

  if (loading || error || !data || data.projects.length === 0) {
    return (
      <StatusMessage
        loading={loading}
        error={error}
        message={'No projects found'}
      />
    );
  }

  return (
    <GridContainer>
      <ProjectGridWrapper>
        {data.projects.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ProjectGridWrapper>
      <Pagination>
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </Button>
        <PageInfo>
          Page <b>{data.currentPage}</b> of {data.totalPages}
        </PageInfo>
        <Button
          onClick={() => setPage((prev) => Math.min(prev + 1, data.totalPages))}
          disabled={page === data.totalPages}
        >
          Next
        </Button>
      </Pagination>
    </GridContainer>
  );
};

export default ProjectGrid;
