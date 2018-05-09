import * as React from 'react'
import { Button, Input, Row, Col } from 'antd'

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
      <Row type="flex" justify="start" gutter={8}>
        <Col>
          <Input value={this.state.text} onChange={this.setText} />
        </Col>
        <Col>
          <Button type="primary" onClick={this.handleClick}>
            Add
          </Button>
        </Col>
      </Row>
    )
  }

  private setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value })
  }

  private handleClick = () => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text)
      this.setState({ text: '' })
    }
  }
}

export default InputArea
