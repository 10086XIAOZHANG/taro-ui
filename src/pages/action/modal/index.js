/* eslint taro/custom-component-children: 0 */
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import AtModal from '../../../components/modal/index'
import AtModalHeader from '../../../components/modal/header/index'
import AtModalContent from '../../../components/modal/content/index'
import AtModalAction from '../../../components/modal/action/index'
// import AtModalActionButton from '../../../components/modal/action//index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ModalPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Modal Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false
    }
  }

  handleClick = e => {
    const state = Object.assign({ isOpened: true }, e.currentTarget.dataset)
    this.setState(state)
  }

  closeModal = () => {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { isOpened } = this.state
    return (
      <View className='page'>
        <DocsHeader title='Modal 模态框'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Button onClick={this.handleClick}>打开 Modal</Button>
              </View>
            </View>
          </View>
        </View>

        <AtModal isOpened={isOpened}>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>内容区</AtModalContent>
          <AtModalAction>
            <Button className='test' onClick={this.closeModal}>取消</Button>
            <Button onClick={this.closeModal}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
