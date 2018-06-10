import * as React from 'react'
import { Form, Input, Row, Col } from 'antd'

class TestRef extends React.Component<{}> {
  private input: React.RefObject<Input>

  constructor(props: {}) {
    super(props)
    this.input = React.createRef()
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row type="flex" gutter={8}>
          <Col>
            <Input type="text" ref={this.input} />
          </Col>
          <Col>
            <Input type="submit" value="Submit" />
          </Col>
        </Row>
      </Form>
    )
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (this.input.current) {
      alert('A name was submitted: ' + this.input.current.input.value)
    }
    event.preventDefault()
  }
}

export default TestRef
