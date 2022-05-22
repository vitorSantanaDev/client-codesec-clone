import styled, { css } from 'styled-components'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: ${theme.spacings.huge} 0;

    @media ${theme.media.lteMedium} {
      align-items: center;
      grid-template-columns: 1fr;
      justify-content: center;
    }
  `}
`

export const TitleAndSubtitleAndButtonWrapper = styled.div`
  ${({ theme }) => css`
    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }
    > ${Heading} {
      max-width: 341px;
      margin-bottom: ${theme.spacings.huge};

      @media ${theme.media.lteMedium} {
        font-size: ${theme.spacings.large};
      }
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`

export const ButtonsSlideWrapper = styled.div`
  ${({ theme }) => css`
    > button:nth-child(1) {
      margin-right: ${theme.spacings.small};
    }
  `}
`

export const ButtonSlide = styled.button`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: background 0.3s ease-in-out;

    cursor: pointer;

    background: transparent;
    border: 1px solid ${theme.colors.gray7};

    &:hover {
      background-image: ${theme.colors.redGradientDark};
    }
  `}
`

export const SlideWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;

    .swiper {
      padding: ${theme.spacings.medium};
    }

    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .swiper-pagination {
      bottom: 1px;
    }

    .swiper-pagination-bullet {
      background-color: ${theme.colors.gray7};
    }
    .swiper-pagination-bullet-active {
      background: ${theme.colors.redGradientDark};
    }
  `}
`

export const Slide = styled.div`
  ${() => css`
    display: flex;
    min-width: 420px;
  `}
`

export const SlideItem = styled.div`
  ${({ theme }) => css`
    width: 85%;
    flex-shrink: 0;
    min-width: 420px;
    margin-bottom: ${theme.spacings.huge};
    margin-right: ${theme.spacings.xlarge};

    @media ${theme.media.lteMedium} {
      min-width: 100%;

      margin-top: ${theme.spacings.xlarge};
    }
  `}
`
export const TestimonialInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const TestimonialPhoto = styled.img``

export const TestimonialNameAndOthers = styled.div`
  ${({ theme }) => css`
    > ${Heading} {
      color: ${theme.colors.redPrimary};

      @media ${theme.media.lteMedium} {
        font-size: calc(${theme.font.sizes.medium} - 0.4rem);
      }
    }
  `}
`

export const TestimonialProfession = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    font-size: calc(${theme.font.sizes.small} - 0.2rem);

    margin: calc(${theme.spacings.small} - 1rem) 0;

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.small} - 0.3rem);
    }
  `}
`

export const TestimonialCity = styled.span`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} - 0.2rem);
    color: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      font-size: calc(${theme.font.sizes.small} - 0.3rem);
    }
  `}
`

export const TestimonialDescription = styled.p`
  ${({ theme }) => css`
    width: 100%;
    line-height: 150%;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};

    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background-image: url('/images/icon-comma.svg');
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
