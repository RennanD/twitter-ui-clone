import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import { FollowsSuggestion } from '../FollowsSuggestion';
import { List } from '../List';
import { News } from '../News';

export function SideBar(): JSX.Element {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez Você curta"
            elements={[
              <FollowsSuggestion name="Diego Fernandes" nickname="@diego3g" />,
              <FollowsSuggestion name="Mayk Brito" nickname="@maykao" />,
              <FollowsSuggestion
                name="Rodrigo Gonçalvez"
                nickname="@rodrigorgtic"
              />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News
                title="Assuntos do momento no Brasil"
                description="Clone do Twitter"
              />,

              <News
                title="Assuntos do momento no Brasil"
                description="Clone do Twitter"
              />,

              <News
                title="Assuntos do momento no Brasil"
                description="Clone do Twitter"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
