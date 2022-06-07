import styled, { css, keyframes } from 'styled-components'
import { theme } from 'styles/theme/theme'

type LoadingProps = {
  isLoading: boolean
}

const animationStroker = keyframes`
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }

      25% {
        stroke-width: 1;
        stroke-dasharray: 100 1;
        fill: transparent;
      }

      60%,
      100% {
        stroke-width: 0;
        fill: #ffff;
      }

`
const animationEye = keyframes`
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }

      25% {
        stroke-width: 1;
        stroke-dasharray: 100 1;
        fill: transparent;
      }

      60%,
      100% {
        stroke-width: 0;
        fill: ${theme.colors.black};
      }

`

export const animationContainer = keyframes`
      0% {
        width: 100%;
      }
      100% {
        width: 0%;
      }

`

export const Wrapper = styled.div<LoadingProps>`
  ${({ theme, isLoading }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    z-index: 1000;

    top: 0;
    left: 0;
    position: absolute;
    background: ${theme.colors.redGradient};
    ${!isLoading
      ? css`
          animation: ${animationContainer} 0.5s ease forwards;
        `
      : ''}
    .eye {
      fill: transparent;
      animation: ${animationEye} 10s ease infinite alternate;
    }

    .letter {
      fill: transparent;
      animation: ${animationStroker} 10s ease infinite alternate;
    }

    .key {
      fill: transparent;
      animation: ${animationStroker} 10s ease infinite alternate;
    }
  `}
`
