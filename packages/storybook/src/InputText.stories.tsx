import { InputText } from '@dennisskoko/ui'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/InputText',
  argTypes: { onChange: {} },
} as ComponentMeta<typeof InputText>

export const Default: ComponentStory<typeof InputText> = ({ onChange }) => (
  <InputText onChange={onChange} />
)

export const Invalid: ComponentStory<typeof InputText> = ({ onChange }) => (
  <InputText onChange={onChange} invalid />
)

export const Disabled: ComponentStory<typeof InputText> = ({ onChange }) => (
  <InputText onChange={onChange} disabled />
)
