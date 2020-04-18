import React, { memo } from 'react'
import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CardProps = {
  children: React.ReactNode
  onClick: () => void
  isShowingFrontFace?: boolean
  isVisible?: boolean
  className?: string
  disabled?: boolean
}

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    onClick,
    isShowingFrontFace = false,
    isVisible = true,
    className,
    disabled = false,
  } = props

  return (
    <Container
      isVisible={isVisible}
      className={className}
      isShowingFrontFace={isShowingFrontFace}
      onClick={onClick}
      disabled={disabled}
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
