import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.huge} 0;
  `}
`

export const FormWrapper = styled.div``

export const Illustration = styled.img`
  ${() => css`
    width: 100%;
  `}
`
