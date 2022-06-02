import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionFaq from '.'
import { mockDataSectionFaq } from './mockData'

export default {
  title: 'SectionFaq',
  component: SectionFaq,
  args: {
    ...mockDataSectionFaq
  }
} as ComponentMeta<typeof SectionFaq>

export const Default: ComponentStory<typeof SectionFaq> = (args) => (
  <SectionFaq {...args} />
)
