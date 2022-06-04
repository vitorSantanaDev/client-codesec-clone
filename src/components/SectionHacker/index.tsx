import Container from 'components/Container'
import Form from 'components/Form'

import { IViewProps } from './types'
import * as S from './styles'

const SectionHacker = ({ illustration }: IViewProps) => (
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
