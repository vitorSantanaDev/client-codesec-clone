import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '.'
import { mockDataFooterProps } from './mockData'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    ...mockDataFooterProps
  }
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
)
