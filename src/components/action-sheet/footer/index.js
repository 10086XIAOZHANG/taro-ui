import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import './index.scss'

export default class AtActionSheetFooter extends Component {
  render () {
    const { onClick } = this.props
    return (
      <View className='at-action-sheet-footer' onClick={onClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
