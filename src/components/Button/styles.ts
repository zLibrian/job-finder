import styled, { css } from 'styled-components/native';
import { CustomText } from '../../typography/CustomText';

import { TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  fontSize?: string;
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 115px;
  height: 46px;

  border: 1px solid #4e4e4e;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${({ RightIcon, LeftIcon }) =>
    (RightIcon || LeftIcon) &&
    css`
      width: auto;
      height: auto;
      padding: 7px 14px;
    `}
`;

export const ButtonText = styled(CustomText)`
  padding: 0 4px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
`;
