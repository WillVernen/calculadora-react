import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dfe3e8;
  padding: 24px;
`;

export const Calculator = styled.div`
  width: min(100%, 520px);
  padding: 26px 22px 18px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
`;

export const DisplayWrapper = styled.div`
  margin-bottom: 18px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  gap: 12px;
`;

export const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;