import { Button } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  argTypes: { onClick: {} },
} as ComponentMeta<typeof Button>

export const Color: ComponentStory<typeof Button> = ({ onClick }) => (
  <>
    <Button color='default' onClick={onClick}>Default</Button>
    <Button color='primary' onClick={onClick}>Primary</Button>
  </>
)

export const Disabled = ({ onClick }) => (
  <Button disabled onClick={onClick}>Disabled</Button>
)
