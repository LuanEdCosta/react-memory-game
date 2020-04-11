import React, { useContext } from 'react'
import Card from '../../../components/Card'
import GameContext from '../GameContext'
import { Container, CardRow } from './styles'

const imageUri =
  'https://images.unsplash.com/photo-1585991519035-72443f3920ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'

const ROWS_NUMBER = 4

const GameCards: React.FC = () => {
  const { difficulty } = useContext(GameContext)

  const onRenderCards = (): React.ReactNodeArray => {
    const numOfCards = difficulty / ROWS_NUMBER
    const cardContainerList = []

    for (let i = 0; i < ROWS_NUMBER; i++) {
      const cardList = []

      for (let j = 0; j < numOfCards; j++) {
        cardList.push(
          <Card
            key={j}
            imageUri="https://source.unsplash.com/random"
            onClick={(): void => undefined}
          />,
        )
      }

      cardContainerList.push(<CardRow key={i}>{cardList}</CardRow>)
    }

    return cardContainerList
  }

  return <Container>{onRenderCards()}</Container>
}

export default GameCards
