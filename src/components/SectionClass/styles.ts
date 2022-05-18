import styled, { css } from 'styled-components'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Button } from 'components/Button/styles'

export const Wrapper = styled.div`
  ${() => css``}
`

export const HeadingAndSubtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xhuge};

    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }

    @media ${theme.media.lteMedium} {
      > ${Heading} {
        text-align: center;
        font-size: calc(${theme.font.sizes.large} + 0.4rem);
      }
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`

export const DateWrapper = styled.div`
  ${({ theme }) => css`
    > ${Subtitle} {
      font-size: calc(${theme.font.sizes.small} - 0.1rem);
    }
  `}
`

export const Icon = styled.img`
  ${() => css`
    max-width: 64px;
  `}
`

export const BoxContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.blackDark};
    padding: ${theme.spacings.medium} ${theme.spacings.xlarge};

    transition: 300ms ease-in-out;
    border-radius: 3px;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      margin: -1.5px;
      border-radius: 3px;
      background: ${theme.colors.redGradientDark};
    }

    &:hover {
      background: ${theme.colors.redGradientLight};
    }

    > ${Heading} {
      margin-bottom: ${theme.spacings.small};

      @media ${theme.media.lteMedium} {
        font-size: 3rem;
      }
    }
  `}
`

export const ClassNumber = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    padding: 0.8rem ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};

    border-radius: 2px;
    color: ${theme.colors.black};
    background: ${theme.colors.redGradient};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-width: 537px;

    line-height: 150%;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray7};
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    > ${Button} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`
