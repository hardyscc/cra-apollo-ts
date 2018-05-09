import * as React from 'react'
import InputArea from './InputArea'
import BeerList from './BeerList'

interface IProps {
  title?: string
}

interface IState {
  beers: string[]
}

class BeerListContainer extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    title: 'Beer List'
  }

  public state: IState = {
    beers: []
  }

  public render() {
    return (
      <React.Fragment>
        <InputArea onSubmit={this.addItem} />
        <BeerList items={this.state.beers} />
      </React.Fragment>
    )
  }

  private addItem = (name: string) => {
    this.setState({
      beers: [...this.state.beers, name]
    })
  }
}

export default BeerListContainer
