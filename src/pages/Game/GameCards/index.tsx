import React, { useContext, useEffect } from 'react'
import GameContext from '../GameContext'
import { Container, CardItem } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const GameCards: React.FC = () => {
  const {
    firstSelectedCard,
    setFirstSelectedCard,
    secondSelectedCard,
    setSecondSelectedCard,
    iconFoundList,
    setIconFoundList,
    iconList,
    isPaused,
    isCheckingCards,
    setIsCheckingCards,
  } = useContext(GameContext)

  const onSelectCard = (index: number) => (): void => {
    if (isCheckingCards) return
    if (firstSelectedCard === -1) setFirstSelectedCard(index)
    else setSecondSelectedCard(index)
  }

  const onCheckIfFoundIcon = (): void => {
    setIsCheckingCards(true)
    const firstSelectedCardIcon = iconList[firstSelectedCard]
    const secondSelectedCardIcon = iconList[secondSelectedCard]

    if (firstSelectedCardIcon === secondSelectedCardIcon) {
      setTimeout(() => {
        const iconFoundListClone = [...iconFoundList]
        iconFoundListClone.push(firstSelectedCardIcon)
        setIconFoundList(iconFoundListClone)
        setIsCheckingCards(false)
      }, [1000])
    } else {
      setTimeout(() => {
        setFirstSelectedCard(-1)
        setSecondSelectedCard(-1)
        setIsCheckingCards(false)
      }, [1000])
    }
  }

  useEffect(onCheckIfFoundIcon, [secondSelectedCard])

  return (
    <Container>
      {iconList.map(
        (icon: string, index: number): React.ReactNode => {
          const wasNotFound = iconFoundList.indexOf(icon) === -1
          const isTheFirstSelectedCard = firstSelectedCard === index
          const isTheSecondSelectedCard = secondSelectedCard === index
          const onClick = onSelectCard(index)

          const isShowingFrontFace =
            isTheFirstSelectedCard || isTheSecondSelectedCard

          return (
            <CardItem
              key={index}
              onClick={onClick}
              isVisible={wasNotFound}
              isShowingFrontFace={isShowingFrontFace}
              disabled={isPaused || isShowingFrontFace}
            >
              <FontAwesomeIcon icon={icon as IconProp} />
            </CardItem>
          )
        },
      )}
    </Container>
  )
}

export default GameCards
