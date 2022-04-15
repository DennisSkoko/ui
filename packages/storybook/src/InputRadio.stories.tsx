import { InputRadio } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/InputRadio',
  argTypes: { onChange: {} },
} as ComponentMeta<typeof InputRadio>

export const Default: ComponentStory<typeof InputRadio> = ({ onChange }) => (
  <>
    <InputRadio onChange={onChange} name="default" label="Foo" />
    <InputRadio onChange={onChange} name="default" label="Bar" />
  </>
)

export const Disabled: ComponentStory<typeof InputRadio> = ({ onChange }) => (
  <>
    <InputRadio onChange={onChange} name="disabled" label="Foo" />
    <InputRadio onChange={onChange} name="disabled" label="Bar" disabled />
  </>
)
