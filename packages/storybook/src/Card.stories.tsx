import { Card, Heading, Text } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Card',
  component: Card
} as ComponentMeta<typeof Card>

export const Default: ComponentStory<typeof Card> = () => (
  <Card>
    <Heading level='2'>Simple card</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus viverra
      accumsan in. Sem integer vitae justo eget. Eu scelerisque felis imperdiet proin fermentum.
      Euismod lacinia at quis risus sed vulputate. Sollicitudin aliquam ultrices sagittis orci.
      Ut tellus elementum sagittis vitae et leo. Posuere ac ut consequat semper. Malesuada proin
      libero nunc consequat. Tempor orci dapibus ultrices in iaculis nunc sed.
    </Text>
  </Card>
)
