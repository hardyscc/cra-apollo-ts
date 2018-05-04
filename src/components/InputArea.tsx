import * as React from 'react'

interface IProps {
  onSubmit: (name: string) => void
}

interface IState {
  text: string
}

class InputArea extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      text: ''
    }
    this.setText = this.setText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  public render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  private setText(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value })
  }

  private handleClick() {
    this.props.onSubmit(this.state.text)
  }
}

export default InputArea
