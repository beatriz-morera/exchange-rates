import { LoadingContainer, Spinner } from './Loading.styled';

interface LoadingProps{
  height?: string;
  color?: string
}

const Loading: React.FC<LoadingProps> = ({ height, color }) => (
  <LoadingContainer height={height}>
    <Spinner color={color} />
  </LoadingContainer>

);

export default Loading;
