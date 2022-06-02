import styled, { css, keyframes } from 'styled-components'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'

type IAccordionProps = {
  showAnswer: boolean
}

const showAnswerAnimation = keyframes`
  from {
    max-height: 60px;
  }

  to {
    max-height: 200px;
  }
`
const closeAnswerAnimation = keyframes`
  from {
    max-height: 200px;
  }

  to {
    max-height: 60px;
  }
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: ${theme.spacings.huge} 0;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: flex-start;
    }
  `}
`

export const HeadingAndSubtitleWrapper = styled.div`
  ${({ theme }) => css`
    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }

    > ${Heading} {
      max-width: 384px;

      @media ${theme.media.lteMedium} {
        margin-bottom: ${theme.spacings.large};
      }
    }
  `}
`

export const AccordionsWrapper = styled.div`
  ${() => css``}
`

export const Accordion = styled.div<IAccordionProps>`
  ${({ theme, showAnswer }) => css`
    width: 100%;
    max-width: 696px;
    overflow: hidden;
    max-height: ${!showAnswer ? '60px' : '500px'};

    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.small} ${theme.spacings.medium};

    transition: transform 700ms ease-in-out;

    ${showAnswer
      ? css`
          animation: ${showAnswerAnimation} 700ms ease-in-out forwards;
        `
      : css`
          animation: ${closeAnswerAnimation} 700ms ease-in-out forwards;
        `}

    border-radius: 6px;
    background-color: ${theme.colors.black};

    &:hover {
      transform: translate3d(5px, 0px, 0px);
    }
  `}
`

export const AccordionHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    > ${Heading} {
      margin-bottom: calc(${theme.spacings.small} + 0.4rem);
      font-size: calc(${theme.font.sizes.small} + 0.2rem);

      @media ${theme.media.lteMedium} {
        font-size: calc(${theme.font.sizes.small} - 0.2rem);
      }
    }
  `}
`

export const AccordionButton = styled.button`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    border: none;
    cursor: pointer;

    border-radius: 5px;
    background-color: ${theme.colors.blackLight};
  `}
`

export const AccordionDescription = styled.p<IAccordionProps>`
  ${({ theme, showAnswer }) => css`
    line-height: 150%;
    opacity: ${showAnswer ? 1 : 0};
    transition: all ease 600ms;
    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};
  `}
`
