import React, { useContext } from 'react'
import Card from '../../../components/Card'
import GameContext from '../GameContext'
import { Container, CardRow } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const GameCards: React.FC = () => {
  const {
    difficulty,
    firstSelectedCard,
    setFirstSelectedCard,
    secondSelectedCard,
    setSecondSelectedCard,
    iconFoundList,
    iconList,
  } = useContext(GameContext)

  const onSelectCard = (index: number) => (): void => {
    if (firstSelectedCard === -1) setFirstSelectedCard(index)
    else setSecondSelectedCard(index)
  }

  const onMapCards = (icon: string, index: number): React.ReactNode => {
    const onClick = onSelectCard(index)
    const wasNotFound = iconFoundList.indexOf(icon) === -1
    const isTheFirstSelectedCard = firstSelectedCard === index
    const isTheSecondSelectedCard = secondSelectedCard === index

    return (
      <Card
        key={index}
        onClick={onClick}
        isVisible={wasNotFound}
        isShowingFrontFace={isTheFirstSelectedCard || isTheSecondSelectedCard}
      >
        <FontAwesomeIcon icon={icon as IconProp} />
      </Card>
    )
  }

  const onGetSlicePortion = (rowNumber: number): number =>
    (difficulty / 4) * rowNumber

  return (
    <Container>
      <CardRow>
        {iconList
          .slice(onGetSlicePortion(0), onGetSlicePortion(1))
          .map(onMapCards)}
      </CardRow>

      <CardRow>
        {iconList
          .slice(onGetSlicePortion(1), onGetSlicePortion(2))
          .map(onMapCards)}
      </CardRow>

      <CardRow>
        {iconList
          .slice(onGetSlicePortion(2), onGetSlicePortion(3))
          .map(onMapCards)}
      </CardRow>

      <CardRow>
        {iconList
          .slice(onGetSlicePortion(3), onGetSlicePortion(4))
          .map(onMapCards)}
      </CardRow>
    </Container>
  )
}

export default GameCards
