import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 96px;
  margin-bottom: 18px;
  border-radius: 18px;
  background: #102436;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 18px;
  box-sizing: border-box;

  input {
    width: 100%;
    border: none;
    background: transparent;
    text-align: right;
    font-size: clamp(2.8rem, 5vw, 4rem);
    font-weight: 700;
    color: #f8fafc;
    outline: none;
    font-family: 'Segoe UI', sans-serif;
  }
`;