import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: ${theme.spacings.large} 0;

    .logo {
      width: 134px;
      margin-bottom: ${theme.spacings.small};

      @media ${theme.media.lteMedium} {
        width: 95px;
      }
    }
  `}
`

export const FooterContent = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray7};
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    margin-bottom: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const SocialLink = styled.a`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
  `}
`

export const SocialLinkIcon = styled.img`
  ${() => css`
    cursor: pointer;
    transition: ease-in-out all 500ms;

    &:hover {
      transform: translate3d(0px, -7px, 0px);
    }
  `}
`

export const SocialLinksWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`
