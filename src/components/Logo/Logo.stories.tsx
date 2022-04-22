import { ComponentStory, ComponentMeta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    url: '/',
    srcImage: '/images/logo-2-codesec.svg',
    altText: 'Logo codesec'
  }
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const SecondaryLogo: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
)

SecondaryLogo.args = {
  srcImage: '/images/codesec-logo.svg'
}
