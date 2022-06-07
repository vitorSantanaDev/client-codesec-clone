import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'

import { IViewProps } from './type'
import * as S from './styles'

const SectionAbout = ({
  subtitle,
  title,
  description,
  topics,
  illustration
}: IViewProps) => (
  <Container>
    <S.Wrapper>
      <S.ContentWrapperLeft>
        <S.AnimateWrapper data-aos="fade-right">
          <Subtitle>{subtitle}</Subtitle>
          <Heading>{title}</Heading>
        </S.AnimateWrapper>
        <S.Description data-aos="fade-right">{description}</S.Description>
        <S.TopicsWrapper>
          {topics.map((topic) => {
            return (
              <S.Topic data-aos="fade-up-right" key={topic._id}>
                <S.TopicIcon
                  src={topic.icon.urlImage}
                  alt={topic.icon.altText}
                />
                {topic.textInfo}
              </S.Topic>
            )
          })}
        </S.TopicsWrapper>
      </S.ContentWrapperLeft>
      <S.ContentWrapperRight data-aos="fade-up">
        <S.Ilustration src={illustration.urlImage} alt={illustration.altText} />
      </S.ContentWrapperRight>
    </S.Wrapper>
  </Container>
)

export default SectionAbout
