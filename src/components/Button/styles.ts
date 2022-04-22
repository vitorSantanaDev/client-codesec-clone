import styled, { css } from 'styled-components'

type WrapperProps = {
  size: 'large' | 'medium' | 'small'
}

const buttonSize = {
  small: () => css`
    max-width: 190px;
  `,
  medium: () => css`
    max-width: 255px;
  `,
  large: () => css`
    max-width: 330px;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    width: 100%;
    ${buttonSize[size]}
    padding: calc(${theme.spacings.small} - 0.4rem);

    font-weight: 600;
    text-transform: unset;
    font-size: ${theme.font.sizes.small};

    border: none;
    border-radius: 4px;

    color: ${theme.colors.white};
    background: ${theme.colors.redGradient};
    box-shadow: -10px 15px 40px -15px ${theme.colors.redLight};
  `}
`
