import { AlertCircleOutline } from '@styled-icons/evaicons-outline/AlertCircleOutline'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Logo from 'components/Logo'
import Subtitle from 'components/Subtitle'

import { IViewProps } from './type'
import { theme } from 'styles/theme/theme'
import * as S from './styles'

const inputsData = [
  { type: 'text', id: 'name', name: 'name', placeholder: 'Seu nome' },
  { type: 'email', id: 'email', name: 'email', placeholder: 'Seu Email' }
]

const Form = ({
  srcImage,
  altText,
  url,
  title,
  subtitle,
  handleSubmit
}: IViewProps) => (
  <S.Wrapper onSubmit={handleSubmit}>
    <Logo className="logo" url={url} srcImage={srcImage} altText={altText} />
    {title ? <Subtitle>{subtitle}</Subtitle> : null}
    {title ? (
      <Heading size="medium" as="h4">
        {title}
      </Heading>
    ) : null}
    <S.FormWrapper>
      <S.InputsWrapper>
        {inputsData.map((input, index) => (
          <Input
            key={`${input.name}-${index}`}
            {...input}
            handleChange={() => ({})}
          />
        ))}
      </S.InputsWrapper>
      <Button type="submit" size="large">
        Quero me cadastrar
      </Button>
    </S.FormWrapper>

    {!title && subtitle ? (
      <AlertCircleOutline size={24} color={theme.colors.redPrimary} />
    ) : null}
    {!title && subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
  </S.Wrapper>
)

export default Form
