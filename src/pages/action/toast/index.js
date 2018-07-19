import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import Toast from '../../../components/toast/index'

import './index.scss'

const INIT_STATE = {
  text: '一行文本',
  isOpen: false,
  iconSize: 100,
  iconColor: 'white',
  iconType: 'cancel',
  hiddenIcon: false
}

export default class ToastPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Toast Page'
  }

  constructor() {
    super(...arguments)
    this.state = INIT_STATE
  }

  handleClick = e => {
    const state = Object.assign(
      { ...INIT_STATE, isOpen: true },
      e.currentTarget.dataset
    )
    this.setState(state)
  }

  handleClickToast = () => {
    console.log('Click Toast', '默认行为被取消')
  }

  render() {
    const {
      isOpen,
      iconColor,
      iconSize,
      iconType,
      text,
      hiddenIcon
    } = this.state
    return (
      <View className='action-sheet__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-button'>
              <Button size='mini' onClick={this.handleClick}>
                Open Toast
              </Button>
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>只展示文本</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-button'>
              <Button
                size='mini'
                onClick={this.handleClick}
                data-text='只有文本'
                data-hidden-icon={true}>
                Open Toast
              </Button>
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>只显示Icon</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-button'>
              <Button data-text='' size='mini' onClick={this.handleClick}>
                Open Toast
              </Button>
            </View>
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>更改Icon</Text>
          </View>
          <View className='example__body'>
            <View className='example__body-button'>
              <Button
                data-icon-type='success'
                data-icon-size='80'
                size='mini'
                onClick={this.handleClick}>
                Open Toast
              </Button>
            </View>
          </View>
        </View>
        <Toast
          text={text}
          isOpen={isOpen}
          iconSize={iconSize}
          iconType={iconType}
          iconColor={iconColor}
          hiddenIcon={hiddenIcon} />
      </View>
    )
  }
}
