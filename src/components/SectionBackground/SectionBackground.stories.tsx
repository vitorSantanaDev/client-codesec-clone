import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionBackground from '.'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    backgroundImagePath: '/images/bg-hero.png'
  }
} as ComponentMeta<typeof SectionBackground>

export const Default: ComponentStory<typeof SectionBackground> = (args) => (
  <SectionBackground {...args} />
)
