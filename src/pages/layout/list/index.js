import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ListPage extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleChange = e => {
    console.log(e)
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='List 列表' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础列表</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    onClick={console.log.bind(this, 1)}
                  />
                  <AtListItem title='标题文字' arrow='right' />
                  <AtListItem
                    arrow='right'
                    title='标题文字'
                    extraText='详细信息'
                  />
                  <AtListItem
                    isSwitch
                    arrow='right'
                    title='标题文字'
                    onSwitchChange={this.handleChange}
                  />
                  <AtListItem
                    arrow='right'
                    title='标题文字'
                    extraText='详细信息'
                    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG'
                  />
                  <AtListItem
                    arrow='right'
                    note='描述信息'
                    title='标题文字'
                    extraText='详细信息'
                    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG'
                  />
                </AtList>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
