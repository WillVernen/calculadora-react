import { ButtonContainer } from './styles';

const Button = ({ label, onClick, variant = 'default' }) => {
  return (
    <ButtonContainer type="button" $variant={variant} onClick={() => onClick(label)}>
      {label}
    </ButtonContainer>
  );
};

export default Button;