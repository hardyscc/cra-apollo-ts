import * as React from 'react'

class TestRef extends React.Component<{}> {
  private input: React.RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props)
    this.input = React.createRef()
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (this.input.current) {
      alert('A name was submitted: ' + this.input.current.value)
    }
    event.preventDefault()
  }
}

export default TestRef
