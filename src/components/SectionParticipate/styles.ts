import styled, { css } from 'styled-components'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.huge} 0;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: center;
    }
  `}
`

export const ContentWrapperLeft = styled.div`
  ${({ theme }) => css`
    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }
    > ${Heading} {
      max-width: 433px;
      margin-bottom: calc(${theme.spacings.small} - 0.7rem);
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 416px;
    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.huge};
  `}
`

export const ContentWrapperRight = styled.div`
  ${() => css``}
`

export const Illustration = styled.img`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      width: 350px;
      margin-top: ${theme.spacings.large};
    }
  `}
`
