import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

type SectionIntructorProps = {
  title: string
  subtitle: string
  instructor: {
    name: string
    photoUrl: string

    description: string
    link: {
      linkText: string
      linkUrl: string
    }
  }
}

const SectionInstructor = ({
  title,
  subtitle,
  instructor
}: SectionIntructorProps) => (
  <Container>
    <S.Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Heading>{title}</Heading>
      <S.InstructorInfoWrapper>
        <S.InstructorData>
          <S.InstructorPhoto
            urlImage={instructor.photoUrl || '/images/icon-autor.svg'}
          />
          <S.InstructorNameAndProfessional>
            <Heading as="h5">{instructor.name}</Heading>
            <S.InstructorProfessional>
              Software Engineer
            </S.InstructorProfessional>
          </S.InstructorNameAndProfessional>
        </S.InstructorData>
        <S.AboutInstructor>
          <S.DescriptionInstructor>
            {instructor.description}
          </S.DescriptionInstructor>
          <Link href={instructor.link.linkUrl}>
            <S.LinkMoreInfo>
              <Subtitle>{instructor.link.linkText}</Subtitle>
            </S.LinkMoreInfo>
          </Link>
        </S.AboutInstructor>
      </S.InstructorInfoWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionInstructor
