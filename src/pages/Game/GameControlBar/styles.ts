import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

const ButtonHeight = 42

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  background: ${({ theme }): string => theme.controlBar};
  user-select: none;
  padding: 0 24px;
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const BackButton = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid ${({ theme }): string => theme.secondaryText};
  min-height: ${ButtonHeight}px;
  min-width: ${ButtonHeight}px;
  font-size: 2rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }): string => theme.accent};
  }
`

export const DifficultyIndicator = styled.div``

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
`

export const TimerText = styled.span``

export const Timer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  ${TimerText} {
    margin-left: 8px;
  }
`

export const ButtonText = styled.span``

export const Button = styled.div`
  display: flex;
  align-items: center;
  height: ${ButtonHeight}px;
  padding: 0 24px;
  border-radius: 5px;
  border: 1px solid ${({ theme }): string => theme.secondaryText};
  cursor: pointer;
  transition: background, border 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }): string => theme.accent};
  }

  ${ButtonText} {
    margin-left: 16px;
  }
`

export const PlayPauseButton = styled(Button)`
  margin-right: 8px;
`

const DisabledButtonStyle = css`
  background: transparent !important;
  border: 1px solid transparent;
  cursor: not-allowed;
`

export const RestartButton = styled(Button)<{ isPaused?: boolean }>`
  ${({ isPaused }): FlattenSimpleInterpolation | null =>
    !isPaused ? DisabledButtonStyle : null}
`
