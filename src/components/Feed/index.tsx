import { Tweet } from '../Tweet';
import { Container, Tab, Tweets } from './styles';

export function Feed(): JSX.Element {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}
