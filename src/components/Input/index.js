import { InputContainer } from './styles';

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input aria-label="display" value={value} readOnly />
    </InputContainer>
  );
};

export default Input;