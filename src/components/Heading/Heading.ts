import styled from '@emotion/styled'

type Props = {
  type: string
  bold?: boolean
  center?: boolean
}

const switchFontSize = (type: string): string => {
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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Heading = styled.p<Props>`
  font-size: ${({ type }) => switchFontSize(type)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
