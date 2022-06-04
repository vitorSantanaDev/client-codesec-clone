import { IViewProps } from './types'
import * as S from './styles'

const Button = ({ children, handleClick, size = 'medium' }: IViewProps) => (
  <S.Wrapper size={size} onClick={handleClick}>
    {children}
  </S.Wrapper>
)

export default Button
