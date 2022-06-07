import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'

import { IViewProps } from './types'
import * as S from './styles'

const SectionHowItWorks = ({
  steps,
  title,
  subtitle,
  description
}: IViewProps) => (
  <Container>
    <S.Wrapper>
      <S.TitleAndDescriptionWrapper>
        <S.ContentWrapper data-aos="fade-right">
          <Subtitle>{subtitle}</Subtitle>
          <Heading>{title}</Heading>
        </S.ContentWrapper>
        <S.Description data-aos="fade-right">{description}</S.Description>
      </S.TitleAndDescriptionWrapper>
      <S.BoxsWrapper>
        {steps.map((step) => {
          return (
            <S.AnimateWrapper data-aos="fade-up-right" key={step._id}>
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
