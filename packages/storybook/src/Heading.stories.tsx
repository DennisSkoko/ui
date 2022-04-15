import { Heading } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

export const Level: ComponentStory<typeof Heading> = () => (
  <>
    <Heading level='1'>Heading level 1 (default)</Heading>
    <Heading level='2'>Heading level 2</Heading>
    <Heading level='3'>Heading level 3</Heading>
    <Heading level='4'>Heading level 4</Heading>
    <Heading level='5'>Heading level 5</Heading>
    <Heading level='6'>Heading level 6</Heading>
  </>
)

export const Color: ComponentStory<typeof Heading> = () => (
  <>
    <Heading color="default">Default color</Heading>
    <Heading color="primary">Primary color</Heading>
  </>
)

export const Centered: ComponentStory<typeof Heading> = () => (
  <Heading centered>Centered text</Heading>
)
