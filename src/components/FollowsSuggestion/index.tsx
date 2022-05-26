import { Container, Avatar, Info, FollowButton } from './styles';

type FollowsSuggestion = {
  name: string;
  nickname: string;
};

export function FollowsSuggestion({
  name,
  nickname,
}: FollowsSuggestion): JSX.Element {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outline>Seguir</FollowButton>
    </Container>
  );
}
