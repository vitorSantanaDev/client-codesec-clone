import { ISectionHowItWorksProps } from 'interfaces/sections'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

const SectionHowItWorks = ({
  steps,
  title,
  subtitle,
  description
}: ISectionHowItWorksProps) => (
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
        {steps.map((step) => {
          return (
            <S.AnimateWrapper data-aos="fade-up" key={step._id}>
              <S.BoxStep>
                <S.Icon src={step.icon.urlImage} alt={step.icon.altText} />
                <Heading as="h5" size="medium">
                  {step.titleStep}
                </Heading>
                <S.DescriptionBoxStep>
                  {step.descriptionStep}
                </S.DescriptionBoxStep>
              </S.BoxStep>
            </S.AnimateWrapper>
          )
        })}
      </S.BoxsWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionHowItWorks
