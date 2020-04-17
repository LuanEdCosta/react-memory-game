import React, { memo } from 'react'
import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CardProps = {
  children: React.ReactNode
  onClick: () => void
  isShowingFrontFace?: boolean
  isVisible?: boolean
}

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    onClick,
    isShowingFrontFace = false,
    isVisible = true,
  } = props

  return (
    <Container
      onClick={onClick}
      isVisible={isVisible}
      isShowingFrontFace={isShowingFrontFace}
    >
      {isShowingFrontFace ? (
        children
      ) : (
        <FontAwesomeIcon icon="question-circle" />
      )}
    </Container>
  )
}

export default memo(Card)
