import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { Text } from '@tarojs/components'
import './index.scss'

export default class AtIcon extends Taro.Component {
  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const { value = '', size, color } = this.props

    const rootStyle = {
      fontSize: `${size}px`,
      color,
    }

    const rootClassName = ['at-icon', `at-icon-${value}`]
    // console.log('value====', value)
    return (
      <Text className={rootClassName} style={rootStyle}></Text>
    )
  }
}
AtIcon.defaultProps = {
  color: '',
  size: '24',
  onClick: () => { }
}
AtIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func
}

