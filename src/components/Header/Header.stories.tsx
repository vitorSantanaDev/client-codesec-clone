import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '.'
import { mockHeaderProps } from './mockData'

export default {
  title: 'Header',
  component: Header,
  args: {
    ...mockHeaderProps
  }
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)
