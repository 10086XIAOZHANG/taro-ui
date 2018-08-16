import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtModalHeader from './header/index'
import AtModalAction from './action/index'
import AtModalContent from './content/index'

import './index.scss'

export default class AtModal extends Component {
  constructor (props) {
    super(...arguments)
    const { isOpened } = props
    this.state = {
      isOpened
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state.isOpened) {
      this.setState({
        isOpened
      })
    }
  }

  render () {
    const { isOpened } = this.state
    const { title, content, cancleText, confirmText } = this.props

    const rootClass = ['at-modal']

    if (isOpened) {
      rootClass.push('at-modal--active')
    }

    if (title || content) {
      const isRenderAction = cancleText || confirmText
      return (
        <View className={rootClass}>
          <View className='at-modal__overlay' />
          <View className='at-modal__container'>
            {title && (
              <AtModalHeader>
                <Text>{title}</Text>
              </AtModalHeader>
            )}
            {content && (
              <AtModalContent>
                <View className='content-simple'>
                  <Text>{content}</Text>
                </View>
              </AtModalContent>
            )}
            {isRenderAction && (
              <AtModalAction isSimple>
                {cancleText && (
                  <Button onClick={this.props.onCancle}>{cancleText}</Button>
                )}
                {confirmText && (
                  <Button onClick={this.props.onConfirm}>{confirmText}</Button>
                )}
              </AtModalAction>
            )}
          </View>
        </View>
      )
    }

    return (
      <View className={rootClass}>
        <View className='at-modal__overlay' />
        <View className='at-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

AtModal.propTypes = {
  title: PropTypes.string,
  onCancle: PropTypes.func,
  onConfirm: PropTypes.func,
  content: PropTypes.string,
  cancleText: PropTypes.string,
  confirmText: PropTypes.string,
}
