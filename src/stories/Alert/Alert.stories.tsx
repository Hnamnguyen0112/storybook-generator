import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Alert from './index'

export default {
  title: 'Stories/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
)

export const _Alert = Template.bind({})
_Alert.args = {}