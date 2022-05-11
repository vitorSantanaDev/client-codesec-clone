import styled, { css } from 'styled-components'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'
import { Wrapper as Heading } from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    gap: ${theme.spacings.medium};
    grid-template-columns: 5fr 7fr;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    } ;
  `}
`
export const ContentWrapperLeft = styled.div`
  ${({ theme }) => css`
    ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }

    ${Heading} {
      max-width: 328px;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
export const ContentWrapperRight = styled.div`
  ${() => css``}
`
export const Description = styled.div`
  ${({ theme }) => css`
    line-height: 150%;
    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};

    margin-bottom: ${theme.spacings.medium};
  `}
`
export const TopicsWrapper = styled.div`
  ${() => css``}
`
export const Topic = styled.span`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    margin-bottom: calc(${theme.spacings.medium} - 0.4rem);
  `}
`
export const TopicIcon = styled.img`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;

    margin-right: ${theme.spacings.small};
  `}
`
export const Ilustration = styled.img`
  ${() => css`
    width: 100%;
  `}
`
