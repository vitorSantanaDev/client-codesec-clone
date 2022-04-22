import { ReactNode, SyntheticEvent } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactNode
  handleClick: (event?: SyntheticEvent) => void
  size?: 'large' | 'medium' | 'small'
}

const Button = ({ children, handleClick, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size} onClick={handleClick}>
    {children}
  </S.Wrapper>
)

export default Button
