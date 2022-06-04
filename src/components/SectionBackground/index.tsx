import { IViewProps } from './types'
import * as S from './styles'

const SectionBackground = ({ children, backgroundImagePath }: IViewProps) => (
  <S.Wrapper bgPath={backgroundImagePath}>{children}</S.Wrapper>
)

export default SectionBackground
