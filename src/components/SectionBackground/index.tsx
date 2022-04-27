import { ReactNode } from 'react'
import * as S from './styles'

type SectionBackgroundProps = {
  children: ReactNode
  backgroundImagePath: string
}
const SectionBackground = ({
  children,
  backgroundImagePath
}: SectionBackgroundProps) => (
  <S.Wrapper bgPath={backgroundImagePath}>{children}</S.Wrapper>
)

export default SectionBackground
