import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type SectionIntructorProps = {
  title: string
  subtitle: string
  description: string
  instructor: {
    name: string
    photo: {
      urlImage: string
      altText: string
    }
    link: {
      linkText: string
      linkUrl: string
    }
  }
}

const SectionInstructor = ({
  title,
  subtitle,
  instructor,
  description
}: SectionIntructorProps) => (
  <Container>
    <S.Wrapper>
      <S.AnimateWrapper data-aos="fade-right">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
      </S.AnimateWrapper>
      <S.InstructorInfoWrapper>
        <S.InstructorData>
          <S.InstructorPhoto
            data-aos="fade-down"
            urlImage={instructor.photo.urlImage || '/images/icon-autor.svg'}
          />
          <S.InstructorNameAndProfessional data-aos="fade-up">
            <Heading as="h5">{instructor.name}</Heading>
            <S.InstructorProfessional>
              Software Engineer
            </S.InstructorProfessional>
          </S.InstructorNameAndProfessional>
        </S.InstructorData>
        <S.AboutInstructor>
          <S.DescriptionInstructor data-aos="fade-left">
            {description}
          </S.DescriptionInstructor>
          <Link href={instructor.link.linkUrl}>
            <S.LinkMoreInfo>
              <Subtitle data-aos="fade-right">
                {instructor.link.linkText}
              </Subtitle>
            </S.LinkMoreInfo>
          </Link>
        </S.AboutInstructor>
      </S.InstructorInfoWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionInstructor
