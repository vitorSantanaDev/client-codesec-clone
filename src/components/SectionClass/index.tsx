import Button from 'components/Button'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type SectionClassProps = {
  subtitle: string
  title: string
  classs: {
    dateClass: string
    hourAndDay: string
    classNumber: string
    icon: {
      url: string
      altTextIcon: string
    }
    titleClass: string
    descriptionClass: string
  }[]
}

const SectionClass = ({ subtitle, title, classs }: SectionClassProps) => (
  <Container>
    <S.Wrapper>
      <S.HeadingAndSubtitle>
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
      </S.HeadingAndSubtitle>
      {classs?.map((item, index) => {
        const key = `${index}-${item.classNumber}`
        return (
          <S.ContentWrapper key={key}>
            <S.DateWrapper>
              <Heading>{item.dateClass}</Heading>
              <Subtitle>{item.hourAndDay}</Subtitle>
            </S.DateWrapper>
            <S.Icon src={item.icon.url} alt={item.icon.altTextIcon} />
            <S.BoxContent>
              <S.ClassNumber>{item.classNumber}</S.ClassNumber>
              <Heading size="medium" as="h4">
                {item.titleClass}
              </Heading>
              <S.Description>{item.descriptionClass}</S.Description>
            </S.BoxContent>
          </S.ContentWrapper>
        )
      })}
      <S.ButtonWrapper>
        <Button size="small">Cadastre-se agora</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionClass
