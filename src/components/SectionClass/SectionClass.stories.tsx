import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionClass from '.'
import { mockDataSectionClassProps } from './mockData'

export default {
  title: 'SectionClass',
  component: SectionClass,
  args: {
    ...mockDataSectionClassProps
  }
} as ComponentMeta<typeof SectionClass>

export const Default: ComponentStory<typeof SectionClass> = (args) => (
  <SectionClass {...args} />
)
