import * as React from 'react'
import { shallow } from 'enzyme'
import BeerListContainer from '../BeerListContainer'
import InputArea from '../InputArea'
import BeerList from '../BeerList'

describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer />)
    expect(
      wrapper.containsAllMatchingElements([<InputArea />, <BeerList />])
    ).toBeTruthy()
  })

  it('should start with an empty list', () => {
    const wrapper = shallow(<BeerListContainer />)
    expect(wrapper.state('beers')).toEqual([])
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer />)
    wrapper.instance().addItem('Sam Adams')
    expect(wrapper.state('beers')).toEqual(['Sam Adams'])
  })

  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<BeerListContainer />)
    const inputArea = wrapper.find(InputArea)
    const addItem = wrapper.instance().addItem
    expect(inputArea.prop('onSubmit')).toEqual(addItem)
  })
})
