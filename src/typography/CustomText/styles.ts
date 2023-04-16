import { TextProps } from 'react-native';
import styled from 'styled-components/native';

export type CustomTextProps = TextProps & {
  fontWeight?: 'regular' | 'medium' | 'bold';
  fontSize?: string;
  color?: string;
};

export const StyledText = styled.Text<CustomTextProps>`
  font-family: ${({ theme, fontWeight }) =>
    theme.fonts[fontWeight] || theme.fonts['regular']};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ theme, color }) => color || theme.colors.text};
`;
