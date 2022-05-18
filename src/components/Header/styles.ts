import styled, { css } from 'styled-components'
import { Logo as LogoElement } from 'components/Logo/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: calc(${theme.spacings.small} - 0.6rem);

    z-index: 9999;
    position: fixed;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${theme.colors.blackLight};

    @supports (backdrop-filter: blur(16px)) {
      background: rgba(10, 9, 9, 0.3);
      backdrop-filter: blur(16px);
    }

    ${LogoElement} {
      width: 220px;
    }

    @media ${theme.media.lteMedium} {
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      @media ${theme.media.lteMedium} {
        width: 145px;
      }
    }
  `}
`
