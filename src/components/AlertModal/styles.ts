import styled from 'styled-components'

export const Container = styled.div<{ isShowing?: boolean }>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${({ isShowing }): string => (isShowing ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: display 0.2s ease-in-out;
  user-select: none;
  box-shadow: -2px 2px 16px 1px rgba(0, 0, 0, 0.5);
`

export const Dialog = styled.div`
  background: ${({ theme }): string => theme.background};
  border-radius: 5px;
  width: 33%;
  min-width: 300px;
`

export const TitleContainer = styled.div`
  padding: 12px 12px 12px 24px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  flex: 1;
`

export const CloseButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }): string => theme.accent};
  }
`

export const Message = styled.div`
  padding: 24px;
`

export const Footer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
`
