import { ComponentStory, ComponentMeta } from '@storybook/react'
import CompositionElement from '.'

export default {
  title: 'CompositionElement',
  component: CompositionElement,
  args: {}
} as ComponentMeta<typeof CompositionElement>

export const Default: ComponentStory<typeof CompositionElement> = () => <CompositionElement/>
