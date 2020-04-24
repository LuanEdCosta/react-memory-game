import styled, {
  css,
  FlattenInterpolation,
  DefaultTheme,
  ThemeProps,
} from 'styled-components'

type CssType = FlattenInterpolation<ThemeProps<DefaultTheme>> | null

const ItemSelected = css`
  background: ${({ theme }): string => theme.primaryText} !important;
  color: ${({ theme }): string => theme.background} !important;
`

export const Container = styled.div<{ isSelected: boolean }>`
  padding: 8px 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  border: 2px solid ${({ theme }): string => theme.primaryText};
  ${({ isSelected }): CssType => (isSelected ? ItemSelected : null)}
  &:hover {
    transform: translateY(-8px);
  }
`

export const DificultyName = styled.div``

export const NumberOfCards = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`
