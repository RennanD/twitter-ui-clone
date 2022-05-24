import { Feed } from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
  EditButton,
  CalendarIcon,
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
            <CalendarIcon />
            Ingressou em agosto de 2021
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
