import { CustomTextProps, StyledText } from './styles';

export const CustomText = ({ children, ...props }: CustomTextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};
