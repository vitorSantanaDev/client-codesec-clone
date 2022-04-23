import styled, { css } from 'styled-components'

type SubtitleProps = {
  color: 'redGradient' | 'redDark' | 'redLight' | 'redPrimary'
  uppercase: boolean
  icon: boolean
  iconUrl?: string
}

export const Wrapper = styled.span<SubtitleProps>`
  ${({ theme, color, uppercase, icon, iconUrl }) => css`
    background-image: ${theme.colors[color]};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    display: flex;
    align-items: center;

    font-weight: 700;
    letter-spacing: 15%;
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    font-size: calc(${theme.font.sizes.small} + 0.2rem);

    ${icon
      ? `
      &::before {
        content: '';
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-block;

        background-size: cover;
        background-image: url(${iconUrl});

        margin-right: calc(${theme.spacings.small} - 1rem);
      }
    `
      : ''}
  `}
`
