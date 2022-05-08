import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionBackground from 'components/SectionBackground'
import SectionHero from '.'
import { mockSectionHeroProps } from './mockData'

export default {
  title: 'SectionHero',
  component: SectionHero,
  args: {
    ...mockSectionHeroProps
  }
} as ComponentMeta<typeof SectionHero>

export const Default: ComponentStory<typeof SectionHero> = (args) => (
  <SectionBackground backgroundImagePath="/images/bg-hero.png">
    <SectionHero {...args} />
  </SectionBackground>
)
