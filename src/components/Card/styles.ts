import styled from 'styled-components'

type ContainerType = {
  isVisible?: boolean
  isShowingFrontFace?: boolean
  disabled?: boolean
}

export const Container = styled.div<ContainerType>`
  border-radius: 10px;
  width: 20rem;
  height: 20rem;
  margin: 8px;
  cursor: pointer;
  font-size: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.1s ease-in-out;

  opacity: ${({ isVisible }): string => (isVisible ? '1' : '0')};

  pointer-events: ${({ isVisible, disabled }): string => {
    if (disabled || !isVisible) return 'none'
    return 'all'
  }};

  color: ${({ isShowingFrontFace, theme }): string =>
    isShowingFrontFace ? theme.cardBackFace : theme.cardFrontFace};

  background: ${({ isShowingFrontFace, theme }): string =>
    isShowingFrontFace
      ? theme.cardFrontFace + ' !important'
      : theme.cardBackFace};

  &:hover {
    background: ${({ theme }): string => theme.accent};
  }

  /* transform-style: preserve-3d;
  perspective: 1000px;
  &:active {
    transform: rotateY(180deg);
  } */
`
