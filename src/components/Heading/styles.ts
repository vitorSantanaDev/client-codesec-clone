import styled, { css, DefaultTheme } from 'styled-components'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
  xxhuge: (theme: DefaultTheme) => css`
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
    ${titleSize[size](theme)}
    color: ${color};
    font-weight: 600;
    font-family: ${theme.font.family.default};
    ${mediaFont(theme)}
  `}
`
