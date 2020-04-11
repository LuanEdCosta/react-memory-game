import styled from 'styled-components'

type ContainerType = {
  isVisible: boolean
}

export const Container = styled.div<ContainerType>`
  border-radius: 5px;
  width: 120px;
  height: 120px;
  margin: 8px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
export const CardBackface = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
