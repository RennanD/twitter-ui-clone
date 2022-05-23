import { Container, Header, BackIcon, ProfileInfo } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />

          <ProfileInfo>
            <strong>Rennan Oliveira</strong>
            <span>612 Tweets</span>
          </ProfileInfo>
        </button>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
}
