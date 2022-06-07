import styled, { css } from 'styled-components'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xhuge} 0;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }

    > ${Heading} {
      width: 100%;
      max-width: 592px;

      @media screen and (max-width: 520px) {
        margin-bottom: ${theme.spacings.medium};
      }

      @media ${theme.media.lteMedium} {
        font-size: calc(${theme.font.sizes.large} + 0.4rem);
      }
    }
  `}
`

export const AnimateWrapper = styled.div``

export const TitleAndDescriptionWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    align-items: baseline;
    grid-template-columns: 1fr 400px;
    margin-bottom: ${theme.spacings.huge};

    @media screen and (max-width: 520px) {
      justify-content: center;
      grid-template-columns: 1fr;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-width: 404px;
    line-height: 150%;
    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};
  `}
`

export const BoxsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
    justify-content: space-between;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: center;
    }
  `}
`

export const DescriptionBoxStep = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-width: 300px;
    line-height: 150%;
    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};
  `}
`

export const BoxStep = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    background: ${theme.colors.blackDark};
    margin-bottom: ${theme.spacings.medium};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-radius: 3px;
    transition: 300ms ease-in-out;

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
      position: relative;
      font-size: ${theme.font.sizes.medium};
      margin-bottom: calc(${theme.spacings.medium} - 0.4rem);

      /* &::before {
        content: '';
        width: 345px;
        height: 1px;
        top: -51px;
        left: -144px;
        position: absolute;
        display: inline-block;
        background: ${theme.colors.redGradientDark};
      } */
    }
  `}
`

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 64px;
    z-index: 10000;
    margin-bottom: calc(${theme.spacings.medium} - 0.4rem);
  `}
`
