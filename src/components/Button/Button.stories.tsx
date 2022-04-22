import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Quero me cadastrar'
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)
