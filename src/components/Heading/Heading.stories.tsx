import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Aprenda Web Hacking do zero ao avançado',
    size: 'huge',
    as: 'h1'
  }
} as ComponentMeta<typeof Heading>

export const Huge: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

export const Large: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Large.args = {
  size: 'large',
  as: 'h2'
}

export const Medium: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Medium.args = {
  size: 'medium',
  as: 'h3'
}

export const Small: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Small.args = {
  size: 'small',
  as: 'h4'
}
