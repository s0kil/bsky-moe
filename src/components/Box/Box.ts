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
  height?: string
  margin?: string
  padding?: string
  width?: string
}

export const Box = styled.div<Props>`
  box-sizing: border-box;
  height: ${({ height }): string => height || 'auto'};
  margin: ${({ margin }): string => margin || '0'};
  padding: ${({ padding }): string => padding || '0'};
  width: ${({ width }): string => width || 'auto'};
`
