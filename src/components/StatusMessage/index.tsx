import { GridLoader } from 'react-spinners';
import { CommonInfoContainer, Error, Message } from './styles';

interface StatusMessageProps {
  loading?: boolean;
  error: string | null;
  message?: string;
}

const StatusMessage = ({ loading, error, message }: StatusMessageProps) => {
  if (loading) {
    return (
      <CommonInfoContainer>
        <GridLoader color="#9cb5e6" />
      </CommonInfoContainer>
    );
  }

  if (error) {
    return (
      <CommonInfoContainer>
        <Error>Error: {error}</Error>
      </CommonInfoContainer>
    );
  }

  if (message) {
    return (
      <CommonInfoContainer>
        <Message>{message}</Message>
      </CommonInfoContainer>
    );
  }

  return null;
};

export default StatusMessage;
