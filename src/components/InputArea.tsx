import * as React from 'react'

interface IProps {
  onSubmit: (name: string) => void
}

interface IState {
  text: string
}

class InputArea extends React.Component<IProps, IState> {
  public state: IState = {
    text: ''
  }

  public render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  private setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value })
  }

  private handleClick = () => {
    this.props.onSubmit(this.state.text)
  }
}

export default InputArea
