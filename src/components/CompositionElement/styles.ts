import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    width: 352px;
    height: 4px;

    background: #edeff0;
    box-shadow: 0px 0px 177px 4px rgba(232, 55, 82, 0.7),
      0px 0px 96px 18px rgba(232, 55, 82, 0.5),
      0px 0px 14px 1px rgba(232, 55, 82, 0.8), 0px 0px 4px 1px #e83752;
    border-radius: 8px;
  `}
`
