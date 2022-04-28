import { ComponentStory, ComponentMeta } from '@storybook/react'
import Form from '.'

export default {
  title: 'Form',
  component: Form,
  args: {
    srcImage: '/images/logo-2-codesec.svg',
    altText: 'Logo codesec',
    url: '/',
    subtitle: 'Subtitle Example'
  }
} as ComponentMeta<typeof Form>

export const Default: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const WithTitle: ComponentStory<typeof Form> = (args) => (
  <Form {...args} />
)

WithTitle.args = {
  title: 'Title Example',
  subtitle: 'Cadastre-se'
}
