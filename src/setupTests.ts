import 'dom-testing-library/extend-expect'

import 'jest-enzyme'
import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// remove after antd >3.5.0
// see https://github.com/ant-design/ant-design/pull/10363
jest.spyOn(console, 'warn').mockImplementation(() => {})