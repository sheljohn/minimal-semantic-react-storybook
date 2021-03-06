import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

const stories = storiesOf('Button', module);

stories.add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

stories.add('with some emoji', () => (
  <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
));