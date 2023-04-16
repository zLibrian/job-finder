import { ButtonContainer, ButtonProps, ButtonText } from './styles';

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {props.LeftIcon}
      <ButtonText>{props.title}</ButtonText>
      {props.RightIcon}
    </ButtonContainer>
  );
}
