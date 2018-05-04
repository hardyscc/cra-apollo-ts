import * as React from 'react'
import { shallow, mount } from 'enzyme'
import InputArea from '../InputArea'

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = mount(<InputArea onSubmit={null} />)
    expect(
      wrapper.containsAllMatchingElements([<input />, <button>Add</button>])
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
    wrapper.setState({ text: 'Octoberfest' })
    const addButton = wrapper.find('button')

    addButton.simulate('click')

    expect(addItemSpy).toBeCalled()
    expect(addItemSpy).toBeCalledWith('Octoberfest')
  })
})
