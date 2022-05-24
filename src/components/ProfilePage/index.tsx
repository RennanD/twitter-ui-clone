import { Feed } from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

export function ProfilePage(): JSX.Element {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outline>Editar Perfil</EditButton>

        <h1>Rennan Oliveira</h1>
        <h2>@rennanoliveira</h2>

        <p>
          Developer at{' '}
          <a href="https://objetivoteresina.com.br/">@Objetivo - PI</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Teresina - PI
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de outubro de 1996
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
