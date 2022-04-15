import { GlobalStyle } from '@dennisskoko/ui'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]
