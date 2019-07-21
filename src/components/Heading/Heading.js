import styled from '@emotion/styled'

const availableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const createType = props =>
  Object.keys(props).filter(tag => availableTags.includes(tag))[0]

const switchFontSize = props => {
  const type = createType(props)

  switch (type) {
    case 'h1':
      return '2em'
    case 'h2':
      return '1.5em'
    case 'h3':
      return '1.3em'
    case 'h4':
      return '1em'
    case 'h5':
      return '0.8em'
    case 'h6':
      return '0.7em'
    default:
      return '1em'
  }
}

export const Heading = styled.p`
  font-size: ${props => switchFontSize(props)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`
