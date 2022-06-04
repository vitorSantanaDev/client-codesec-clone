import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
  args: {
    isLoading: true
  }
} as ComponentMeta<typeof Loading>

export const IsLoading: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
)

export const NotLoading: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
)

NotLoading.args = {
  isLoading: false
}
