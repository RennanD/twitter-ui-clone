import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  MailIcon,
  FavoriteIcon,
  ProfileIcon,
  TweetButton,
  BottomSide,
  Avatar,
  ProfileData,
  ExitButton,
} from './styles';

export function MenuBar(): JSX.Element {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton selected>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <TweetButton>
          <span>Tweetar</span>
        </TweetButton>
      </TopSide>

      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Rennan Oliveira</strong>
          <span>@rennand</span>
        </ProfileData>
        <ExitButton />
      </BottomSide>
    </Container>
  );
}
