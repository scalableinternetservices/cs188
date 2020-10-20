import { Meta, Story } from '@storybook/react'
import * as React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default {
  title: 'Demo',
} as Meta

const DemoTemplate: Story = args => <Counter {...args} />

export const Demo = DemoTemplate.bind({})
Demo.args = {
  surveyId: 1,
}
