import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionAbout from '.'
import { mockSectionAboutProps } from './mockData'

export default {
  title: 'SectionAbout',
  component: SectionAbout,
  args: {
    ...mockSectionAboutProps
  }
} as ComponentMeta<typeof SectionAbout>

export const Default: ComponentStory<typeof SectionAbout> = (args) => (
  <SectionAbout {...args} />
)
