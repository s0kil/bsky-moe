import styled from '@emotion/styled'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  bold?: boolean
  center?: boolean
}

const availableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const createType = (props: object): string =>
  Object.keys(props).filter((tag: string): boolean =>
    availableTags.includes(tag),
  )[0]

const switchFontSize = (props: object): string => {
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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Heading = styled.p<Props>`
  font-size: ${props => switchFontSize(props)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
