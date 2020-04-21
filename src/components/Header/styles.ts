import styled, { css } from 'styled-components'

interface ContainerProps {
  size?: 'small' | 'large'
}

interface ActiveIndicatorProps {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`

export const ActiveIndicator = styled.div<ActiveIndicatorProps>`
  height: 2px;
  width: 73px;
  margin-top: 10px;

  ${props =>
    props.isActive &&
    css`
      background: #ff872c;
    `}
`
