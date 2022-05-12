import styled, { css, DefaultTheme } from 'styled-components'
import { theme } from 'styles/theme/theme'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
  color: string
}

const titleSize = {
  small: () => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: () => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: () => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: () => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: () => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: () => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: () => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
  xxhuge: () => css`
    font-size: ${theme.font.sizes.xxhuge};
  `
}

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`

export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, size, color }) => css`
    ${titleSize[size]}
    color: ${color};
    font-weight: 600;
    font-family: ${theme.font.family.default};
    ${mediaFont(theme)}
  `}
`
