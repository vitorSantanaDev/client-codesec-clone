import styled, { css } from 'styled-components'
import { Wrapper as CompositionElement } from 'components/CompositionElement/styles'
import { Wrapper as Heading } from 'components/Heading/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.xxhuge} + 3rem)
      calc(${theme.spacings.medium} - 1.4rem);

    display: grid;
    align-items: center;
    gap: ${theme.spacings.medium};
    grid-template-columns: 3fr 1fr 2fr;

    @media ${theme.media.ltexLarge} {
      justify-content: center;
      justify-items: center;
      grid-template-columns: 1fr;
    }

    ${CompositionElement} {
      transform: rotate(270deg);

      @media ${theme.media.ltexLarge} {
        transform: rotate(360deg);
      }

      @media ${theme.media.lteSmall} {
        width: 325px;
      }
    }
  `}
`

export const CompositionElementWrapper = styled.div`
  ${() => css``}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      font-size: calc(${theme.font.sizes.xxlarge} - 0.2rem);
      margin: ${theme.spacings.small} 0;

      @media ${theme.media.lteMedium} {
        font-size: calc(${theme.font.sizes.large} + 0.4rem);
      }
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    line-height: 23.4px;
    color: ${theme.colors.gray7};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
  `}
`

export const LinkElement = styled.a`
  ${({ theme }) => css`
    display: inline-block;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-top: ${theme.spacings.large};
    }
  `}
`
