import { IViewProps } from './types'
import * as S from './styles'

const Container = ({ children }: IViewProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Container
