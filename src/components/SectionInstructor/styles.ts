import styled, { css } from 'styled-components'
import { Wrapper as Heading } from 'components/Heading/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'

type PhotoContainerProps = {
  urlImage: string
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xhuge} 0;

    > ${Subtitle} {
      margin-bottom: calc(${theme.spacings.small} - 0.8rem);
    }

    @media ${theme.media.lteMedium} {
      > ${Heading} {
        font-size: calc(${theme.font.sizes.large} + 0.4rem);
      }
    }
  `}
`
export const InstructorInfoWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: ${theme.spacings.xlarge};

    @media ${theme.media.lteMedium} {
      justify-content: center;
    }
  `}
`
export const InstructorData = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `}
`
export const InstructorPhoto = styled.div<PhotoContainerProps>`
  ${({ theme, urlImage }) => css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid
      ${urlImage === '/images//images/icon-autor.svg'
        ? `${theme.colors.redPrimary}`
        : null};

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${urlImage}');
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const InstructorNameAndProfessional = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      margin-bottom: calc(${theme.spacings.small} - 0.5rem);
      font-size: calc(${theme.font.sizes.medium} + 0.2rem);
    }

    @media ${theme.media.lteMedium} {
      text-align: center;
    }
  `}
`

export const InstructorProfessional = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.gray7};
    font-size: ${theme.spacings.small};

    @media ${theme.media.lteMedium} {
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const AboutInstructor = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `}
`
export const DescriptionInstructor = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-width: 624px;

    color: ${theme.colors.gray7};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.large};
  `}
`
export const LinkMoreInfo = styled.a`
  ${() => css`
    cursor: pointer;
  `}
`
