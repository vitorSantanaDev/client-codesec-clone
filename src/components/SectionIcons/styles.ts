import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.small};
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120px;

    color: ${theme.colors.whiteDark};
    font-size: ${theme.font.sizes.small};
  `}
`
