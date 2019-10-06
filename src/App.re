/*
 Copyright 2019 BSKY

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

%raw
"require('modern-css-reset')";

Css.(
  global(
    "body",
    [
      fontFamily(
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      ),
      unsafe("-webkit-font-smoothing", "antialiased"),
      unsafe("-moz-osx-font-smoothing", "grayscale"),
    ],
  )
);

[@react.component]
let make = () =>
  <Container>
    <Flex center=true>
      <Avatar
        link="https://github.com/imbsky"
        src="https://www.gravatar.com/avatar/77ba9b23d10139187d11b3795c7a9164?s=256"
      />
    </Flex>
    <Heading bold=true center=true> {React.string("BSKY")} </Heading>
    <Flex center=true>
      <Biography>
        <Paragraph center=true>
          {React.string("Nothing to see here.")}
        </Paragraph>
      </Biography>
    </Flex>
    <Box>
      <Paragraph center=true>
        {React.string("This website is licensed under the ")}
        <Link href="https://github.com/imbsky/bsky-moe/blob/master/LICENSE">
          {React.string("Apache License 2.0")}
        </Link>
        {React.string(".")}
      </Paragraph>
    </Box>
  </Container>;
