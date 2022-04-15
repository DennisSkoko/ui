import { Text } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Size: ComponentStory<typeof Text> = () => (
  <>
    <Text size='sm'>Small size</Text>
    <Text size='md'>Normal size (default)</Text>
    <Text size='lg'>Large size</Text>
  </>
)

export const Centered: ComponentStory<typeof Text> = () => (
  <Text centered>Centered text</Text>
)

export const Color: ComponentStory<typeof Text> = () => (
  <>
    <Text color="default">Default color</Text>
    <Text color="primary">Primary color</Text>
  </>
)
