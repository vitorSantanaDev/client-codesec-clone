import Container from 'components/Container'
import Form from 'components/Form'
import * as S from './styles'

type SectionHackerProps = {
  illustration: {
    altText: string
    urlImage: string
  }
}

const SectionHacker = ({ illustration }: SectionHackerProps) => (
  <Container>
    <S.Wrapper>
      <S.Illustration src={illustration.urlImage} alt={illustration.altText} />
      <S.FormWrapper data-aos="fade-up">
        <Form
          url="/"
          title="Entre agora mesmo para lista de espera"
          srcImage="/images/logo-2-codesec.svg"
          altText="Logo codesec"
          subtitle="Cadastre-se"
          handleSubmit={() => ({})}
        />
      </S.FormWrapper>
    </S.Wrapper>
  </Container>
)

export default SectionHacker
