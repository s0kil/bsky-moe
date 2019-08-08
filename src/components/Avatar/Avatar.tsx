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
import React from 'react'
import { Image } from './Image'

type Props = {
  link: string
  src: string
}

const Container = styled.a`
  user-select: none;
`

export const Avatar: React.FC<Props> = ({ link, src }): JSX.Element => (
  <Container href={link}>
    <Image alt="avatar" src={src} size="128px" />
  </Container>
)
