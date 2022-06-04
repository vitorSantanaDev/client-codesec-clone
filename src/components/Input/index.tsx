import { AtOutline } from '@styled-icons/evaicons-outline/AtOutline'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { PersonOutline } from '@styled-icons/evaicons-outline/PersonOutline'
import { CheckmarkOutline } from '@styled-icons/evaicons-outline/CheckmarkOutline'

import { IViewProps } from './types'
import { theme } from 'styles/theme/theme'
import * as S from './styles'

const Input = ({
  id,
  type,
  name,
  value,
  placeholder,
  valueIsValid = false,
  errorMessage = '',
  handleChange
}: IViewProps) => {
  const colorRedPrimary = theme.colors.redPrimary

  const inputIsValidOrNotValid =
    valueIsValid && !errorMessage ? (
      <CheckmarkOutline size={24} color={theme.colors.greenSucsses} />
    ) : errorMessage ? (
      <CloseOutline size={24} color={theme.colors.redError} />
    ) : null

  const inputIcon =
    name === 'email' ? (
      <AtOutline size={24} color={colorRedPrimary} />
    ) : name === 'name' ? (
      <PersonOutline size={24} color={colorRedPrimary} />
    ) : null

  const stateInputIcons = {
    errorMessage,
    valueIsValid
  }

  return (
    <>
      <S.Wrapper>
        <S.InputIcon {...stateInputIcons}>{inputIcon}</S.InputIcon>
        <S.InputStateWrapper>
          <S.IconState {...stateInputIcons}>
            {inputIsValidOrNotValid}
          </S.IconState>
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        </S.InputStateWrapper>
      </S.Wrapper>
      <S.InputElement
        type={type}
        name={name}
        value={value}
        id={id || name}
        placeholder={placeholder}
        onChange={handleChange}
        valueIsValid={valueIsValid}
        errorMessage={errorMessage || ''}
      />
    </>
  )
}

export default Input
