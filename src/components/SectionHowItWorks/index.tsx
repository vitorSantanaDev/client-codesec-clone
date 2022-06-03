import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type ISectionHowItWorks = {
  subtitle: string
  title: string
  description: string
  steps: {
    icon: {
      altText: string
      url: string
    }
    title: string
    description: string
  }[]
}

const SectionHowItWorks = ({
  steps,
  title,
  subtitle,
  description
}: ISectionHowItWorks) => (
  <Container>
    <S.Wrapper>
      <S.TitleAndDescriptionWrapper>
        <S.ContentWrapper data-aos="fade-up">
          <Subtitle>{subtitle}</Subtitle>
          <Heading>{title}</Heading>
        </S.ContentWrapper>
        <S.Description data-aos="fade-left">{description}</S.Description>
      </S.TitleAndDescriptionWrapper>
      <S.BoxsWrapper>
        {steps.map((step, index) => {
          const key = `${index}-${step.title}`
          return (
            <S.AnimateWrapper data-aos="fade-up" key={key}>
              <S.BoxStep>
                <S.Icon src={step.icon.url} alt={step.icon.altText} />
                <Heading as="h5" size="medium">
                  {step.title}
                </Heading>
                <S.DescriptionBoxStep>{step.description}</S.DescriptionBoxStep>
              </S.BoxStep>
            </S.AnimateWrapper>
          )
        })}
      </S.BoxsWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionHowItWorks
