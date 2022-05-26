import { Container } from './styles';

type NewsProps = {
  title: string;
  description: string;
};

export function News({ description, title }: NewsProps): JSX.Element {
  return (
    <Container>
      <strong>{description}</strong>
      <span>{title}</span>
      <span>52 mil tweets</span>
    </Container>
  );
}
