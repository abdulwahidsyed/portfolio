import { StyledButton, StyledRedButton } from "../Styled/Button.styled";

export const Button = ({ variant = "basic", children, ...props }) => {
  const generateButton = () => {
    switch (variant) {
      case "basic":
        return <StyledButton {...props}>{children}</StyledButton>;
      case "red":
        return <StyledRedButton {...props}>{children}</StyledRedButton>;

      default:
        return;
    }
  };
  return <>{generateButton()}</>;
};
