import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  gap: 24px;

  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  width: 100%;
  height: 100%;
`;
