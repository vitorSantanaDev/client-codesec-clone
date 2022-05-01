import { ComponentStory, ComponentMeta } from '@storybook/react'
import SectionBackground from 'components/SectionBackground'
import SectionHero from '.'

export default {
  title: 'SectionHero',
  component: SectionHero,
  args: {
    subtitle: 'Subtitle Example content',
    subtitleIcon: true,
    subtitleIconUrl: '/images/icon-key.svg',
    title: 'Aprenda Web Hacking do zero ao avançado',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra.',
    linkIcon: '/images/icon-eye.svg',
    linkText: 'Ler mais'
  }
} as ComponentMeta<typeof SectionHero>

export const Default: ComponentStory<typeof SectionHero> = (args) => (
  <SectionBackground backgroundImagePath="/images/bg-hero.png">
    <SectionHero {...args} />
  </SectionBackground>
)
