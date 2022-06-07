import Link from 'next/link'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'

import { IViewProps } from './types'
import * as S from './styles'

const SectionInstructor = ({
  title,
  subtitle,
  instructor,
  description,
  link
}: IViewProps) => (
  <Container>
    <S.Wrapper>
      <S.AnimateWrapper data-aos="fade-right">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
      </S.AnimateWrapper>
      <S.InstructorInfoWrapper>
        <S.InstructorData>
          <S.InstructorPhoto
            data-aos="fade-up-right"
            urlImage={instructor.photo.urlImage || '/images/icon-autor.svg'}
          />
          <S.InstructorNameAndProfessional data-aos="fade-up">
            <Heading as="h5">{instructor.name}</Heading>
            <S.InstructorProfessional>
              Software Engineer
            </S.InstructorProfessional>
          </S.InstructorNameAndProfessional>
        </S.InstructorData>
        <S.AboutInstructor data-aos="fade-right">
          <S.DescriptionInstructor>{description}</S.DescriptionInstructor>
          <Link href={link.linkUrl}>
            <S.LinkMoreInfo>
              <Subtitle>{link.linkText}</Subtitle>
            </S.LinkMoreInfo>
          </Link>
        </S.AboutInstructor>
      </S.InstructorInfoWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionInstructor
