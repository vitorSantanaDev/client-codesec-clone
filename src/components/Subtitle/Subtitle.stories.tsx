import { ComponentStory, ComponentMeta } from '@storybook/react'
import Subtitle from '.'

export default {
  title: 'Subtitle',
  component: Subtitle,
  args: {
    children: 'Subtitle example',
    icon: true,
    iconUrl: '/images/icon-key.svg'
  }
} as ComponentMeta<typeof Subtitle>

export const Default: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
)
