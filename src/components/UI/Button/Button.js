import {
  StyledButton,
  StyledCloseBtn,
  StyledRedButton,
} from "../Styled/Button.styled";

export const Button = ({ variant = "basic", children, ...props }) => {
  const generateButton = () => {
    switch (variant) {
      case "basic":
        return <StyledButton {...props}>{children}</StyledButton>;
      case "red":
        return <StyledRedButton {...props}>{children}</StyledRedButton>;

      case "small":
        return <StyledCloseBtn {...props}>{children}</StyledCloseBtn>;

      default:
        return;
    }
  };
  return <>{generateButton()}</>;
};
