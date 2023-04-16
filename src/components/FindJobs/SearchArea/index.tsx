import AntDesign from '@expo/vector-icons/AntDesign';
import Evil from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  Container,
  FilterButton,
  FilterContainer,
  Input,
  InputContainer,
  InputFilterContainer,
  SearchContainer,
} from './styles';

export function SearchArea() {
  return (
    <Container>
      <SearchContainer>
        <InputContainer>
          <Ionicons name="search-outline" size={24} color="#FFF" />
          <Input placeholder="Search for company or roles..." />
        </InputContainer>

        <InputFilterContainer>
          <AntDesign name="filter" size={24} color="#FFF" />
        </InputFilterContainer>
      </SearchContainer>

      <FilterContainer>
        <FilterButton
          LeftIcon={<Evil name="clock" size={20} color="#FFF" />}
          title="FullTime"
        />
        <FilterButton
          LeftIcon={<Evil name="clock" size={20} color="#FFF" />}
          title="PartTime"
        />
        <FilterButton
          LeftIcon={<Evil name="clock" size={20} color="#FFF" />}
          title="Contractor"
        />
      </FilterContainer>
    </Container>
  );
}
