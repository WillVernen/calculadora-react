import styled, { css } from 'styled-components';

const buttonVariants = {
  default: css`
    background: #f3f4f6;
    color: #111827;
  `,
  operator: css`
    background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
    color: #ffffff;
  `,
  clear: css`
    background: #d1d5db;
    color: #111827;
  `,
  equal: css`
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    color: #ffffff;
  `,
};

export const ButtonContainer = styled.button`
  height: 72px;
  border: none;
  border-radius: 18px;
  font-size: clamp(2rem, 2vw, 2.5rem);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.08);

  ${({ $variant }) => buttonVariants[$variant] || buttonVariants.default}

  &:hover {
    filter: brightness(0.96);
  }

  &:active {
    transform: translateY(1px);
  }
`;