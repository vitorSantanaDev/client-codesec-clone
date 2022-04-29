import { ReactNode } from 'react'
import * as S from './styles'

type ContainerProps = {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Container
