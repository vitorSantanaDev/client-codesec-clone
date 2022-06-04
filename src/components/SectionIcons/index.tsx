import Container from 'components/Container'

import { IViewProps } from './types'
import * as S from './styles'

const SectionIcons = ({ icons }: IViewProps) => (
  <Container>
    <S.Wrapper>
      {icons.map((icon) => {
        return (
          <S.Icon data-aos="fade-up" key={icon._id}>
            <img src={icon.image.urlImage} alt={icon.image.altText} />
            <S.Text>{icon.textInfo}</S.Text>
          </S.Icon>
        )
      })}
    </S.Wrapper>
  </Container>
)

export default SectionIcons
