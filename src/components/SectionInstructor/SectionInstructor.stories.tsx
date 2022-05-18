import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionInstructor from '.'
import { mockDataSectionInstructor } from './mockData'

export default {
  title: 'SectionInstructor',
  component: SectionInstructor,
  args: {
    ...mockDataSectionInstructor
  }
} as ComponentMeta<typeof SectionInstructor>

export const Default: ComponentStory<typeof SectionInstructor> = (args) => (
  <SectionInstructor {...args} />
)
