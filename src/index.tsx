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

import { Global } from '@emotion/core'
import React, { StrictMode } from 'react'
import { hydrate, render } from 'react-dom'
import { Avatar } from './components/Avatar'
import { Box } from './components/Box'
import { Flex } from './components/Flex'
import { Heading } from './components/Heading'
import { Link } from './components/Link'
import { Text } from './components/Text'
import { globalStyles } from './globalStyles'

const App: React.FC = (): JSX.Element => (
  <StrictMode>
    <Global styles={globalStyles} />
    <Flex margin="50px 0" justifyContent="center">
      <Avatar
        link="https://github.com/imbsky"
        src="https://www.gravatar.com/avatar/77ba9b23d10139187d11b3795c7a9164?s=256"
      />
    </Flex>
    <Heading h3 bold center>
      BSKY
    </Heading>
    <Flex margin="25px 0" justifyContent="center">
      <Box width="90%">
        <Text center>
          Just a guy who likes learning about various things. In my former days,
          I did video (2D and 3D, dynamic effects, simulations) and music
          production for more than five years, so I&apos;m a little bit
          knowledgeable in that field, too. On days off I enjoy driving my car
          and riding my motorcycle.
          <br />
          If you have any questions, please email me anytime.
        </Text>
      </Box>
    </Flex>
    <Box>
      <Text center>
        This website is licensed under the&nbsp;
        <Link href="https://github.com/imbsky/bsky-moe/blob/master/LICENSE">
          Apache License 2.0
        </Link>
        .
      </Text>
    </Box>
  </StrictMode>
)

const rootElement = document.getElementById('root') as HTMLDivElement

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
