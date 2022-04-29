import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from '.'

export default {
  title: 'Container',
  component: Container,
  args: {
    children: <h1>Nex app</h1>
  }
} as ComponentMeta<typeof Container>

export const Default: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)
