import Button from 'components/Button'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type SectionParticipateProps = {
  _id?: string
  subtitle: string
  title: string
  description: string
  illustration: {
    altText: string
    urlImage: string
  }
}

const SectionParticipate = ({
  subtitle,
  title,
  description,
  illustration
}: SectionParticipateProps) => (
  <Container>
    <S.Wrapper>
      <S.ContentWrapperLeft data-aos="fade-up-right">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
        <S.Description>{description}</S.Description>
        <Button size="medium">Quero me cadastrar</Button>
      </S.ContentWrapperLeft>
      <S.ContentWrapperRight data-aos="fade-up-left">
        <S.Illustration
          src={illustration.urlImage}
          alt={illustration.altText}
        />
      </S.ContentWrapperRight>
    </S.Wrapper>
  </Container>
)

export default SectionParticipate
