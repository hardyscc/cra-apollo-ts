import * as React from 'react'
import InputArea from './InputArea'
import BeerList from './BeerList'

type Props = {}

type State = {
  beers: Array<any>
}

export default class BeerListContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  addItem(name: string) {
    this.setState({
      beers: [...this.state.beers, name]
    })
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <BeerList />
      </div>
    )
  }
}
