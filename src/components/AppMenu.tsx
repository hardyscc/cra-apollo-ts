import * as React from 'react'
import { Menu } from 'antd'
import { RouteComponentProps } from 'react-router'
import { Link, withRouter } from 'react-router-dom'

class AppMenu extends React.Component<RouteComponentProps<any>> {
  public render() {
    const { location } = this.props
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        className="menu-box"
        selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Stock List</Link>
        </Menu.Item>
        <Menu.Item key="/beer">
          <Link to="/beer">Beer List</Link>
        </Menu.Item>
        <Menu.Item key="/test">
          <Link to="/test">Testing</Link>
        </Menu.Item>
        <Menu.Item key="/layout">
          <Link to="/layout">Layout</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(AppMenu)
