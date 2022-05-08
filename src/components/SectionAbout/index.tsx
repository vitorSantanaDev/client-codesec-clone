import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type SectionAboutProps = {
  subtitle: string
  title: string
  description: string
  topics: {
    text: string
    alttextIcon: string
    topicIconSrcImage: string
  }[]
  ilustrationSrcImage: string
  ilustrationAltText: string
}

const SectionAbout = ({
  subtitle,
  title,
  description,
  topics,
  ilustrationSrcImage,
  ilustrationAltText
}: SectionAboutProps) => (
  <Container>
    <S.Wrapper>
      <S.ContentWrapperLeft>
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
        <S.Description>{description}</S.Description>
        <S.TopicsWrapper>
          {topics.map((topic, index) => {
            const key = `${index}-${topic}`
            return (
              <S.Topic key={key}>
                {' '}
                <S.TopicIcon
                  src={topic.topicIconSrcImage}
                  alt={topic.alttextIcon}
                />
                {topic.text}
              </S.Topic>
            )
          })}
        </S.TopicsWrapper>
      </S.ContentWrapperLeft>
      <S.ContentWrapperRight>
        <S.Ilustration src={ilustrationSrcImage} alt={ilustrationAltText} />
      </S.ContentWrapperRight>
    </S.Wrapper>
  </Container>
)

export default SectionAbout
