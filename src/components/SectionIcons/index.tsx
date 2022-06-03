import Container from 'components/Container'
import * as S from './styles'

type ISectionInconsProps = {
  icons: {
    text: string
    srcImage: string
  }[]
}

const SectionIcons = ({ icons }: ISectionInconsProps) => (
  <Container>
    <S.Wrapper>
      {icons.map((icon, index) => {
        const key = `${index}-${Math.random()}`
        return (
          <S.Icon data-aos="fade-up" key={key}>
            <img src={icon.srcImage} alt={icon.text} />
            <S.Text>{icon.text}</S.Text>
          </S.Icon>
        )
      })}
    </S.Wrapper>
  </Container>
)

export default SectionIcons
