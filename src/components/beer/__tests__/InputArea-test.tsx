import * as React from 'react'
import { shallow, mount } from 'enzyme'
import InputArea from '../InputArea'
import { Button, Input } from 'antd'

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = mount(<InputArea onSubmit={null} />)
    expect(
      wrapper.containsAllMatchingElements([<Input />, <Button>Add</Button>])
    ).toBeTruthy()
  })

  it('should accept input', () => {
    const wrapper = mount(<InputArea onSubmit={null} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'Resin' } })
    expect(wrapper.state('text')).toEqual('Resin')
    expect(wrapper.find('input').prop('value')).toEqual('Resin')
  })

  it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = jest.fn()
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />)
    const addButton = wrapper.find('Button')

    wrapper.setState({ text: '' })
    addButton.simulate('click')
    expect(addItemSpy).toHaveBeenCalledTimes(0)

    wrapper.setState({ text: 'Octoberfest' })
    addButton.simulate('click')
    expect(addItemSpy).toBeCalled()
    expect(addItemSpy).toBeCalledWith('Octoberfest')
  })
})
