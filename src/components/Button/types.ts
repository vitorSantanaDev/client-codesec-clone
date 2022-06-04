import { ReactNode, SyntheticEvent } from 'react'

export type IViewProps = {
  children: ReactNode
  handleClick?: (event?: SyntheticEvent) => void
  size?: 'large' | 'medium' | 'small'
  type?: 'button' | 'submit' | 'reset'
}
