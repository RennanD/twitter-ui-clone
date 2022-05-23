import { Main } from '../Main';
import { Container, Wrapper } from './styles';

export function Layout(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
}
