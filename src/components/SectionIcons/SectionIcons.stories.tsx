import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionIcons from '.'
import { mockIconsProps } from './mockData'

export default {
  title: 'SectionIcons',
  component: SectionIcons,
  args: {
    ...mockIconsProps
  }
} as ComponentMeta<typeof SectionIcons>

export const Default: ComponentStory<typeof SectionIcons> = (args) => (
  <SectionIcons {...args} />
)
