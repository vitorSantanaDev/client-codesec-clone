import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionHowItWorks from '.'
import { mockDataSectionProps } from './mockData'

export default {
  title: 'SectionHowItWorks',
  component: SectionHowItWorks,
  args: {
    ...mockDataSectionProps
  }
} as ComponentMeta<typeof SectionHowItWorks>

export const Default: ComponentStory<typeof SectionHowItWorks> = (args) => (
  <SectionHowItWorks {...args} />
)
