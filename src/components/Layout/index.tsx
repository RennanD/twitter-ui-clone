import { Main } from '../Main';
import { MenuBar } from '../MenuBar';
import { SideBar } from '../SideBar';
import { Container, Wrapper } from './styles';

export function Layout(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}
