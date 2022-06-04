import { ISectionAboutProps } from 'interfaces/sections'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

const SectionAbout = ({
  subtitle,
  title,
  description,
  topics,
  illustration
}: ISectionAboutProps) => (
  <Container>
    <S.Wrapper>
      <S.ContentWrapperLeft data-aos="fade-up-right">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
        <S.Description>{description}</S.Description>
        <S.TopicsWrapper>
          {topics.map((topic) => {
            return (
              <S.Topic key={topic._id}>
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
      <S.ContentWrapperRight>
        <S.Ilustration
          data-aos="fade-up-left"
          src={illustration.urlImage}
          alt={illustration.altText}
        />
      </S.ContentWrapperRight>
    </S.Wrapper>
  </Container>
)

export default SectionAbout
