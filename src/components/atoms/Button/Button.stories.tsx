import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Button} from './Button'

const config: ComponentMeta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
}

export default config

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Normal = Template.bind({})
Normal.args = {
  label: 'ボタンだよ'
}
