import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: ${theme.spacings.large};

    display: flex;
    justify-content: center;
  `}
`
