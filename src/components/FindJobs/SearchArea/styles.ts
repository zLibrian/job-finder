import styled from 'styled-components/native';
import { Button } from '../../Button';

export const Container = styled.View`
  gap: 16px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 12px;
  flex: 1;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const InputFilterContainer = styled.View`
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray,
}))`
  font-family: 'Roboto_400Regular';
  width: 100%;
`;

export const FilterButton = styled(Button).attrs(() => ({
  fontSize: '12px',
}))`
  padding: 4px 8px;
  width: 95px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 6px;
`;
