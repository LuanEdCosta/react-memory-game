import styled, { css } from 'styled-components'

const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background: ${({ theme }): string => theme.accent};
  margin-left: 16px;
  min-width: 25%;

  &:hover {
    transform: scale(1.02);
  }
`

export const PrimaryAction = styled.div`
  ${Button}
  background: ${({ theme }): string => theme.accent};
`

export const SecondaryAction = styled.div`
  ${Button}
  background: rgba(0,0,0,0.3);
`
