import React, { memo } from 'react'
import { Container, Image, CardBackface } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CardProps = {
  imageUri: string
  onClick: () => void
  isShowing?: boolean
  isVisible?: boolean
}

const Card: React.FC<CardProps> = (props) => {
  const { imageUri, onClick, isShowing = false, isVisible = true } = props

  return (
    <Container onClick={onClick} isVisible={isVisible}>
      <Image src={imageUri} />
      {/* <CardBackface>
        <FontAwesomeIcon icon="play" />
      </CardBackface> */}
    </Container>
  )
}

export default memo(Card)
