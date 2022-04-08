import styled, { css } from "styled-components";

const ExampleComponentStyled = styled.div`
  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.color.base.teal};
      padding: 0.5rem 1rem;
    `;
  }};
`;

export default ExampleComponentStyled;
