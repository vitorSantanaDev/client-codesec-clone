import styled, { css } from 'styled-components'
import { InputElement } from 'components/Input/styles'
import { Wrapper as Button } from 'components/Button/styles'
import { Wrapper as Subtitle } from 'components/Subtitle/styles'
import { Wrapper as Heading } from 'components/Heading/styles'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${Subtitle} {
      margin-top: calc(${theme.spacings.small} - 0.2rem);

      @media screen and (max-width: 560px) {
        font-size: calc(${theme.spacings.small} - 0.4rem);
      }
    }

    ${Heading} {
      margin-top: calc(${theme.spacings.small} - 0.8rem);

      @media screen and (max-width: 560px) {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${Button} {
      max-width: 350px;
      margin-top: calc(${theme.spacings.small} - 0.4rem);
      margin-bottom: ${theme.spacings.small};

      @media screen and (max-width: 280px) {
        width: 263px;
      }
    }
  `}
`

export const InputsWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    ${InputElement} {
      width: 350px;

      @media screen and (max-width: 280px) {
        width: 263px;
      }
    }
  `}
`
