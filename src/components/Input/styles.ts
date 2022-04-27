import styled, { css } from 'styled-components'

type InputProps = {
  errorMessage?: string
  valueIsValid?: boolean
}

export const Wrapper = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    justify-content: space-between;
  `}
`
export const InputElement = styled.input<InputProps>`
  ${({ theme, errorMessage, valueIsValid }) => css`
    width: 100%;
    display: block;
    padding: calc(${theme.spacings.small} - 0.4rem) 0
      calc(${theme.spacings.small} - 0.4rem) ${theme.spacings.xlarge};

    border: none;
    outline: none;
    border-radius: 4px;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray7};
    background-color: ${theme.colors.blackLight};

    ${errorMessage
      ? `
      border: 1px solid ${theme.colors.redError};
    `
      : ''}
    ${valueIsValid && !errorMessage
      ? `
      border: 1px solid ${theme.colors.greenSucsses};
    `
      : ''}

      &:focus {
      background-color: ${theme.colors.black};
    }
  `}
`

export const InputStateWrapper = styled.div`
  ${() => css``}
`

export const IconState = styled.span<InputProps>`
  ${({ errorMessage, valueIsValid }) => css`
    > svg {
      position: absolute;
      ${errorMessage &&
      `
        top: 35px;
        right: 10px;
        `}
      ${valueIsValid &&
      `
        top: 32px;
        right: 12px;
        `}
    }
  `}
`

export const InputIcon = styled.span<InputProps>`
  ${({ errorMessage, valueIsValid }) => css`
    > svg {
      position: absolute;
      top: 32px;
      left: 10px;

      ${valueIsValid &&
      `
       left: 11px;
      `}
      ${errorMessage &&
      `
      top: 35px;
      `}
    }
  `}
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: calc(${theme.spacings.small} - 1rem);

    font-weight: 400;
    font-size: calc(${theme.font.sizes.small} - 0.2rem);
    color: ${theme.colors.redError};
  `}
`
