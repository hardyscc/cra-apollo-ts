import * as React from 'react'
import InputArea from './InputArea'
import BeerList from './BeerList'

interface IState {
  beers: string[]
}

class BeerListContainer extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      beers: []
    }
    this.addItem = this.addItem.bind(this)
  }

  public render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <BeerList items={this.state.beers} />
      </div>
    )
  }

  private addItem(name: string) {
    this.setState({
      beers: [...this.state.beers, name]
    })
  }
}

export default BeerListContainer
