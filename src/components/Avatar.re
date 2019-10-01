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

module Styles = {
  open Css;

  let container =
    style([
      marginTop(px(50)),
      marginBottom(px(50)),
      borderRadius(`percent(50.0)),
      userSelect(`none),
    ]);

  let image =
    style([
      borderRadius(`percent(50.0)),
      height(px(128)),
      width(px(128)),
    ]);
};

[@react.component]
let make = (~link, ~src) =>
  <a className=Styles.container href=link>
    <img className=Styles.image alt="Avatar image" src />
  </a>;
