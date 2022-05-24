import styled, { css } from 'styled-components'

type WrapperProps = {
  bgPath: string
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ bgPath }) => css`
    width: 100%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${bgPath});
  `}
`
