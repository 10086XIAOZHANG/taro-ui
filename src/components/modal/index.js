import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import AtModalHeader from './header/index'
import AtModalAction from './action/index'
import AtModalContent from './content/index'

import './index.scss'

export default class AtModal extends Taro.Component {
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
    const {
      title,
      content,
      cancleText,
      confirmText
    } = this.props

    const rootClass = ['at-modal']

    if (isOpened) {
      rootClass.push('at-modal--active')
    }


    if (title) {
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
              <AtModalAction>
                {cancleText && <Button onClick={this.props.onCancle}>{cancleText}</Button>}
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
