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
      <S.HeadingAndSubtitle data-aos="fade-down">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
      </S.HeadingAndSubtitle>
      {classs?.map((item, index) => {
        const key = `${index}-${item.classNumber}`
        return (
          <S.ContentWrapper key={key}>
            <S.DateWrapper data-aos="fade-right">
              <Heading>{item.dateClass}</Heading>
              <Subtitle>{item.hourAndDay}</Subtitle>
            </S.DateWrapper>
            <S.Icon
              data-aos="fade-down"
              src={item.icon.url}
              alt={item.icon.altTextIcon}
            />
            <S.AnimateWrapper data-aos="fade-right">
              <S.BoxContent>
                <S.ClassNumber>{item.classNumber}</S.ClassNumber>
                <Heading size="medium" as="h4">
                  {item.titleClass}
                </Heading>
                <S.Description>{item.descriptionClass}</S.Description>
              </S.BoxContent>
            </S.AnimateWrapper>
          </S.ContentWrapper>
        )
      })}
      <S.ButtonWrapper data-aos="fade-up">
        <Button size="small">Cadastre-se agora</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionClass
