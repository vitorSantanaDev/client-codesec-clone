import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    id: 'email',
    value: '',
    type: 'email',
    name: 'email',
    valueIsValid: false,
    placeholder: 'Digite seu email',
    handleChange: ({ target }) => console.log(target)
  }
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
}

export const ErrorMessage: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
}

ErrorMessage.args = {
  errorMessage: 'Aqui vai a mensagem de erro!',
  valueIsValid: false
}

export const ValueIsValid: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
}

ValueIsValid.args = {
  valueIsValid: true,
  type: 'text',
  name: 'name'
}
