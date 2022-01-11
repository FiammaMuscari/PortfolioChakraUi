<p align="center">
  <a href="https://github.com/chakra-ui/chakra-ui">
    <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true" alt="Chakra logo" width="300" />
  </a>
</p>

<h1 align="center">Build Accessible React Apps with Speed ⚡️</h1>

<br>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@chakra-ui/react"/>
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/chakra-ui/chakra-ui.svg?logo=lgtm&logoWidth=18"/>
  <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@chakra-ui/react.svg?style=flat"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/chakra-ui/chakra-ui" />
  <a href="https://discord.gg/chakra-ui">
    <img alt="Discord" src="https://img.shields.io/discord/660863154703695893.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" />
  </a>
</p>
<br />

Chakra UI provides a set of accessible, reusable, and composable React
components that make it super easy to create websites and apps.

## Looking for the documentation? 📝

For older versions, head over here => https://v0.chakra-ui.com

Latest version (v1) => https://chakra-ui.com

## Installing Chakra UI

To use Chakra UI components, all you need to do is install the
`@chakra-ui/react` package and its peer dependencies:

```sh
$ yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5

# or

$ npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ChakraProvider` provided by
   **@chakra-ui/react**.

```jsx
import { ChakraProvider } from "@chakra-ui/react"

// Do this at the root of your application
function App({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you
can toggle between light and dark mode within your app.

2. Now you can start using components like so!:

```jsx
import { Button } from "@chakra-ui/react"

function Example() {
  return <Button>I just consumed some ⚡️Chakra!</Button>
}
```

## CodeSandbox Templates

- JavaScript Starter: https://codesandbox.io/s/chakra-ui-javascript-lzzg9
- TypeScript Starter: https://codesandbox.io/s/chakra-ui-typescript-pomi8
- NextJS TypeScript Starter:
  https://codesandbox.io/s/chakra-ui-next-js-typescript-kxvyr

## `create-react-app` Templates

[Check out our guide](https://chakra-ui.com/guides/integrations/with-cra) for
information on how to use our official `create-react-app` templates.

## Contributing

Feel like contributing? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.

Our docsite lives in a
[separate repo](https://github.com/chakra-ui/chakra-ui-docs). If you're
interested in contributing to the documentation, check out the
[docsite contribution guide](https://github.com/chakra-ui/chakra-ui-docs/blob/main/CONTRIBUTING.md).


## License

MIT © [Segun Adebayo](https://github.com/segunadebayo)
