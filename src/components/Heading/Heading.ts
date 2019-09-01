// Copyright 2019 BSKY
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import styled from '@emotion/styled'

type Props = {
  as?: string
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

const createType = (props: Props): string =>
  Object.keys(props).filter((tag: string): boolean =>
    availableTags.includes(tag),
  )[0]

const switchFontSize = (props: Props): string => {
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

export const Heading = styled.p<Props>`
  font-size: ${(props): string => switchFontSize(props)};
  font-weight: ${({ bold }): string => (bold ? 'bold' : 'normal')};
  text-align: ${({ center }): string => (center ? 'center' : 'initial')};
`
