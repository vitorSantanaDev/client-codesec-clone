import Container from 'components/Container'
import * as S from './styles'

type ISectionInconsProps = {
  _id?: string
  icons: {
    _id?: string
    image: {
      urlImage: string
      altText: string
    }
    textInfo: string
  }[]
}

const SectionIcons = ({ icons }: ISectionInconsProps) => (
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
