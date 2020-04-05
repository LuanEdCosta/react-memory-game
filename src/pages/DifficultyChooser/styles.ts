import styled from 'styled-components'
import DifficultyItem from '../../components/DifficultyItem'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const MenuContainer = styled.div`
  border: 2px solid ${({ theme }): string => theme.primaryText};
  border-radius: 5px;
  width: 50%;
  min-width: 400px;
  overflow: hidden;
  box-shadow: -2px 2px 24px 1px rgba(0, 0, 0, 0.2);
`

export const AppName = styled.h1`
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }): string => theme.primaryText};
  color: ${({ theme }): string => theme.background};
  padding: 8px 0;
`

export const MenuContent = styled.div`
  padding: 3.2rem 2.4rem;
`

export const DifficultyLabel = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
`

export const Difficulty = styled(DifficultyItem)`
  width: 25%;
  margin: 8px;
  text-align: center;
  flex: 1;
`

export const DifficultyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
`

export const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

export const PlayButton = styled.div`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid ${({ theme }): string => theme.primaryText};
  padding: 16px;
  text-align: center;
  border-radius: 5px;
  margin-left: auto;
  width: 50%;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }): string => theme.accent};
  }
`
