import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionHacker from '.'
import { mockDataSectionHacker } from './mockData'

export default {
  title: 'SectionHacker',
  component: SectionHacker,
  args: {
    ...mockDataSectionHacker
  }
} as ComponentMeta<typeof SectionHacker>

export const Default: ComponentStory<typeof SectionHacker> = (args) => (
  <SectionHacker {...args} />
)
