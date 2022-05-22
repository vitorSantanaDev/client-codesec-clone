import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionTestimonials from '.'
import { mockDataSectionTestimonials } from './mockData'

export default {
  title: 'SectionTestimonials',
  component: SectionTestimonials,
  args: {
    ...mockDataSectionTestimonials
  }
} as ComponentMeta<typeof SectionTestimonials>

export const Default: ComponentStory<typeof SectionTestimonials> = (args) => (
  <SectionTestimonials {...args} />
)
