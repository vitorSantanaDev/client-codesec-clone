import { ISectionClassProps } from 'interfaces/sections'

import Button from 'components/Button'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'

const SectionClass = ({ subtitle, title, classs }: ISectionClassProps) => (
  <Container>
    <S.Wrapper>
      <S.HeadingAndSubtitle data-aos="fade-down">
        <Subtitle>{subtitle}</Subtitle>
        <Heading>{title}</Heading>
      </S.HeadingAndSubtitle>
      {classs?.map((item) => {
        return (
          <S.ContentWrapper key={item._id}>
            <S.DateWrapper data-aos="fade-right">
              <Heading>{item.dateClass}</Heading>
              <Subtitle>{item.hourAndDay}</Subtitle>
            </S.DateWrapper>
            <S.Icon
              data-aos="fade-down"
              src={item.icon.urlImage}
              alt={item.icon.altText}
            />
            <S.AnimateWrapper data-aos="fade-right">
              <S.BoxContent>
                <S.ClassNumber>{item.classNumber}</S.ClassNumber>
                <Heading size="medium" as="h4">
                  {item.titleClass}
                </Heading>
                <S.Description>{item.descriptionClass}</S.Description>
              </S.BoxContent>
            </S.AnimateWrapper>
          </S.ContentWrapper>
        )
      })}
      <S.ButtonWrapper data-aos="fade-up">
        <Button size="small">Cadastre-se agora</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionClass
