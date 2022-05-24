import { ProfilePage } from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BellIcon,
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Rennan Oliveira</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon active />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}
