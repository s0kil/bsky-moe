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
import React, { Profiler, StrictMode } from 'react'
import axe from 'react-axe'
import ReactDOM, { hydrate, render } from 'react-dom'
import { Avatar } from './components/Avatar'
import { Box } from './components/Box'
import { Flex } from './components/Flex'
import { Heading } from './components/Heading'
import { Link } from './components/Link'
import { Text } from './components/Text'
import { globalStyles } from './globalStyles'
import { onRender } from './utils/onRender'

const App: React.FC = (): JSX.Element => (
  <StrictMode>
    <Profiler id="root" onRender={onRender}>
      <Global styles={globalStyles} />
      <Box margin="0 1rem">
        <Box as="main" role="main">
          <Flex margin="50px 0" justifyContent="center">
            <Avatar
              link="https://github.com/imbsky"
              src="https://www.gravatar.com/avatar/77ba9b23d10139187d11b3795c7a9164?s=256"
            />
          </Flex>
          <Heading as="h3" h3 bold center>
            BSKY
          </Heading>
          <Flex margin="25px 0" justifyContent="center">
            <Box maxWidth="960px">
              <Text center>
                A young self-taught software engineer with&nbsp;
                {new Date().getFullYear() - 2017}+ years of industry experience
                and as a hidden fact, I&apos;m a motorsports enthusiast.
                I&apos;m acting like an architect to keep the code maintainable.
                But I maintain a healthy balance between perfectionism and
                actually getting stuff done. In other words, I focus on results
                over process. And I have a cursory knowledge of functional
                programming paradigms, runtime performance optimizations,
                improving development experience with the modern tooling, and
                refactoring code into modules, etc. I also have&nbsp;
                {new Date().getFullYear() - 2014}+ years of experience in video
                and music production, so I&apos;m a little bit knowledgeable in
                that field, too. If you have any questions, please email me at
                any time.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box as="footer" role="contentinfo">
          <Text center>
            This website is licensed under the&nbsp;
            <Link href="https://github.com/imbsky/bsky-moe/blob/master/LICENSE">
              Apache License 2.0
            </Link>
            .
          </Text>
        </Box>
      </Box>
    </Profiler>
  </StrictMode>
)

const rootElement = document.getElementById('root') as HTMLDivElement

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
