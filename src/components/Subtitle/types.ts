import { ReactNode } from 'react'

export interface IViewProps {
  children: ReactNode
  color?: 'redGradient' | 'redDark' | 'redLight' | 'redPrimary'
  uppercase?: boolean
  icon?: boolean
  iconUrl?: string
}
