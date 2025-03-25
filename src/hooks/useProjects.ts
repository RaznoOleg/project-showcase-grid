import { ApiResponse } from '@/types/apiResponse.type';
import { useEffect, useState } from 'react';

export const useProjects = (page: number, size: number) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}?accessKey=${process.env.REACT_APP_ACCESS_KEY}&secretKey=${process.env.REACT_APP_SECRET_KEY}&isPagination=true&size=${size}&page=${page}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
          },
        );

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const result: ApiResponse = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page, size]);

  return { data, loading, error };
};
