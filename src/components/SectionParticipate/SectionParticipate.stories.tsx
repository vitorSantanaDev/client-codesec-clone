import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionParticipate from '.'
import { mockDataSection } from './mockData'

export default {
  title: 'SectionParticipate',
  component: SectionParticipate,
  args: {
    ...mockDataSection
  }
} as ComponentMeta<typeof SectionParticipate>

export const Default: ComponentStory<typeof SectionParticipate> = (args) => (
  <SectionParticipate {...args} />
)
